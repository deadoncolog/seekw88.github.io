(()=>{
 if(location.pathname!=='/search.html')return;
 const keyword=(new URLSearchParams(location.search).get('kw')||'').trim();
 const terms=keyword.toLocaleLowerCase().replace(/小红书/g,' 小红书 ').replace(/(老号|白号|实名|海外|粉丝|专业|运营|cookie|男号|女号|续费)/g,' $1 ').split(/\s+/).filter(Boolean).filter(t=>!['购买','出售','批发','账号','帐号','号'].includes(t));
 const field=document.querySelector('input[name="kw"]');if(field)field.value=keyword;
 const matches=text=>terms.every(term=>text.toLocaleLowerCase().includes(term));
 let count=0;const groups=new Map();
 for(const row of document.querySelectorAll('#body_xiao>table tr')){
  const buy=row.querySelector('a[href^="/product-"]');if(!buy)continue;
  const name=row.querySelector('font[title]')?.getAttribute('title')||row.cells[0]?.textContent||'';
  const match=matches(name);row.hidden=!match;if(match)count++;
  const group=[...row.classList].find(c=>/^cid\d+$/.test(c));if(match&&group)groups.set(group,true);
 }
 for(const row of document.querySelectorAll('#body_xiao>table tr:has(th[colspan])'))row.hidden=!groups.has([...row.classList].find(c=>/^cid\d+$/.test(c)));
 const list=document.querySelector('.mobile-product-list');if(list){let heading=null,visible=0;for(const child of list.children){if(child.classList.contains('mobile-category-heading')){if(heading)heading.hidden=!visible;heading=child;visible=0;}else if(child.classList.contains('mobile-product-card')){const match=matches(child.querySelector('.mobile-product-name')?.textContent||'');child.hidden=!match;if(match)visible++;}}if(heading)heading.hidden=!visible;}
 const message=document.createElement('div');message.id='product-search-status';message.setAttribute('role','status');message.style.cssText='padding:16px;margin:12px 0;background:#fff;border:1px solid #e8edf2;border-radius:6px;color:#333;line-height:1.7';
 message.textContent=keyword?`“${keyword}”的搜索结果：${count}款商品`:`全部商品：${count}款`;
 if(!count){const help=document.createElement('p');help.textContent='没有找到匹配的商品，请换一个关键词。';message.appendChild(help);}
 document.querySelector('#body_xiao')?.prepend(message);
 document.title=keyword?`${keyword} - 商品搜索`:'商品搜索';
})();
