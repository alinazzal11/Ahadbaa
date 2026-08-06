'use strict';

const STORAGE_KEY = 'alhadbaa_pharmacy_v1';
const LANGUAGE_KEY = 'alhadbaa_language';

const I18N = {
  en: {
    brandName: 'Alhadbaa', brandSubtitle: 'Pharmacy Manager', storedDevice: 'Data is stored on this device.',
    quickAdd: '+ Quick add', switchLanguage: 'العربية',
    nav: { dashboard:'Dashboard', sales:'Daily Sales', payments:'Supplier Payments', expenses:'Expenses', advances:'Employee Advances', withdrawals:'Owner Withdrawals', reports:'Reports', backup:'Backup & Restore' },
    pages: {
      dashboard:['Dashboard','Financial overview of your pharmacy'], sales:['Daily Sales','Enter the pharmacy closing totals'],
      payments:['Supplier Payments','Track payments and bonus value'], expenses:['Expenses','Operating expenses only'],
      advances:['Employee Advances','Advances paid to pharmacy employees'], withdrawals:['Owner Withdrawals','Personal owner withdrawals'],
      reports:['Reports','Review totals and trends by date range'], backup:['Backup & Restore','Protect and transfer your records']
    },
    record: { sales:'daily sale', payments:'supplier payment', expenses:'expense', advances:'employee advance', withdrawals:'owner withdrawal' },
    fields: { date:'Date', sales:'Total sales', profit:'Total profit', notes:'Notes', supplier:'Supplier / warehouse', amount:'Amount', paymentAmount:'Payment amount', discount:'Discount / bonus %', category:'Category', details:'Details', employee:'Employee' },
    categories: { Rent:'Rent', Electricity:'Electricity', Internet:'Internet', Salary:'Salary', Transport:'Transport', Supplies:'Supplies', Other:'Other' },
    dashboard: { todaySales:'Today’s Sales', todayProfit:'Today’s Profit', monthlySales:'Monthly Sales', monthlyProfit:'Monthly Profit', payments:'Supplier Payments', expenses:'Expenses', advances:'Employee Advances', withdrawals:'Owner Withdrawals', trend:'Recent sales trend', viewSales:'View sales', recentActivity:'Recent activity', addSalesChart:'Add daily sales to see the chart.', noActivity:'No activity yet.' },
    table: { search:'Search records...', add:'+ Add', actions:'Actions', edit:'Edit', delete:'Delete', noRecords:'No records yet.', supplier:'Supplier', finalValue:'Final value', discount:'Discount', sales:'Sales', profit:'Profit', details:'Details' },
    form: { add:'Add', edit:'Edit', cancel:'Cancel', save:'Save record', duplicate:'A daily sales record already exists for this date.', saved:'Saved successfully', confirmDelete:'Delete this record? This cannot be undone.', deleted:'Record deleted' },
    activity: { added:'Added', edited:'Edited', deleted:'Deleted' },
    reports: { from:'From', to:'To', export:'Export CSV summary', sales:'Sales', profit:'Profit', payments:'Supplier Payments', expenses:'Expenses', advances:'Employee Advances', withdrawals:'Owner Withdrawals', net:'Net after expenses, advances and withdrawals', combinedTitle:'Sales vs. owner withdrawals', combinedSubtitle:'Daily values for the selected period', salesTrend:'Sales trend', profitTrend:'Profit trend', withdrawalTrend:'Owner withdrawals trend', noChartData:'No records in the selected date range.', date:'Date', amount:'Amount' },
    backup: { exportTitle:'Export backup', exportText:'Download all pharmacy data as a JSON backup file.', download:'Download backup', restoreTitle:'Restore backup', restoreText:'Replace data on this device with a previous JSON backup.', choose:'Choose backup', tablesTitle:'Export tables', tablesText:'Download every module as CSV files.', exportTables:'Export CSV files', clearTitle:'Clear application', clearText:'Remove all records from this browser permanently.', clear:'Clear all data', restored:'Backup restored', invalid:'Invalid backup file', exported:'CSV export started', confirmClear:'Permanently delete all data?', cleared:'All data cleared' },
    chart: { sales:'Sales', withdrawals:'Withdrawals', profit:'Profit' }
  },
  ar: {
    brandName: 'الحدباء', brandSubtitle: 'إدارة الصيدلية', storedDevice: 'تُحفظ البيانات على هذا الجهاز.',
    quickAdd: '+ إضافة سريعة', switchLanguage: 'English',
    nav: { dashboard:'لوحة التحكم', sales:'المبيعات اليومية', payments:'تسديدات المجهزين', expenses:'المصاريف', advances:'سلف الموظفين', withdrawals:'السحوبات الشخصية', reports:'التقارير', backup:'النسخ والاستعادة' },
    pages: {
      dashboard:['لوحة التحكم','نظرة مالية عامة على الصيدلية'], sales:['المبيعات اليومية','أدخل إجماليات إغلاق الصيدلية'],
      payments:['تسديدات المجهزين','متابعة التسديدات وقيمة البونص'], expenses:['المصاريف','مصاريف التشغيل فقط'],
      advances:['سلف الموظفين','السلف المدفوعة لموظفي الصيدلية'], withdrawals:['السحوبات الشخصية','السحوبات الشخصية للمالك'],
      reports:['التقارير','مراجعة الإجماليات والاتجاهات حسب المدة'], backup:['النسخ والاستعادة','حماية البيانات ونقلها']
    },
    record: { sales:'مبيعات يومية', payments:'تسديد مجهز', expenses:'مصروف', advances:'سلفة موظف', withdrawals:'سحب شخصي' },
    fields: { date:'التاريخ', sales:'إجمالي المبيعات', profit:'إجمالي الربح', notes:'ملاحظات', supplier:'المجهز / المذخر', amount:'المبلغ', paymentAmount:'مبلغ التسديد', discount:'نسبة الخصم / البونص %', category:'الفئة', details:'التفاصيل', employee:'الموظف' },
    categories: { Rent:'الإيجار', Electricity:'الكهرباء', Internet:'الإنترنت', Salary:'الراتب', Transport:'النقل', Supplies:'المستلزمات', Other:'أخرى' },
    dashboard: { todaySales:'مبيعات اليوم', todayProfit:'ربح اليوم', monthlySales:'مبيعات الشهر', monthlyProfit:'ربح الشهر', payments:'تسديدات المجهزين', expenses:'المصاريف', advances:'سلف الموظفين', withdrawals:'السحوبات الشخصية', trend:'اتجاه المبيعات الأخيرة', viewSales:'عرض المبيعات', recentActivity:'النشاط الأخير', addSalesChart:'أضف المبيعات اليومية لعرض المخطط.', noActivity:'لا يوجد نشاط بعد.' },
    table: { search:'البحث في السجلات...', add:'+ إضافة', actions:'الإجراءات', edit:'تعديل', delete:'حذف', noRecords:'لا توجد سجلات بعد.', supplier:'المجهز', finalValue:'القيمة النهائية', discount:'البونص', sales:'المبيعات', profit:'الربح', details:'التفاصيل' },
    form: { add:'إضافة', edit:'تعديل', cancel:'إلغاء', save:'حفظ السجل', duplicate:'يوجد سجل مبيعات يومية لهذا التاريخ مسبقاً.', saved:'تم الحفظ بنجاح', confirmDelete:'هل تريد حذف هذا السجل؟ لا يمكن التراجع.', deleted:'تم حذف السجل' },
    activity: { added:'تمت إضافة', edited:'تم تعديل', deleted:'تم حذف' },
    reports: { from:'من', to:'إلى', export:'تصدير ملخص CSV', sales:'المبيعات', profit:'الربح', payments:'تسديدات المجهزين', expenses:'المصاريف', advances:'سلف الموظفين', withdrawals:'السحوبات الشخصية', net:'الصافي بعد المصاريف والسلف والسحوبات', combinedTitle:'المبيعات مقابل السحوبات الشخصية', combinedSubtitle:'القيم اليومية ضمن المدة المحددة', salesTrend:'اتجاه المبيعات', profitTrend:'اتجاه الربح', withdrawalTrend:'اتجاه السحوبات الشخصية', noChartData:'لا توجد سجلات ضمن المدة المحددة.', date:'التاريخ', amount:'المبلغ' },
    backup: { exportTitle:'تصدير نسخة احتياطية', exportText:'تنزيل جميع بيانات الصيدلية في ملف JSON.', download:'تنزيل النسخة', restoreTitle:'استعادة نسخة احتياطية', restoreText:'استبدال بيانات هذا الجهاز بنسخة سابقة.', choose:'اختيار نسخة', tablesTitle:'تصدير الجداول', tablesText:'تنزيل كل قسم بصيغة CSV.', exportTables:'تصدير ملفات CSV', clearTitle:'مسح التطبيق', clearText:'حذف جميع السجلات من هذا المتصفح نهائياً.', clear:'مسح جميع البيانات', restored:'تمت استعادة النسخة', invalid:'ملف النسخة غير صالح', exported:'بدأ تصدير CSV', confirmClear:'هل تريد حذف جميع البيانات نهائياً؟', cleared:'تم مسح جميع البيانات' },
    chart: { sales:'المبيعات', withdrawals:'السحوبات', profit:'الربح' }
  }
};

