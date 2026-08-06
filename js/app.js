const STORAGE_KEY = 'alhadbaa_pharmacy_v1.4.3';
const DEFAULT_LOCALE = 'en';

const I18N = {
  en: {
    nav: {
      dashboard: 'Dashboard', sales: 'Daily Sales', payments: 'Supplier Payments', expenses: 'Expenses',
      advances: 'Employee Advances', withdrawals: 'Owner Withdrawals', reports: 'Reports', backup: 'Backup & Restore'
    },
    subtitles: {
      dashboard: 'Financial overview of your pharmacy',
      sales: 'Enter the pharmacy closing totals',
      payments: 'Track payments and discount value',
      expenses: 'Operating expenses only',
      advances: 'Advances paid to pharmacy employees',
      withdrawals: 'Ali’s personal withdrawals',
      reports: 'Excel-style financial report',
      backup: 'Protect and transfer your records'
    },
    footer: 'Data is stored on this device.',
    top: { quickAdd: '+ Quick add', toggleTheme: '◐', switchToAr: 'العربية', switchToEn: 'English' },
    common: { add: 'Add', edit: 'Edit', delete: 'Delete', save: 'Save record', cancel: 'Cancel', search: 'Search records...', actions: 'Actions', noRecords: 'No records yet.', noActivity: 'No activity yet.', close: 'Close' },
    dashboard: {
      todaySales: 'Today’s Sales', todayProfit: 'Today’s Profit', monthlySales: 'Monthly Sales', monthlyProfit: 'Monthly Profit',
      supplierPayments: 'Supplier Payments', expenses: 'Expenses', employeeAdvances: 'Employee Advances', ownerWithdrawals: 'Owner Withdrawals',
      recentSalesTrend: 'Recent sales trend', recentActivity: 'Recent activity', viewSales: 'View sales', salesEmpty: 'Add daily sales to see the chart.'
    },
    report: {
      title: 'Reports', subtitle: 'Review your numbers in an Excel-style sheet', from: 'From', to: 'To', exportCsv: 'Export CSV', exportExcel: 'Export Excel',
      summary: 'Summary', sheetTitle: 'Daily financial sheet', sheetNote: 'Currency always stays in the format 1,234 IQD.', netLabel: 'Net cash flow',
      cols: { date: 'Date', sales: 'Sales', profit: 'Profit', payments: 'Payments', expenses: 'Expenses', advances: 'Advances', withdrawals: 'Withdrawals', net: 'Net' }
    },
    backup: {
      exportTitle: 'Export backup', exportDesc: 'Download all pharmacy data as a JSON backup file.', exportBtn: 'Download backup',
      restoreTitle: 'Restore backup', restoreDesc: 'Replace data on this device with a previous JSON backup.', restoreBtn: 'Choose backup',
      tablesTitle: 'Export tables', tablesDesc: 'Download every module as CSV files inside separate downloads.', tablesBtn: 'Export CSV files',
      clearTitle: 'Clear application', clearDesc: 'Remove all records from this browser permanently.', clearBtn: 'Clear all data'
    },
    forms: {
      sales: 'Daily sale', payments: 'Supplier payment', expenses: 'Expense', advances: 'Employee advance', withdrawals: 'Owner withdrawal',
      supplier: 'Supplier / warehouse', amount: 'Amount', finalAmount: 'Final value', discount: 'Discount / bonus %', category: 'Category', employee: 'Employee', details: 'Details', notes: 'Notes', date: 'Date', sales: 'Total sales', profit: 'Total profit', paymentAmount: 'Payment amount'
    },
    categories: { Rent: 'Rent', Electricity: 'Electricity', Internet: 'Internet', Salary: 'Salary', Transport: 'Transport', Supplies: 'Supplies', Other: 'Other' },
    messages: {
      saved: 'Saved successfully', deleted: 'Record deleted', backupRestored: 'Backup restored', invalidBackup: 'Invalid backup file', allCleared: 'All data cleared',
      duplicateSales: 'A daily sales record already exists for this date.', confirmDelete: 'Delete this record? This cannot be undone.', confirmClear: 'Permanently delete all data?', csvStarted: 'CSV export started', xlsStarted: 'Excel export started'
    },
    buttons: { add: 'Add', save: 'Save record', edit: 'Edit', delete: 'Delete', cancel: 'Cancel', chooseBackup: 'Choose backup' },
    labels: { automaticallyCalculated: '' }
  },
  ar: {
    nav: {
      dashboard: 'لوحة التحكم', sales: 'مبيعات اليوم', payments: 'مدفوعات المجهزين', expenses: 'المصروفات',
      advances: 'سلف الموظفين', withdrawals: 'سحوبات المالك', reports: 'التقارير', backup: 'النسخ الاحتياطي والاستعادة'
    },
    subtitles: {
      dashboard: 'نظرة مالية عامة على صيدليتك',
      sales: 'إدخال إجماليات إغلاق الصيدلية',
      payments: 'متابعة المدفوعات وقيمة الخصم',
      expenses: 'المصروفات التشغيلية فقط',
      advances: 'السلف المدفوعة لموظفي الصيدلية',
      withdrawals: 'السحوبات الشخصية لعلي',
      reports: 'تقرير مالي بنمط إكسل',
      backup: 'حماية السجلات ونقلها'
    },
    footer: 'تُخزن البيانات على هذا الجهاز.',
    top: { quickAdd: '+ إضافة سريعة', toggleTheme: '◐', switchToAr: 'العربية', switchToEn: 'English' },
    common: { add: 'إضافة', edit: 'تعديل', delete: 'حذف', save: 'حفظ السجل', cancel: 'إلغاء', search: 'البحث في السجلات...', actions: 'الإجراءات', noRecords: 'لا توجد سجلات بعد.', noActivity: 'لا يوجد نشاط بعد.', close: 'إغلاق' },
    dashboard: {
      todaySales: 'مبيعات اليوم', todayProfit: 'ربح اليوم', monthlySales: 'مبيعات الشهر', monthlyProfit: 'ربح الشهر',
      supplierPayments: 'مدفوعات المجهزين', expenses: 'المصروفات', employeeAdvances: 'سلف الموظفين', ownerWithdrawals: 'سحوبات المالك',
      recentSalesTrend: 'اتجاه المبيعات الأخير', recentActivity: 'آخر النشاطات', viewSales: 'عرض المبيعات', salesEmpty: 'أضف مبيعات اليوم لعرض الرسم البياني.'
    },
    report: {
      title: 'التقارير', subtitle: 'راجع الأرقام داخل جدول بنمط إكسل', from: 'من', to: 'إلى', exportCsv: 'تصدير CSV', exportExcel: 'تصدير Excel',
      summary: 'ملخص', sheetTitle: 'الجدول المالي اليومي', sheetNote: 'تبقى العملة دائمًا بصيغة 1,234 IQD.', netLabel: 'صافي الحركة النقدية',
      cols: { date: 'التاريخ', sales: 'المبيعات', profit: 'الربح', payments: 'المدفوعات', expenses: 'المصروفات', advances: 'السلف', withdrawals: 'السحوبات', net: 'الصافي' }
    },
    backup: {
      exportTitle: 'تصدير نسخة احتياطية', exportDesc: 'تنزيل كل بيانات الصيدلية كملف JSON احتياطي.', exportBtn: 'تنزيل النسخة',
      restoreTitle: 'استعادة نسخة احتياطية', restoreDesc: 'استبدال البيانات على هذا الجهاز بنسخة JSON سابقة.', restoreBtn: 'اختيار نسخة',
      tablesTitle: 'تصدير الجداول', tablesDesc: 'تنزيل كل وحدة كملفات CSV منفصلة.', tablesBtn: 'تصدير CSV', clearTitle: 'مسح التطبيق', clearDesc: 'إزالة كل السجلات من هذا المتصفح نهائيًا.', clearBtn: 'مسح كل البيانات'
    },
    forms: {
      sales: 'عملية بيع يومية', payments: 'دفعة مجهز', expenses: 'مصروف', advances: 'سلفة موظف', withdrawals: 'سحبة مالك',
      supplier: 'المجهز / المخزن', amount: 'المبلغ', finalAmount: 'القيمة النهائية', discount: 'نسبة الخصم / الزيادة', category: 'التصنيف', employee: 'الموظف', details: 'التفاصيل', notes: 'ملاحظات', date: 'التاريخ', sales: 'إجمالي المبيعات', profit: 'إجمالي الربح', paymentAmount: 'مبلغ الدفعة'
    },
    categories: { Rent: 'إيجار', Electricity: 'كهرباء', Internet: 'إنترنت', Salary: 'راتب', Transport: 'نقل', Supplies: 'مستلزمات', Other: 'أخرى' },
    messages: {
      saved: 'تم الحفظ بنجاح', deleted: 'تم حذف السجل', backupRestored: 'تمت استعادة النسخة الاحتياطية', invalidBackup: 'ملف النسخة الاحتياطية غير صالح', allCleared: 'تم مسح كل البيانات',
      duplicateSales: 'يوجد سجل مبيعات لهذا التاريخ بالفعل.', confirmDelete: 'هل تريد حذف هذا السجل؟ لا يمكن التراجع.', confirmClear: 'حذف كل البيانات نهائيًا؟', csvStarted: 'بدأ تصدير CSV', xlsStarted: 'بدأ تصدير Excel'
    },
    buttons: { add: 'إضافة', save: 'حفظ السجل', edit: 'تعديل', delete: 'حذف', cancel: 'إلغاء', chooseBackup: 'اختيار نسخة' },
    labels: { automaticallyCalculated: '' }
  }
};

