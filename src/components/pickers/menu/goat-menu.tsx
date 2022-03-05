import { Component, ComponentInterface, Element, h, Listen, Method, Prop, State, Watch } from '@stencil/core';

/**
 * @name Menu
 * @description Menus display a list of choices on temporary surfaces.
 * @img /assets/img/menu.png
 */
@Component({
  tag: 'goat-menu',
  styleUrl: 'goat-menu.scss',
  shadow: true,
})
export class GoatMenu implements ComponentInterface {


  @Element() elm!: HTMLElement;

  @Prop() showLoader: boolean = false;

  @Prop({ mutable: true }) value?: string | number;

  @Prop({ mutable: true }) empty: boolean = false;

  @Prop({ mutable: true }) emptyState: string;

  @State()
  internalEmptyState: {title: string, description: string};

  @Watch('emptyState')
  parseEmptyState() {
    if (this.emptyState) {
      this.internalEmptyState = JSON.parse(this.emptyState);
    }
  }

  @Listen('keydown', { target: 'window' })
  handleKeyDown(evt: KeyboardEvent) {
    const path = evt.composedPath();
    for (const elm of path) {
      if (elm !== this.elm)
        continue;
      if (evt.key === 'ArrowDown') {
        evt.preventDefault();
        this.focusNextItem(evt.target);
      } else if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        this.focusPreviousItem(evt.target);
      }
    }
  }

  /**
   * Sets focus on first menu item. Use this method instead of the global
   * `element.focus()`.
   */
  @Method()
  async setFocus() {
    const firstMenuItem = this.getFirstItem();
    firstMenuItem?.setFocus();
  }

  private getFirstItem() {
    return this.elm.querySelector('goat-menu-item');
  }

  private focusNextItem(currentItem) {
    let nextItem: any = currentItem.nextElementSibling;
    do {
      if (nextItem && nextItem.tagName === 'GOAT-MENU-ITEM' && !nextItem.disabled) {
        nextItem.setFocus();
        return;
      }
      if (!nextItem) {
        nextItem = this.elm.querySelector('goat-menu-item');
      } else {
        nextItem = nextItem.nextElementSibling;
      }
    } while (nextItem !== currentItem);
  }

  private focusPreviousItem(currentItem) {
    let previousItem: any = currentItem.previousElementSibling;
    do {
      if (previousItem && previousItem.tagName === 'GOAT-MENU-ITEM' && !previousItem.disabled) {
        previousItem.setFocus();
        return;
      }
      if (!previousItem) {
        previousItem = this.elm.querySelector('goat-menu-item:last-child');
      } else {
        previousItem = previousItem.previousElementSibling;
      }
    } while (previousItem !== currentItem);
  }


  componentWillLoad() {
    this.parseEmptyState();
  }


  render() {
    return <div class='menu'>
      <slot />
      {this.renderEmptyState()}
    </div>;
  }

  private renderEmptyState() {
    if (this.empty)
      return <goat-empty-state class="empty-menu" data-theme="dark">
        <div slot='title'>{this.internalEmptyState.title}</div>
        <div slot='description'>{this.internalEmptyState.description}</div>
      </goat-empty-state>;
  }

}