const state = { page:'dashboard', editing:null, data:loadData(), filters:{}, language:localStorage.getItem(LANGUAGE_KEY)==='ar'?'ar':'en' };
const defs = {
  sales:{fields:[['date','date','date',true],['sales','sales','number',true],['profit','profit','number',true],['notes','notes','textarea',false]]},
  payments:{fields:[['supplier','supplier','text',true],['date','date','date',true],['amount','paymentAmount','number',true],['discount','discount','number',false],['notes','notes','textarea',false]]},
  expenses:{fields:[['date','date','date',true],['category','category','select',true,['Rent','Electricity','Internet','Salary','Transport','Supplies','Other']],['amount','amount','number',true],['notes','details','textarea',false]]},
  advances:{fields:[['date','date','date',true],['employee','employee','text',true],['amount','amount','number',true],['notes','details','textarea',false]]},
  withdrawals:{fields:[['date','date','date',true],['amount','amount','number',true],['notes','details','textarea',false]]}
};

function emptyData(){ return {sales:[],payments:[],expenses:[],advances:[],withdrawals:[],activity:[],settings:{theme:'light'}}; }
function loadData(){ try { return Object.assign(emptyData(),JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')); } catch { return emptyData(); } }
function saveData(){ localStorage.setItem(STORAGE_KEY,JSON.stringify(state.data)); }
const $ = s => document.querySelector(s);
const t = path => path.split('.').reduce((obj,key)=>obj?.[key],I18N[state.language]) ?? path;
const money = n => `${new Intl.NumberFormat('en-US',{maximumFractionDigits:0,useGrouping:true}).format(Number(n||0))} IQD`;
const dateToday = () => new Date().toISOString().slice(0,10);
const uid = () => crypto.randomUUID?.() || Date.now().toString(36)+Math.random().toString(36).slice(2);
const sum = (arr,key) => arr.reduce((a,x)=>a+Number(x[key]||0),0);
const inRange = (date,from,to) => (!from||date>=from)&&(!to||date<=to);
const monthKey = () => dateToday().slice(0,7);

function applyLanguage(){
  const isAr=state.language==='ar';
  document.documentElement.lang=state.language; document.documentElement.dir=isAr?'rtl':'ltr';
  document.body.classList.toggle('rtl',isAr);
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.dataset.i18n); });
  $('#languageBtn').textContent=t('switchLanguage');
  $('#menuBtn').setAttribute('aria-label',isAr?'فتح القائمة':'Open menu');
  $('#themeBtn').setAttribute('title',isAr?'تبديل الوضع الداكن':'Toggle dark mode');
  updatePageHeader();
}
function updatePageHeader(){ const meta=t(`pages.${state.page}`); $('#pageTitle').textContent=meta[0]; $('#pageSubtitle').textContent=meta[1]; }
function toggleLanguage(){ state.language=state.language==='en'?'ar':'en'; localStorage.setItem(LANGUAGE_KEY,state.language); applyLanguage(); render(); }
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200);}
function activity(action,type){state.data.activity.unshift({id:uid(),action,type,time:new Date().toISOString()});state.data.activity=state.data.activity.slice(0,50);}
function activityText(a){ if(a.action&&a.type)return `${t(`activity.${a.action}`)} ${t(`record.${a.type}`)}`; return a.text||''; }
function navigate(page){state.page=page;document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page));updatePageHeader();$('#sidebar').classList.remove('open');render();}
function render(){if(state.page==='dashboard')renderDashboard();else if(defs[state.page])renderTablePage(state.page);else if(state.page==='reports')renderReports();else renderBackup();}