const state = {
  page: 'dashboard',
  editing: null,
  data: loadData(),
  filters: {},
};

const pageOrder = ['dashboard', 'sales', 'payments', 'expenses', 'advances', 'withdrawals', 'reports', 'backup'];
const defs = {
  sales: { labelKey: 'sales', fields: [['date', 'date', 'date', true], ['sales', 'sales', 'number', true], ['profit', 'profit', 'number', true], ['notes', 'notes', 'textarea', false]] },
  payments: { labelKey: 'payments', fields: [['supplier', 'supplier', 'text', true], ['date', 'date', 'date', true], ['amount', 'paymentAmount', 'number', true], ['discount', 'discount', 'number', false], ['notes', 'notes', 'textarea', false]] },
  expenses: { labelKey: 'expenses', fields: [['date', 'date', 'date', true], ['category', 'category', 'select', true, ['Rent', 'Electricity', 'Internet', 'Salary', 'Transport', 'Supplies', 'Other']], ['amount', 'amount', 'number', true], ['notes', 'details', 'textarea', false]] },
  advances: { labelKey: 'advances', fields: [['date', 'date', 'date', true], ['employee', 'employee', 'text', true], ['amount', 'amount', 'number', true], ['notes', 'details', 'textarea', false]] },
  withdrawals: { labelKey: 'withdrawals', fields: [['date', 'date', 'date', true], ['amount', 'amount', 'number', true], ['notes', 'details', 'textarea', false]] },
};

