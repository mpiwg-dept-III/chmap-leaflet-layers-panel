"use strict";(self.webpackChunkchmapLeafletLayersPanel=self.webpackChunkchmapLeafletLayersPanel||[]).push([[493],{49493:function(n,a,l){l.r(a);var e=l(31317).BootstrapWrap.Modal,t=function(){var n=null,a=null,l=null;function t(a){var e=n.querySelector("#WMTSNameInput").value,t=n.querySelector("#WMTSUrlInput").value;l(e,t)}return{open:function(o){var d;a||((d=document.createElement("div")).className="modal fade",d.innerHTML='<div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title">Add your WMTS layer</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        <div class="mb-3">\n          <label class="form-label" for="WMTSNameInput">*Layer name</label>\n          <input type="text" id="WMTSNameInput" class="form-control" placeholder="Liao Ning">\n        </div>\n        <div class="mb-3">\n            <label class="form-label" for="WMTSUrlInput">*WMTS Url</label>\n            <input type="text" id="WMTSUrlInput" class="form-control" placeholder="https://chmap.mpiwg-berlin.mpg.de/liaoning/{z}/{x}/{y}.png">\n        </div>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary add-btn">Add</button>\n      </div>\n    </div>\n </div>',document.body.append(d),(n=d).querySelector(".add-btn").onclick=t,a=e.getOrCreateInstance(d)),l=o,a.show()},close:function(){a&&a.hide()}}}();a.default=t}}]);
//# sourceMappingURL=493.chmap-leaflet-layers-panel.js.map