function renderDashboard(){
  const d=state.data,today=dateToday(),month=monthKey(),todays=d.sales.find(x=>x.date===today)||{},monthSales=d.sales.filter(x=>x.date.startsWith(month));
  const metrics=[['dashboard.todaySales',todays.sales],['dashboard.todayProfit',todays.profit],['dashboard.monthlySales',sum(monthSales,'sales')],['dashboard.monthlyProfit',sum(monthSales,'profit')],['dashboard.payments',sum(d.payments,'finalAmount')],['dashboard.expenses',sum(d.expenses,'amount')],['dashboard.advances',sum(d.advances,'amount')],['dashboard.withdrawals',sum(d.withdrawals,'amount')]];
  const recent=[...d.sales].sort((a,b)=>a.date.localeCompare(b.date)).slice(-10),max=Math.max(...recent.map(x=>Number(x.sales)),1);
  $('#content').innerHTML=`<div class="kpi-grid">${metrics.map(m=>`<div class="card kpi"><span>${t(m[0])}</span><strong class="money-value">${money(m[1])}</strong></div>`).join('')}</div><div class="layout-grid"><div class="card panel"><div class="panel-head"><h2>${t('dashboard.trend')}</h2><button class="secondary-btn" data-go="sales">${t('dashboard.viewSales')}</button></div><div class="chart">${recent.length?recent.map(x=>`<div class="bar-wrap"><div class="bar" style="height:${Math.max(4,Number(x.sales)/max*210)}px"></div>${x.date.slice(5)}</div>`).join(''):`<div class="empty">${t('dashboard.addSalesChart')}</div>`}</div></div><div class="card panel"><div class="panel-head"><h2>${t('dashboard.recentActivity')}</h2></div><div class="activity">${d.activity.length?d.activity.slice(0,7).map(a=>`<div class="activity-item"><strong>${esc(activityText(a))}</strong><small>${new Date(a.time).toLocaleString(state.language==='ar'?'ar-IQ-u-nu-latn':'en-US-u-nu-latn')}</small></div>`).join(''):`<div class="empty">${t('dashboard.noActivity')}</div>`}</div></div></div>`;
  document.querySelector('[data-go]')?.addEventListener('click',e=>navigate(e.currentTarget.dataset.go));
}