function emptyData() {
  return { sales: [], payments: [], expenses: [], advances: [], withdrawals: [], activity: [], settings: { theme: 'light', locale: DEFAULT_LOCALE } };
}

function migrateData(data) {
  const base = emptyData();
  const merged = Object.assign(base, data || {});
  merged.settings = Object.assign(base.settings, merged.settings || {});
  merged.settings.locale = merged.settings.locale === 'ar' ? 'ar' : 'en';
  merged.settings.theme = merged.settings.theme === 'dark' ? 'dark' : 'light';
  ['sales', 'payments', 'expenses', 'advances', 'withdrawals', 'activity'].forEach(k => {
    if (!Array.isArray(merged[k])) merged[k] = [];
  });
  merged.payments.forEach(p => {
    p.discount = Number(p.discount || 0);
    p.amount = Number(p.amount || 0);
    p.finalAmount = Number(p.finalAmount ?? p.amount * (1 + p.discount / 100));
  });
  merged.sales.forEach(r => {
    r.sales = Number(r.sales || 0);
    r.profit = Number(r.profit || 0);
  });
  ['expenses', 'advances', 'withdrawals'].forEach(type => merged[type].forEach(r => r.amount = Number(r.amount || 0)));
  return merged;
}

function loadData() {
  try {
    return migrateData(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
  } catch {
    return emptyData();
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

const $ = s => document.querySelector(s);
const locale = () => state.data.settings.locale || DEFAULT_LOCALE;
const isAr = () => locale() === 'ar';
const t = key => {
  const parts = key.split('.');
  let cur = I18N[locale()] || I18N.en;
  for (const p of parts) cur = cur?.[p];
  if (cur !== undefined) return cur;
  cur = I18N.en;
  for (const p of parts) cur = cur?.[p];
  return cur ?? key;
};
const money = n => `${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Number(n || 0))} IQD`;
const dateToday = () => new Date().toISOString().slice(0, 10);
const uid = () => crypto.randomUUID?.() || Date.now().toString(36) + Math.random().toString(36).slice(2);
const sum = (arr, key) => arr.reduce((a, x) => a + Number(x[key] || 0), 0);
const inRange = (date, from, to) => (!from || date >= from) && (!to || date <= to);
const monthKey = () => dateToday().slice(0, 7);

function setLocale(next) {
  state.data.settings.locale = next === 'ar' ? 'ar' : 'en';
  document.documentElement.lang = locale();
  document.documentElement.dir = isAr() ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-ar', isAr());
  saveData();
  renderAll();
  toast(isAr() ? 'تم تغيير اللغة' : 'Language changed');
}

function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), 2200);
}

