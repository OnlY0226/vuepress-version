import{_ as e,a as o}from"./aclAdd-059b7c44.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as i,a as n}from"./app-b7cecf6a.js";const t={},r=n('<h1 id="文件权限管理" tabindex="-1"><a class="header-anchor" href="#文件权限管理" aria-hidden="true">#</a> 文件权限管理</h1><p>文档权限分为 <strong>可读</strong>、<strong>可写</strong>、<strong>管理</strong>。文档可单独设置权限，也可 <strong>继承</strong> 父级文件权限。</p><figure><img src="'+e+'" alt="文件权限管理图" tabindex="0" loading="lazy"><figcaption>文件权限管理图</figcaption></figure><ul><li>在左侧选择文件树选中需要配置的文件， <ol><li><p>点击 <code>Inherent</code>模块的 <code>Inherent</code>按钮设置 <strong>继承</strong> 父级权限（继承后 <code>Inherent</code>按钮变为<code>Remove Inherent</code>按钮）。</p></li><li><p>点击 <code>Inherent</code>模块的 <code>Remove Inherent</code>按钮设置取消 <strong>继承</strong> 父级权限（取消继承后 <code>Remove Inherent</code>按钮变为<code>Inherent</code>按钮）。</p></li><li><p>点击<code>Local</code>模块的 <code>添加</code> 按钮，将会弹出添加权限表格弹窗，填写后添加相应人员文件权限。</p><figure><img src="'+o+'" alt="文件权限管理图" tabindex="0" loading="lazy"><figcaption>文件权限管理图</figcaption></figure></li><li><p>双击<code>Local</code>模块的<code>有效期</code>列，将会弹出有效期表格弹窗，修改后设置添加相应人员文件权限有效期。</p></li><li><p>点击<code>Local</code>模块的<code>读</code>、<code>写</code>、<code>管理</code>、<code>打印</code>列的开关设置相应权限。</p><div class="hint-container warning"><p class="hint-container-title">Note</p><ul><li><code>读</code> 权限关闭，同时关闭 <code>写</code> 、<code>管理</code> 权限</li><li><code>写</code> 权限关闭，同时关闭 <code>管理</code> 权限</li><li><code>管理</code> 权限打开，同时打开 <code>读</code> 、<code>写</code> 权限</li><li><code>写</code> 权限打开，同时打开 <code>读</code> 权限</li></ul></div></li></ol></li></ul>',4),l=[r];function a(s,p){return d(),i("div",null,l)}const _=c(t,[["render",a],["__file","admin-file-permission.html.vue"]]);export{_ as default};