function tableHeaders(type){
  return {
    sales:[t('fields.date'),t('table.sales'),t('table.profit'),t('fields.notes')],
    payments:[t('table.supplier'),t('fields.date'),t('fields.amount'),t('table.discount'),t('table.finalValue')],
    expenses:[t('fields.date'),t('fields.category'),t('fields.amount'),t('table.details')],
    advances:[t('fields.date'),t('fields.employee'),t('fields.amount'),t('table.details')],
    withdrawals:[t('fields.date'),t('fields.amount'),t('table.details')]
  }[type];
}
function renderTablePage(type){
  const rows=state.data[type],q=(state.filters[type]||'').toLowerCase(),filtered=rows.filter(r=>Object.values(r).some(v=>String(v).toLowerCase().includes(q))).sort((a,b)=>(b.date||'').localeCompare(a.date||'')),headers=tableHeaders(type);
  $('#content').innerHTML=`<div class="toolbar"><input id="searchInput" placeholder="${t('table.search')}" value="${esc(state.filters[type]||'')}"><button class="primary-btn" id="addBtn">${t('table.add')} ${t(`record.${type}`)}</button></div><div class="card table-card"><div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}<th>${t('table.actions')}</th></tr></thead><tbody>${filtered.length?filtered.map(r=>rowHtml(type,r)).join(''):`<tr><td colspan="${headers.length+1}" class="empty">${t('table.noRecords')}</td></tr>`}</tbody></table></div></div>`;
  $('#addBtn').onclick=()=>openForm(type); $('#searchInput').oninput=e=>{state.filters[type]=e.target.value;renderTablePage(type);};
  document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>openForm(type,b.dataset.edit)); document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>removeRecord(type,b.dataset.delete));
}
function rowHtml(type,r){
  let cells='';
  if(type==='sales')cells=`<td>${r.date}</td><td class="money-value">${money(r.sales)}</td><td class="money-value">${money(r.profit)}</td><td>${esc(r.notes||'')}</td>`;
  if(type==='payments')cells=`<td>${esc(r.supplier)}</td><td>${r.date}</td><td class="money-value">${money(r.amount)}</td><td class="ltr-value">${Number(r.discount||0)}%</td><td class="money-value">${money(r.finalAmount)}</td>`;
  if(type==='expenses')cells=`<td>${r.date}</td><td>${esc(t(`categories.${r.category}`))}</td><td class="money-value">${money(r.amount)}</td><td>${esc(r.notes||'')}</td>`;
  if(type==='advances')cells=`<td>${r.date}</td><td>${esc(r.employee)}</td><td class="money-value">${money(r.amount)}</td><td>${esc(r.notes||'')}</td>`;
  if(type==='withdrawals')cells=`<td>${r.date}</td><td class="money-value">${money(r.amount)}</td><td>${esc(r.notes||'')}</td>`;
  return `<tr>${cells}<td><div class="actions"><button class="mini-btn" data-edit="${r.id}">${t('table.edit')}</button><button class="mini-btn delete" data-delete="${r.id}">${t('table.delete')}</button></div></td></tr>`;
}
function openForm(type,id=null){
  state.editing={type,id}; const old=id?state.data[type].find(x=>x.id===id):{};
  $('#modalTitle').textContent=`${id?t('form.edit'):t('form.add')} ${t(`record.${type}`)}`;
  $('#recordForm').innerHTML=`<div class="form-grid">${defs[type].fields.map(([name,labelKey,input,required,options])=>fieldHtml(name,t(`fields.${labelKey}`),input,required,options,old[name]??(name==='date'?dateToday():''))).join('')}</div><div class="form-actions"><button type="button" class="secondary-btn" id="cancelForm">${t('form.cancel')}</button><button class="primary-btn" type="submit">${t('form.save')}</button></div>`;
  $('#modalBackdrop').classList.remove('hidden'); $('#cancelForm').onclick=closeModal; $('#recordForm').onsubmit=submitForm;
}
function fieldHtml(name,label,input,required,options,value){
  const full=input==='textarea'?' full':''; let control;
  if(input==='select') control=`<select name="${name}" ${required?'required':''}>${options.map(o=>`<option value="${o}" ${o===value?'selected':''}>${t(`categories.${o}`)}</option>`).join('')}</select>`;
  else if(input==='textarea') control=`<textarea name="${name}" rows="3">${esc(value)}</textarea>`;
  else control=`<input name="${name}" type="${input}" value="${esc(value)}" ${required?'required':''} ${input==='number'?'min="0" step="any" inputmode="decimal"':''}>`;
  return `<div class="field${full}"><label>${label}</label>${control}</div>`;
}
function submitForm(e){
  e.preventDefault(); const {type,id}=state.editing,fd=Object.fromEntries(new FormData(e.target));
  ['sales','profit','amount','discount'].forEach(k=>{if(k in fd)fd[k]=Number(fd[k]||0);});
  if(type==='payments')fd.finalAmount=fd.amount*(1+fd.discount/100);
  if(type==='sales'&&!id&&state.data.sales.some(x=>x.date===fd.date)){toast(t('form.duplicate'));return;}
  if(id){const i=state.data[type].findIndex(x=>x.id===id);state.data[type][i]={...state.data[type][i],...fd,updatedAt:new Date().toISOString()};activity('edited',type);}
  else{state.data[type].push({id:uid(),...fd,createdAt:new Date().toISOString()});activity('added',type);}
  saveData();closeModal();render();toast(t('form.saved'));
}
function removeRecord(type,id){if(!confirm(t('form.confirmDelete')))return;state.data[type]=state.data[type].filter(x=>x.id!==id);activity('deleted',type);saveData();render();toast(t('form.deleted'));}
function closeModal(){$('#modalBackdrop').classList.add('hidden');state.editing=null;}