function activity(text) {
  state.data.activity.unshift({ id: uid(), text, time: new Date().toISOString() });
  state.data.activity = state.data.activity.slice(0, 50);
}

function pageTitle(page) {
  return t(`nav.${page}`);
}

function pageSubtitle(page) {
  return t(`subtitles.${page}`);
}

function renderNav() {
  const nav = $('#nav');
  nav.innerHTML = pageOrder.map(page => `<button class="nav-item ${state.page === page ? 'active' : ''}" data-page="${page}">${pageTitle(page)}</button>`).join('');
  $('#sidebarFooter').textContent = t('footer');
}

function navigate(page) {
  state.page = page;
  $('#pageTitle').textContent = pageTitle(page);
  $('#pageSubtitle').textContent = pageSubtitle(page);
  $('#sidebar').classList.remove('open');
  renderAll();
}

function renderAll() {
  renderNav();
  $('#pageTitle').textContent = pageTitle(state.page);
  $('#pageSubtitle').textContent = pageSubtitle(state.page);
  $('#quickAddBtn').textContent = t('top.quickAdd');
  $('#themeBtn').textContent = t('top.toggleTheme');
  $('#langBtn').textContent = isAr() ? t('top.switchToEn') : t('top.switchToAr');
  $('#sidebarFooter').textContent = t('footer');
  $('#content').innerHTML = '';
  if (state.page === 'dashboard') renderDashboard();
  else if (state.page === 'reports') renderReports();
  else if (state.page === 'backup') renderBackup();
  else renderTablePage(state.page);
}

function renderDashboard() {
  const d = state.data;
  const today = dateToday();
  const month = monthKey();
  const todaysSales = d.sales.filter(x => x.date === today);
  const monthSales = d.sales.filter(x => x.date.startsWith(month));
  const metrics = [
    [t('dashboard.todaySales'), money(sum(todaysSales, 'sales'))],
    [t('dashboard.todayProfit'), money(sum(todaysSales, 'profit'))],
    [t('dashboard.monthlySales'), money(sum(monthSales, 'sales'))],
    [t('dashboard.monthlyProfit'), money(sum(monthSales, 'profit'))],
    [t('dashboard.supplierPayments'), money(sum(d.payments, 'finalAmount'))],
    [t('dashboard.expenses'), money(sum(d.expenses, 'amount'))],
    [t('dashboard.employeeAdvances'), money(sum(d.advances, 'amount'))],
    [t('dashboard.ownerWithdrawals'), money(sum(d.withdrawals, 'amount'))],
  ];
  const recent = d.sales.slice().sort((a, b) => a.date.localeCompare(b.date)).slice(-10);
  const max = Math.max(...recent.map(x => x.sales), 1);
  const themeLabel = state.data.settings.theme === 'dark' ? 'Light' : 'Dark';
  $('#content').innerHTML = `
    <div class="kpi-grid">
      ${metrics.map(m => `<div class="card kpi"><span>${esc(m[0])}</span><strong>${esc(m[1])}</strong></div>`).join('')}
    </div>
    <div class="layout-grid">
      <div class="card panel">
        <div class="panel-head">
          <h2>${esc(t('dashboard.recentSalesTrend'))}</h2>
          <button class="secondary-btn" data-go="sales">${esc(t('dashboard.viewSales'))}</button>
        </div>
        <div class="chart">
          ${recent.length ? recent.map(x => `<div class="bar-wrap"><div class="bar" style="height:${Math.max(4, (x.sales / max) * 210)}px"></div>${x.date.slice(5)}</div>`).join('') : `<div class="empty">${esc(t('dashboard.salesEmpty'))}</div>`}
        </div>
      </div>
      <div class="card panel">
        <div class="panel-head"><h2>${esc(t('dashboard.recentActivity'))}</h2></div>
        <div class="activity">
          ${d.activity.length ? d.activity.slice(0, 7).map(a => `<div class="activity-item"><strong>${esc(a.text)}</strong><small>${new Date(a.time).toLocaleString()}</small></div>`).join('') : `<div class="empty">${esc(t('common.noActivity'))}</div>`}
        </div>
      </div>
    </div>
  `;
  $('#content [data-go]')?.addEventListener('click', e => navigate(e.target.dataset.go));
}

