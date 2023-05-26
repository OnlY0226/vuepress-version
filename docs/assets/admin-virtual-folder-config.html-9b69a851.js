import{_ as e,a as i,b as o}from"./virtualFolderAdd-403af138.js";import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as a,a as r}from"./app-b7cecf6a.js";const s={},d=r('<h1 id="虚拟文件夹配置" tabindex="-1"><a class="header-anchor" href="#虚拟文件夹配置" aria-hidden="true">#</a> 虚拟文件夹配置</h1><p>在配置虚拟文件夹前，需要熟悉文件属性以及对目标虚拟文件夹有一定了解。 虚拟文件夹可统筹文件树各文件夹中统一属性的文件。 配置虚拟文件夹可能需要同时配置文件树属性。</p><p><img src="'+e+'" alt="virtualFolderConfig" loading="lazy"><img src="'+i+'" alt="virtualFolderConfig2" loading="lazy"></p><ul><li><p>图示案例解析：</p><ol><li>搜索文件树下所有文档类型为Case的文件（父级文件夹）</li><li>每个 <strong>父级文件夹</strong> 设有四个关联文件夹（&quot;Support file&quot;、&quot;Claims Form&quot;、&quot;Reimburasement&quot;、&quot;Cost Model&quot;）</li><li>其中关联文件夹&quot;Cost Model&quot;取 <strong>父级文件夹</strong> 的case:caseId搜索所有case:caseId与 <strong>父级文件夹</strong> case:caseId一致的且文件的文档类型为&quot;CostModelNewCase&quot;的文件（6）</li></ol></li><li><p>添加虚拟文件夹，可同时设置可见用户及可见分组（1）</p><figure><img src="'+o+`" alt="virtualFolderAdd" tabindex="0" loading="lazy"><figcaption>virtualFolderAdd</figcaption></figure></li><li><p>创建目录及文件，点击 <code>创建文件夹按钮</code> 创建文件夹，点击 <code>创建文件按钮</code> 创建文件（2）</p></li><li><p>配置虚拟文件夹搜索条件。（3）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Label: 唯一标识
Document Type：搜索条件
Parent Key：父级关联数据
Meta：额外搜索条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Document Type 与Meta配置时，需要参考文件树结构。</p></li><li><p>配置完成后点击 <code>保存按钮</code> 保存数据。（4）</p></li><li><p>当文件树配置完毕后，可以在右侧进行预览（5）</p></li></ul>`,4),n=[d];function c(u,p){return l(),a("div",null,n)}const f=t(s,[["render",c],["__file","admin-virtual-folder-config.html.vue"]]);export{f as default};