function reportData(from,to){ const filtered={};Object.keys(defs).forEach(k=>filtered[k]=state.data[k].filter(x=>inRange(x.date,from,to)));return filtered; }
function mergeDailySeries(filtered){
  const map=new Map();
  const ensure=date=>{if(!map.has(date))map.set(date,{date,sales:0,profit:0,withdrawals:0});return map.get(date);};
  filtered.sales.forEach(r=>{const p=ensure(r.date);p.sales+=Number(r.sales||0);p.profit+=Number(r.profit||0);});
  filtered.withdrawals.forEach(r=>{ensure(r.date).withdrawals+=Number(r.amount||0);});
  return [...map.values()].sort((a,b)=>a.date.localeCompare(b.date));
}
function lineChartSvg(data,series,emptyText){
  if(!data.length)return `<div class="chart-empty">${emptyText}</div>`;
  const W=900,H=280,p={l:58,r:20,t:24,b:45},cw=W-p.l-p.r,ch=H-p.t-p.b;
  const max=Math.max(...data.flatMap(d=>series.map(s=>Number(d[s.key]||0))),1),count=data.length;
  const x=i=>p.l+(count===1?cw/2:i*cw/(count-1)), y=v=>p.t+ch-(Number(v||0)/max)*ch;
  const grid=[0,.25,.5,.75,1].map(r=>{const yy=p.t+ch-r*ch;return `<line x1="${p.l}" y1="${yy}" x2="${W-p.r}" y2="${yy}" class="chart-grid-line"/><text x="${p.l-8}" y="${yy+4}" text-anchor="end" class="chart-axis-text">${compact(max*r)}</text>`;}).join('');
  const labels=data.map((d,i)=>{if(count>8&&i%Math.ceil(count/7)!==0&&i!==count-1)return'';return `<text x="${x(i)}" y="${H-14}" text-anchor="middle" class="chart-axis-text">${d.date.slice(5)}</text>`;}).join('');
  const paths=series.map((s,idx)=>{const points=data.map((d,i)=>`${x(i)},${y(d[s.key])}`).join(' ');const dots=data.length<=16?data.map((d,i)=>`<circle cx="${x(i)}" cy="${y(d[s.key])}" r="3.5" class="chart-dot series-${idx}"><title>${d.date}: ${money(d[s.key])}</title></circle>`).join(''):'';return `<polyline points="${points}" class="chart-line series-${idx}"/>${dots}`;}).join('');
  const legend=series.map((s,idx)=>`<span><i class="legend-swatch series-${idx}"></i>${esc(s.label)}</span>`).join('');
  return `<div class="line-chart-wrap"><div class="chart-legend">${legend}</div><svg class="line-chart" viewBox="0 0 ${W} ${H}" role="img">${grid}${labels}${paths}</svg></div>`;
}
function compact(n){return new Intl.NumberFormat('en-US',{notation:'compact',maximumFractionDigits:1}).format(Number(n||0));}
function renderReports(){
  const from=state.filters.from||monthKey()+'-01',to=state.filters.to||dateToday(),filtered=reportData(from,to);
  const stats=[['reports.sales',sum(filtered.sales,'sales')],['reports.profit',sum(filtered.sales,'profit')],['reports.payments',sum(filtered.payments,'finalAmount')],['reports.expenses',sum(filtered.expenses,'amount')],['reports.advances',sum(filtered.advances,'amount')],['reports.withdrawals',sum(filtered.withdrawals,'amount')]];
  const net=sum(filtered.sales,'profit')-sum(filtered.expenses,'amount')-sum(filtered.advances,'amount')-sum(filtered.withdrawals,'amount'),daily=mergeDailySeries(filtered);
  $('#content').innerHTML=`<div class="toolbar report-toolbar"><label>${t('reports.from')} <input type="date" id="fromDate" value="${from}"></label><label>${t('reports.to')} <input type="date" id="toDate" value="${to}"></label><button class="secondary-btn" id="exportCsv">${t('reports.export')}</button></div><div class="report-grid">${stats.map(s=>`<div class="card report-box"><span>${t(s[0])}</span><strong class="money-value">${money(s[1])}</strong></div>`).join('')}<div class="card report-box net-box"><span>${t('reports.net')}</span><strong class="money-value">${money(net)}</strong></div></div><div class="report-charts"><section class="card chart-card chart-card-wide"><div class="chart-card-head"><h2>${t('reports.combinedTitle')}</h2><p>${t('reports.combinedSubtitle')}</p></div>${lineChartSvg(daily,[{key:'sales',label:t('chart.sales')},{key:'withdrawals',label:t('chart.withdrawals')}],t('reports.noChartData'))}</section><div class="separate-chart-grid"><section class="card chart-card"><div class="chart-card-head"><h2>${t('reports.salesTrend')}</h2></div>${lineChartSvg(daily.filter(d=>d.sales),[{key:'sales',label:t('chart.sales')}],t('reports.noChartData'))}</section><section class="card chart-card"><div class="chart-card-head"><h2>${t('reports.profitTrend')}</h2></div>${lineChartSvg(daily.filter(d=>d.profit),[{key:'profit',label:t('chart.profit')}],t('reports.noChartData'))}</section><section class="card chart-card"><div class="chart-card-head"><h2>${t('reports.withdrawalTrend')}</h2></div>${lineChartSvg(daily.filter(d=>d.withdrawals),[{key:'withdrawals',label:t('chart.withdrawals')}],t('reports.noChartData'))}</section></div></div>`;
  $('#fromDate').onchange=e=>{state.filters.from=e.target.value;renderReports();}; $('#toDate').onchange=e=>{state.filters.to=e.target.value;renderReports();};
  $('#exportCsv').onclick=()=>downloadText(`alhadbaa-report-${from}-to-${to}.csv`,`Metric,Amount IQD\n${stats.map(x=>`"${t(x[0])}",${x[1]}`).join('\n')}\n"${t('reports.net')}",${net}`,'text/csv;charset=utf-8');
}