function rowHtml(type, r) {
  if (type === 'sales') return `<td>${esc(r.date)}</td><td class="num">${money(r.sales)}</td><td class="num">${money(r.profit)}</td><td>${esc(r.notes || '')}</td>`;
  if (type === 'payments') return `<td>${esc(r.supplier)}</td><td>${esc(r.date)}</td><td class="num">${money(r.amount)}</td><td class="num">${Number(r.discount || 0)}%</td><td class="num">${money(r.finalAmount)}</td>`;
  if (type === 'expenses') return `<td>${esc(r.date)}</td><td>${esc(t(`categories.${r.category}`) || r.category)}</td><td class="num">${money(r.amount)}</td><td>${esc(r.notes || '')}</td>`;
  if (type === 'advances') return `<td>${esc(r.date)}</td><td>${esc(r.employee)}</td><td class="num">${money(r.amount)}</td><td>${esc(r.notes || '')}</td>`;
  if (type === 'withdrawals') return `<td>${esc(r.date)}</td><td class="num">${money(r.amount)}</td><td>${esc(r.notes || '')}</td>`;
  return '';
}

function renderTablePage(type) {
  const rows = state.data[type] || [];
  const q = (state.filters[type] || '').toLowerCase();
  const filtered = rows.filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(q))).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const headers = {
    sales: [t('report.cols.date'), t('report.cols.sales'), t('report.cols.profit'), t('forms.notes')],
    payments: [t('forms.supplier'), t('report.cols.date'), t('forms.amount'), t('forms.discount'), t('forms.finalAmount')],
    expenses: [t('report.cols.date'), t('forms.category'), t('forms.amount'), t('forms.details')],
    advances: [t('report.cols.date'), t('forms.employee'), t('forms.amount'), t('forms.details')],
    withdrawals: [t('report.cols.date'), t('forms.amount'), t('forms.details')],
  }[type];
  $('#content').innerHTML = `
    <div class="toolbar">
      <input id="searchInput" placeholder="${esc(t('common.search'))}" value="${esc(state.filters[type] || '')}">
      <button class="primary-btn" id="addBtn">+ ${esc(t('common.add'))} ${esc(t(`forms.${defs[type].labelKey}`))}</button>
    </div>
    <div class="card table-card">
      <div class="table-wrap">
        <table class="spreadsheet">
          <thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}<th>${esc(t('common.actions'))}</th></tr></thead>
          <tbody>${filtered.length ? filtered.map(r => `<tr>${rowHtml(type, r)}<td><div class="actions"><button class="mini-btn" data-edit="${r.id}">${esc(t('common.edit'))}</button><button class="mini-btn delete" data-delete="${r.id}">${esc(t('common.delete'))}</button></div></td></tr>`).join('') : `<tr><td colspan="${headers.length + 1}" class="empty">${esc(t('common.noRecords'))}</td></tr>`}</tbody>
        </table>
      </div>
    </div>
  `;
  $('#addBtn').onclick = () => openForm(type);
  $('#searchInput').oninput = e => { state.filters[type] = e.target.value; renderTablePage(type); };
  document.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => openForm(type, b.dataset.edit));
  document.querySelectorAll('[data-delete]').forEach(b => b.onclick = () => removeRecord(type, b.dataset.delete));
}

function openForm(type, id = null) {
  state.editing = { type, id };
  const old = id ? state.data[type].find(x => x.id === id) : {};
  const title = `${id ? t('common.edit') : t('common.add')} ${t(`forms.${defs[type].labelKey}`)}`;
  $('#modalTitle').textContent = title;
  $('#recordForm').innerHTML = `
    <div class="form-grid">
      ${defs[type].fields.map(([name, labelKey, input, required, options]) => fieldHtml(name, labelKey, input, required, options, old[name] ?? (name === 'date' ? dateToday() : ''))).join('')}
    </div>
    <div class="form-actions">
      <button type="button" class="secondary-btn" id="cancelForm">${esc(t('common.cancel'))}</button>
      <button class="primary-btn" type="submit">${esc(t('common.save'))}</button>
    </div>
  `;
  $('#modalBackdrop').classList.remove('hidden');
  $('#cancelForm').onclick = closeModal;
  $('#recordForm').onsubmit = submitForm;
}

function fieldHtml(name, labelKey, input, required, options, value) {
  const full = input === 'textarea' ? ' full' : '';
  const label = esc(t(`forms.${labelKey}`));
  let control = '';
  if (input === 'select') {
    control = `<select name="${name}" ${required ? 'required' : ''}>${options.map(o => `<option value="${esc(o)}" ${o === value ? 'selected' : ''}>${esc(t(`categories.${o}`) || o)}</option>`).join('')}</select>`;
  } else if (input === 'textarea') {
    control = `<textarea name="${name}" rows="3">${esc(value)}</textarea>`;
  } else {
    control = `<input name="${name}" type="${input}" value="${esc(value)}" ${required ? 'required' : ''} ${input === 'number' ? 'min="0" step="any"' : ''}>`;
  }
  return `<div class="field${full}"><label>${label}</label>${control}</div>`;
}

