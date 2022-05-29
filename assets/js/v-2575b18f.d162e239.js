"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62986],{75133:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-2575b18f",path:"/devices/552-721X2.html",title:"Niko 552-721X2 control via MQTT",lang:"en-US",frontmatter:{title:"Niko 552-721X2 control via MQTT",description:"Integrate your Niko 552-721X2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-03-31T18:50:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Binding",slug:"binding",children:[]},{level:3,title:"Decoupling",slug:"decoupling",children:[]},{level:3,title:"LED",slug:"led",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (l1 endpoint)",slug:"switch-l1-endpoint",children:[]},{level:3,title:"Switch (l2 endpoint)",slug:"switch-l2-endpoint",children:[]},{level:3,title:"Action (enum, l1 endpoint)",slug:"action-enum-l1-endpoint",children:[]},{level:3,title:"Action (enum, l2 endpoint)",slug:"action-enum-l2-endpoint",children:[]},{level:3,title:"Operation_mode (enum, l1 endpoint)",slug:"operation-mode-enum-l1-endpoint",children:[]},{level:3,title:"Operation_mode (enum, l2 endpoint)",slug:"operation-mode-enum-l2-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/552-721X2.md",git:{updatedTime:1653808022e3}}},18696:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const d=(0,o(66252).uE)('<h1 id="niko-552-721x2" tabindex="-1"><a class="header-anchor" href="#niko-552-721x2" aria-hidden="true">#</a> Niko 552-721X2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>552-721X2</td></tr><tr><td>Vendor</td><td>Niko</td></tr><tr><td>Description</td><td>Double connectable switch</td></tr><tr><td>Exposes</td><td>switch (state), action, operation_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/552-721X2.jpg" alt="Niko 552-721X2"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Remove the cover and press the either of the little buttons 3x, the led will flash blue when in pairing mode. The device stays in this mode for 5 minutes or until it succesfully paired.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3><p>This device does not support binding to groups or devices.</p><h3 id="decoupling" tabindex="-1"><a class="header-anchor" href="#decoupling" aria-hidden="true">#</a> Decoupling</h3><p>This device does support decoupling from the build in relay, when the device is decoupled it will emit a &#39;single&#39;, &#39;hold&#39;, and &#39;release&#39; action.</p><h3 id="led" tabindex="-1"><a class="header-anchor" href="#led" aria-hidden="true">#</a> LED</h3><table><thead><tr><th>LED</th><th>Description</th></tr></thead><tbody><tr><td>off</td><td>normal operation, the load is off</td></tr><tr><td>white continues</td><td>normal operation, the load is on</td></tr><tr><td>red flashing</td><td>connection to the zigbee network lost</td></tr><tr><td>blue flashing</td><td>connecting to the zigbee network</td></tr><tr><td>blue continues for 4 sec</td><td>connected succesfulyl to the zigbee network</td></tr></tbody></table><p>The LED can be disabled while the load is on by using a toothpick and holding the <strong>PROG</strong> button for 10 seconds.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#action-enum-l1-endpoint" aria-hidden="true">#</a> Action (enum, l1 endpoint)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>hold</code>, <code>release</code>.</p><h3 id="action-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#action-enum-l2-endpoint" aria-hidden="true">#</a> Action (enum, l2 endpoint)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>hold</code>, <code>release</code>.</p><h3 id="operation-mode-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-l1-endpoint" aria-hidden="true">#</a> Operation_mode (enum, l1 endpoint)</h3><p>Value can be found in the published state on the <code>operation_mode_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="operation-mode-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-l2-endpoint" aria-hidden="true">#</a> Operation_mode (enum, l2 endpoint)</h3><p>Value can be found in the published state on the <code>operation_mode_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',27),i={},n=(0,o(83744).Z)(i,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);