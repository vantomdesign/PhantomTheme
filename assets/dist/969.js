"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[969],{969:(t,e,s)=>{s.r(e),s.d(e,{salla_infinite_scroll:()=>a});var n=s(378),l=s(863);const a=class{constructor(t){(0,n.r)(this,t),this.nextPage="",this.autoload=!1,this.container=".s-infinite-scroll-container",this.item=".list-block",l.H.setHost(this.host),this.status=document.createElement("div"),this.status.className="s-infinite-scroll-wrapper",this.status.innerHTML=`<div class="s-infinite-scroll-status" style="display:none">\n        <p class="s-infinite-scroll-last infinite-scroll-last"></p>\n        <p class="s-infinite-scroll-error infinite-scroll-error"></p>\n      </div>\n      <a href="${this.nextPage}" class="s-button-btn btn--has-loading s-button-primary">\n        <span class="s-button-text">${salla.lang.get("common.elements.load_more")}</span>\n        <span class="s-button-loader s-button-loader-start" style="display: none"></span>\n      </a>`,this.btnLoader=this.status.querySelector(".s-button-loader"),salla.event.on("languages::translations.loaded",(()=>{this.status.querySelector(".s-button-text").innerHTML=salla.lang.get("common.elements.load_more"),this.status.querySelector(".s-infinite-scroll-last").innerHTML=salla.lang.get("common.elements.end_of_content"),this.status.querySelector(".s-infinite-scroll-error").innerHTML=salla.lang.get("common.elements.failed_to_load_more")}))}loading(t=!0){this.btnLoader.style.display=t?"inline-block":"none"}render(){return this.nextPage.length>1?(0,n.h)(n.H,{class:"s-infinite-scroll-container"},(0,n.h)("slot",null)):""}componentDidLoad(){if(0===this.nextPage.length)return;this.host.insertAdjacentElement("afterend",this.status);let t=this;salla.infiniteScroll.initiate(this.container,{history:!!this.autoload&&"push",scrollThreshold:!!this.autoload&&400,nextPage:this.nextPage,checkLastPage:'salla-infinite-scroll[next-page*=":"],salla-infinite-scroll[next-page*="."]',status:".s-infinite-scroll-status",button:this.status.querySelector(".s-button-btn"),append:this.item,path:function(){return t.nextPage.replace(/page\=(\d)/g,"page="+(this.loadCount+2))}}).on("request",(()=>this.loading())).on("load",(()=>this.loading(!1))).on("error",(()=>this.loading(!1)))}get host(){return(0,n.g)(this)}}},863:(t,e,s)=>{s.d(e,{H:()=>l}),salla.event.setMaxListeners(20);class n extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,e){var s;return null===(s=this.getElement(t))||void 0===s?void 0:s.getAttribute(e)}val(t){return this.getAttribute(t,"value")}isUser(){return"user"===salla.config.get("user.type")}}const l=new n}}]);