function submitForm(e) {
  e.preventDefault();
  const { type, id } = state.editing;
  const fd = Object.fromEntries(new FormData(e.target));
  ['sales', 'profit', 'amount', 'discount'].forEach(k => { if (k in fd) fd[k] = Number(fd[k] || 0); });
  if (type === 'payments') fd.finalAmount = fd.amount * (1 + fd.discount / 100);
  if (type === 'sales' && !id && state.data.sales.some(x => x.date === fd.date)) { toast(t('messages.duplicateSales')); return; }
  if (id) {
    const i = state.data[type].findIndex(x => x.id === id);
    state.data[type][i] = { ...state.data[type][i], ...fd, updatedAt: new Date().toISOString() };
    activity(`${t('common.edit')} ${t(`forms.${defs[type].labelKey}`)}`);
  } else {
    state.data[type].push({ id: uid(), ...fd, createdAt: new Date().toISOString() });
    activity(`${t('common.add')} ${t(`forms.${defs[type].labelKey}`)}`);
  }
  saveData();
  closeModal();
  renderAll();
  toast(t('messages.saved'));
}

function removeRecord(type, id) {
  if (!confirm(t('messages.confirmDelete'))) return;
  state.data[type] = state.data[type].filter(x => x.id !== id);
  activity(`${t('common.delete')} ${t(`forms.${defs[type].labelKey}`)}`);
  saveData();
  renderAll();
  toast(t('messages.deleted'));
}

function closeModal() {
  $('#modalBackdrop').classList.add('hidden');
  state.editing = null;
}

function getReportRows(from, to) {
  const dates = new Set();
  ['sales', 'payments', 'expenses', 'advances', 'withdrawals'].forEach(type => {
    state.data[type].forEach(r => { if (inRange(r.date, from, to)) dates.add(r.date); });
  });
  return [...dates].sort().map(date => {
    const sales = state.data.sales.filter(r => r.date === date);
    const payments = state.data.payments.filter(r => r.date === date);
    const expenses = state.data.expenses.filter(r => r.date === date);
    const advances = state.data.advances.filter(r => r.date === date);
    const withdrawals = state.data.withdrawals.filter(r => r.date === date);
    const row = {
      date,
      sales: sum(sales, 'sales'),
      profit: sum(sales, 'profit'),
      payments: sum(payments, 'finalAmount'),
      expenses: sum(expenses, 'amount'),
      advances: sum(advances, 'amount'),
      withdrawals: sum(withdrawals, 'amount'),
    };
    row.net = row.sales - row.payments - row.expenses - row.advances - row.withdrawals;
    return row;
  });
}

