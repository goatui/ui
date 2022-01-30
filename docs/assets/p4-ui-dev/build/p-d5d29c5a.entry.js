import{r as t,c as o,h as r,H as i,g as s}from"./p-ed5f4057.js";const n=class{constructor(r){t(this,r),this.p4ItemClick=o(this,"p4:dropdown-item-click",7),this.hasFocus=!1,this.size="md",this.listVariant="default",this.itemVariant="default",this.isOpen=!1,this.disabled=!1,this.showLoader=!1,this.enableSearch=!1,this.data=[],this.position="bottom-left",this.itemClickHandler=t=>{this.disabled||this.p4ItemClick.emit(t)},this.closeList=()=>{!this.disabled&&this.isOpen&&(this.isOpen=!1,setTimeout((()=>this.setFocus()),100))},this.openList=()=>{this.disabled||this.isOpen||(this.isOpen=!0,setTimeout((()=>this.setFocus()),100))},this.toggleList=()=>{this.isOpen?this.closeList():this.openList()},this.blurHandler=()=>{this.hasFocus=!1},this.focusHandler=()=>{this.hasFocus=!0},this.keyDownHandler=t=>{"Enter"===t.key?(t.preventDefault(),this.toggleList()):"ArrowDown"===t.key?this.isOpen&&(t.preventDefault(),this.listElement.setFocus()):"ArrowUp"===t.key&&this.isOpen&&(t.preventDefault(),this.listElement.setFocus(!0))}}windowClick(t){const o=t.path||t.composedPath();for(const t of o)if(t==this.elm)return;this.isOpen=!1}async setFocus(){this.displayElement.focus()}render(){return r(i,{"aria-disabled":this.disabled?"true":null,focused:this.hasFocus,position:this.position,"is-open":this.isOpen},r("div",{class:{dropdown:!0,[this.position]:!0,"is-open":this.isOpen}},r("button",{class:"dropdown-button",ref:t=>this.displayElement=t,onKeyDown:this.keyDownHandler,onBlur:this.blurHandler,onFocus:this.focusHandler,onClick:t=>{t.preventDefault(),this.toggleList()}},r("div",{class:"slot-container"},r("slot",null))),r("div",{class:"dropdown-result"},this.renderDropdownList())))}renderDropdownList(){if(this.isOpen&&"string"!=typeof this.data)return r("p4-list",{class:"dropdown-list",ref:t=>this.listElement=t,data:this.data,variant:this.listVariant,itemVariant:this.itemVariant,enableSearch:this.enableSearch,"onP4:item-click":t=>{this.closeList(),this.itemClickHandler(t.detail)}})}get elm(){return s(this)}};n.style='*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:inline-block;--dropdown-max-height:inherit}.dropdown{position:relative;z-index:var(--z-index-dropdown-content, 200);height:100%;width:100%;border-radius:var(--border-radius, 5px)}.dropdown .dropdown-button{border:none;background:none;height:100%;width:100%}.dropdown .dropdown-result{position:absolute;width:max-content;line-height:0;transform:scale(0);transition:transform 0.1s ease-out 0s}.dropdown .dropdown-result .dropdown-list{--list-max-height:var(--dropdown-max-height)}.dropdown.is-open .dropdown-result{transform:scale(1)}.dropdown slot::slotted(*){font-family:var(--font-family-paragraph, "Inter", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;padding-bottom:0 !important;margin-bottom:0 !important;color:var(--color-neutral-400, #94a3b8)}.dropdown slot::slotted(*) p4-icon{--color:var(--color-neutral-400, #94a3b8)}.dropdown.bottom-left .dropdown-result{top:calc(100% + var(--space-1, 0.25rem));left:0;transform-origin:left top}.dropdown.bottom-right .dropdown-result{top:calc(100% + var(--space-1, 0.25rem));right:0;transform-origin:right top}.dropdown.top-left .dropdown-result{bottom:calc(100% + var(--space-1, 0.25rem));left:0;transform-origin:left bottom}.dropdown.top-right .dropdown-result{bottom:calc(100% + var(--space-1, 0.25rem));right:0;transform-origin:right bottom}:host([focused]) .dropdown .dropdown-button{outline:none;box-shadow:0 0 0 0.25rem rgba(3, 155, 229, 0.25)}';export{n as p4_dropdown}