function renderBackup(){
  $('#content').innerHTML=`<div class="backup-actions"><div class="card backup-card"><h3>${t('backup.exportTitle')}</h3><p>${t('backup.exportText')}</p><button class="primary-btn" id="exportBackup">${t('backup.download')}</button></div><div class="card backup-card"><h3>${t('backup.restoreTitle')}</h3><p>${t('backup.restoreText')}</p><label class="secondary-btn" for="restoreFile">${t('backup.choose')}</label><input class="file-input" id="restoreFile" type="file" accept="application/json"></div><div class="card backup-card"><h3>${t('backup.tablesTitle')}</h3><p>${t('backup.tablesText')}</p><button class="secondary-btn" id="exportTables">${t('backup.exportTables')}</button></div><div class="card backup-card"><h3>${t('backup.clearTitle')}</h3><p>${t('backup.clearText')}</p><button class="danger-btn" id="clearData">${t('backup.clear')}</button></div></div>`;
  $('#exportBackup').onclick=()=>downloadText(`alhadbaa-backup-${dateToday()}.json`,JSON.stringify(state.data,null,2),'application/json'); $('#restoreFile').onchange=restoreBackup; $('#exportTables').onclick=exportTables; $('#clearData').onclick=()=>{if(confirm(t('backup.confirmClear'))){state.data=emptyData();saveData();render();toast(t('backup.cleared'));}};
}
function restoreBackup(e){const file=e.target.files[0];if(!file)return;const r=new FileReader();r.onload=()=>{try{const data=JSON.parse(r.result);state.data=Object.assign(emptyData(),data);saveData();render();toast(t('backup.restored'));}catch{toast(t('backup.invalid'));}};r.readAsText(file);}
function exportTables(){Object.keys(defs).forEach(type=>{const rows=state.data[type];if(!rows.length)return;const keys=[...new Set(rows.flatMap(Object.keys))].filter(k=>!['id','createdAt','updatedAt'].includes(k));const csv=[keys.join(','),...rows.map(r=>keys.map(k=>`"${String(r[k]??'').replaceAll('"','""')}"`).join(','))].join('\n');downloadText(`${type}-${dateToday()}.csv`,csv,'text/csv;charset=utf-8');});toast(t('backup.exported'));}
function downloadText(name,text,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff',text],{type}));a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),500);}
function esc(v){return String(v??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

$('#nav').addEventListener('click',e=>{const p=e.target.dataset.page;if(p)navigate(p);});
$('#menuBtn').onclick=()=>$('#sidebar').classList.toggle('open'); $('#closeModal').onclick=closeModal;
$('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal();});
$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');state.data.settings.theme=document.body.classList.contains('dark')?'dark':'light';saveData();};
$('#languageBtn').onclick=toggleLanguage; $('#quickAddBtn').onclick=()=>openForm(state.page in defs?state.page:'sales');
if(state.data.settings.theme==='dark')document.body.classList.add('dark'); applyLanguage(); render();
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