function renderReports() {
  const from = state.filters.from || `${monthKey()}-01`;
  const to = state.filters.to || dateToday();
  const rows = getReportRows(from, to);
  const totals = rows.reduce((acc, r) => {
    acc.sales += r.sales; acc.profit += r.profit; acc.payments += r.payments; acc.expenses += r.expenses; acc.advances += r.advances; acc.withdrawals += r.withdrawals; acc.net += r.net; return acc;
  }, { sales: 0, profit: 0, payments: 0, expenses: 0, advances: 0, withdrawals: 0, net: 0 });
  const cols = [
    ['sales', totals.sales], ['profit', totals.profit], ['payments', totals.payments], ['expenses', totals.expenses], ['advances', totals.advances], ['withdrawals', totals.withdrawals], ['net', totals.net]
  ];
  $('#content').innerHTML = `
    <div class="report-shell">
      <div class="toolbar">
        <label>${esc(t('report.from'))}<input type="date" id="fromDate" value="${from}"></label>
        <label>${esc(t('report.to'))}<input type="date" id="toDate" value="${to}"></label>
        <button class="secondary-btn" id="exportCsv">${esc(t('report.exportCsv'))}</button>
        <button class="secondary-btn" id="exportExcel">${esc(t('report.exportExcel'))}</button>
      </div>
      <div class="report-grid">
        ${cols.map(([key, val]) => `<div class="card report-box"><span>${esc(t(`report.cols.${key}`))}</span><strong>${money(val)}</strong></div>`).join('')}
      </div>
      <div class="card report-sheet">
        <h3>${esc(t('report.sheetTitle'))}</h3>
        <p>${esc(t('report.subtitle'))}</p>
        <div class="table-wrap">
          <table class="spreadsheet">
            <thead>
              <tr>
                <th>${esc(t('report.cols.date'))}</th>
                <th class="num">${esc(t('report.cols.sales'))}</th>
                <th class="num">${esc(t('report.cols.profit'))}</th>
                <th class="num">${esc(t('report.cols.payments'))}</th>
                <th class="num">${esc(t('report.cols.expenses'))}</th>
                <th class="num">${esc(t('report.cols.advances'))}</th>
                <th class="num">${esc(t('report.cols.withdrawals'))}</th>
                <th class="num">${esc(t('report.cols.net'))}</th>
              </tr>
            </thead>
            <tbody>
              ${rows.length ? rows.map(r => `<tr><td>${esc(r.date)}</td><td class="num">${money(r.sales)}</td><td class="num">${money(r.profit)}</td><td class="num">${money(r.payments)}</td><td class="num">${money(r.expenses)}</td><td class="num">${money(r.advances)}</td><td class="num">${money(r.withdrawals)}</td><td class="num">${money(r.net)}</td></tr>`).join('') : `<tr><td colspan="8" class="empty">${esc(t('common.noRecords'))}</td></tr>`}
              <tr class="summary-row"><th>${esc(t('report.summary'))}</th><th class="num">${money(totals.sales)}</th><th class="num">${money(totals.profit)}</th><th class="num">${money(totals.payments)}</th><th class="num">${money(totals.expenses)}</th><th class="num">${money(totals.advances)}</th><th class="num">${money(totals.withdrawals)}</th><th class="num">${money(totals.net)}</th></tr>
            </tbody>
          </table>
        </div>
        <div class="sheet-footer">
          <span class="sheet-note">${esc(t('report.sheetNote'))}</span>
          <span class="sheet-note">${esc(t('report.netLabel'))}: <strong>${money(totals.net)}</strong></span>
        </div>
      </div>
    </div>
  `;
  $('#fromDate').onchange = e => { state.filters.from = e.target.value; renderReports(); };
  $('#toDate').onchange = e => { state.filters.to = e.target.value; renderReports(); };
  $('#exportCsv').onclick = () => downloadBlob(`alhadbaa-report-${from}-to-${to}.csv`, buildCsv(rows, totals), 'text/csv;charset=utf-8');
  $('#exportExcel').onclick = () => downloadBlob(`alhadbaa-report-${from}-to-${to}.xls`, buildExcelSheet(rows, totals, from, to), 'application/vnd.ms-excel;charset=utf-8');
}

function csvCell(v) { return `"${String(v).replaceAll('\"', '\\"\"')}"`; }
function buildCsv(rows, totals) {
  const header = [t('report.cols.date'), t('report.cols.sales'), t('report.cols.profit'), t('report.cols.payments'), t('report.cols.expenses'), t('report.cols.advances'), t('report.cols.withdrawals'), t('report.cols.net')];
  const lines = [
    header.map(csvCell).join(','),
    ...rows.map(r => [r.date, r.sales, r.profit, r.payments, r.expenses, r.advances, r.withdrawals, r.net].map(csvCell).join(',')),
    ['TOTAL', totals.sales, totals.profit, totals.payments, totals.expenses, totals.advances, totals.withdrawals, totals.net].map(csvCell).join(',')
  ];
  return lines.join('\n');
}

function buildExcelSheet(rows, totals, from, to) {
  const header = [t('report.cols.date'), t('report.cols.sales'), t('report.cols.profit'), t('report.cols.payments'), t('report.cols.expenses'), t('report.cols.advances'), t('report.cols.withdrawals'), t('report.cols.net')];
  const html = `<!doctype html><html ${isAr() ? 'lang="ar" dir="rtl"' : 'lang="en" dir="ltr"'}><head><meta charset="utf-8"><style>
    body{font-family:${isAr() ? 'Tahoma,Arial,sans-serif' : 'Calibri,Arial,sans-serif'};padding:20px;color:#1b2d40}
    h1,h2{margin:0 0 10px}table{border-collapse:collapse;width:100%;margin-top:12px}th,td{border:1px solid #b9c5d1;padding:8px 10px;text-align:${isAr() ? 'right' : 'left'};white-space:nowrap}th{background:#eaf0f6}tfoot th{background:#dce6f2}
  </style></head><body>
    <h1>Alhadbaa Pharmacy Manager</h1>
    <h2>${t('report.title')} - ${from} → ${to}</h2>
    <table>
      <thead><tr>${header.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(r => `<tr><td>${esc(r.date)}</td><td>${money(r.sales)}</td><td>${money(r.profit)}</td><td>${money(r.payments)}</td><td>${money(r.expenses)}</td><td>${money(r.advances)}</td><td>${money(r.withdrawals)}</td><td>${money(r.net)}</td></tr>`).join('')}</tbody>
      <tfoot><tr><th>${esc(t('report.summary'))}</th><th>${money(totals.sales)}</th><th>${money(totals.profit)}</th><th>${money(totals.payments)}</th><th>${money(totals.expenses)}</th><th>${money(totals.advances)}</th><th>${money(totals.withdrawals)}</th><th>${money(totals.net)}</th></tr></tfoot>
    </table>
  </body></html>`;
  return html;
}

