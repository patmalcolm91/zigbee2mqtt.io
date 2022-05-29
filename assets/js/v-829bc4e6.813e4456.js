"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[61669],{28139:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-829bc4e6",path:"/devices/SJCGQ11LM.html",title:"Xiaomi SJCGQ11LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi SJCGQ11LM control via MQTT",description:"Integrate your Xiaomi SJCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Battery",slug:"battery",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Water_leak (binary)",slug:"water-leak-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SJCGQ11LM.md",git:{updatedTime:1653808022e3}}},58636:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var i=a(66252);const r=(0,i.uE)('<h1 id="xiaomi-sjcgq11lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-sjcgq11lm" aria-hidden="true">#</a> Xiaomi SJCGQ11LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SJCGQ11LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara water leak sensor</td></tr><tr><td>Exposes</td><td>battery, water_leak, battery_low, voltage, temperature, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SJCGQ11LM.jpg" alt="Xiaomi SJCGQ11LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery" aria-hidden="true">#</a> Battery</h3><p>Uses a CR2032 battery</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold water logo on the device for +- 5 seconds (you have to press quite hard) until the blue light blinks three times, release the water logo (the blue light will blink once more) and wait.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',8),o=(0,i.Uk)("How to use device type specific configuration"),d=(0,i.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary" aria-hidden="true">#</a> Water_leak (binary)</h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water_leak is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),l={},n=(0,a(83744).Z)(l,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[o])),_:1})])]),d],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);