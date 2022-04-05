import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchIcon } from './datasource';

/**
 * @name Icon
 * @description Renders a specified icon.
 * @example <goat-icon name="house"></goat-icon>
 */
@Component({
  tag: 'goat-icon',
  styleUrl: 'goat-icon.scss',
  shadow: true,
})
export class GoatIcon {

  @Prop({ reflect: true }) name: string;

  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' | string = 'md';

  @State() svg: string = '';

  async fetchSvg(name: string) {
    if (this.name)
      this.svg = await fetchIcon(name);
  }


  @Watch('name')
  async handleNameChange(newValue: string) {
    this.svg = await fetchIcon(newValue);
  }

  async componentWillLoad() {
    await this.fetchSvg(this.name);
  }

  private getSize() {
    let size;
    if (this.size === 'sm')
      size = '1.25rem';
    else if (!this.size || this.size === 'md')
      size = '1.5rem';
    else if (this.size === 'lg')
      size = '1.75rem';
    else if (this.size === 'xl')
      size = '2rem';
    else
      size = this.size;
    return size;
  }


  render() {
    const icon = this.svg.replace(/width="([^"]+)"/, 'width="' + this.getSize() + '"').replace(/height="([^"]+)"/, 'height="' + this.getSize() + '"');
    return (
      <Host>
        <div innerHTML={icon} class='icon' />
      </Host>
    );
  }

}