function renderBackup() {
  $('#content').innerHTML = `
    <div class="backup-actions">
      <div class="card backup-card"><h3>${esc(t('backup.exportTitle'))}</h3><p>${esc(t('backup.exportDesc'))}</p><button class="primary-btn" id="exportBackup">${esc(t('backup.exportBtn'))}</button></div>
      <div class="card backup-card"><h3>${esc(t('backup.restoreTitle'))}</h3><p>${esc(t('backup.restoreDesc'))}</p><label class="secondary-btn" for="restoreFile">${esc(t('backup.restoreBtn'))}</label><input class="file-input" id="restoreFile" type="file" accept="application/json"></div>
      <div class="card backup-card"><h3>${esc(t('backup.tablesTitle'))}</h3><p>${esc(t('backup.tablesDesc'))}</p><button class="secondary-btn" id="exportTables">${esc(t('backup.tablesBtn'))}</button></div>
      <div class="card backup-card"><h3>${esc(t('backup.clearTitle'))}</h3><p>${esc(t('backup.clearDesc'))}</p><button class="danger-btn" id="clearData">${esc(t('backup.clearBtn'))}</button></div>
    </div>
  `;
  $('#exportBackup').onclick = () => downloadBlob(`alhadbaa-backup-${dateToday()}.json`, JSON.stringify(state.data, null, 2), 'application/json;charset=utf-8');
  $('#restoreFile').onchange = restoreBackup;
  $('#exportTables').onclick = exportTables;
  $('#clearData').onclick = () => { if (confirm(t('messages.confirmClear'))) { state.data = emptyData(); saveData(); applyLocaleToDom(); renderAll(); toast(t('messages.allCleared')); } };
}

function restoreBackup(e) {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      state.data = migrateData(JSON.parse(r.result));
      saveData();
      applyLocaleToDom();
      renderAll();
      toast(t('messages.backupRestored'));
    } catch {
      toast(t('messages.invalidBackup'));
    }
  };
  r.readAsText(file);
}

function exportTables() {
  Object.keys(defs).forEach(type => {
    const rows = state.data[type];
    if (!rows.length) return;
    const keys = [...new Set(rows.flatMap(Object.keys))].filter(k => !['id', 'createdAt', 'updatedAt'].includes(k));
    const csv = [keys.join(','), ...rows.map(r => keys.map(k => `"${String(r[k] ?? '').replaceAll('"', '""')}"`).join(','))].join('\n');
    downloadBlob(`${type}-${dateToday()}.csv`, csv, 'text/csv;charset=utf-8');
  });
  toast(t('messages.csvStarted'));
}

function downloadBlob(name, text, type) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type }));
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 0);
}

function esc(v) {
  return String(v ?? '').replace(/[&<>"]+/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] || c));
}

function applyLocaleToDom() {
  document.documentElement.lang = locale();
  document.documentElement.dir = isAr() ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-ar', isAr());
  document.body.classList.toggle('dark', state.data.settings.theme === 'dark');
  $('#themeBtn').textContent = t('top.toggleTheme');
  $('#langBtn').textContent = isAr() ? t('top.switchToEn') : t('top.switchToAr');
}

function init() {
  applyLocaleToDom();
  renderAll();
  if (state.data.settings.theme === 'dark') document.body.classList.add('dark');
}

$('#nav').addEventListener('click', e => {
  const p = e.target.dataset.page;
  if (p) navigate(p);
});
$('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');
$('#closeModal').onclick = closeModal;
$('#modalBackdrop').addEventListener('click', e => { if (e.target.id === 'modalBackdrop') closeModal(); });
$('#themeBtn').onclick = () => {
  state.data.settings.theme = document.body.classList.toggle('dark') ? 'dark' : 'light';
  saveData();
};
$('#langBtn').onclick = () => setLocale(isAr() ? 'en' : 'ar');
$('#quickAddBtn').onclick = () => openForm(defs[state.page] ? state.page : 'sales');
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
init();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

window.__ALHADBAA__ = {
  get state() { return state; },
  get locale() { return locale(); },
  getReportRows,
  buildCsv,
  buildExcelSheet,
  money,
  setLocale,
  renderReports,
  renderDashboard,
  renderTablePage,
  renderBackup,
  init,
};
