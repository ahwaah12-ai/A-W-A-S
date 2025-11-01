// main.js

document.addEventListener('DOMContentLoaded', () => {
  // ======= إعدادات =======
  const targetEmail = 'ah.wa.ah12@gmail.com'; // الايميل اللي عايز تبعتله

  // ======= فورم: إرسال عبر mailto (يفتح برنامج الإيميل على الجهاز) =======
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // نجيب القيم من الحقول (يتوافق لو ما عندهم name لأننا نبحث حسب النوع)
      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';

      // نحدد الموضوع والنص (تقدر تعدلهم)
      const subject = `رسالة من موقع Food Lover - ${name || 'زائر'}`;
      let body = `مرحباً،%0D%0A%0D%0Aلقد استلمت رسالة من نموذج التواصل في موقع Food Lover.%0D%0A`;
      if (name) body += `الاسم: ${name}%0D%0A`;
      if (email) body += `البريد الإلكتروني للمرسل: ${email}%0D%0A`;
      body += `%0D%0Aيمكنك كتابة هنا نص الرسالة.`;

      // إنشاء رابط mailto مع ترميز صحيح
      const mailto = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(decodeURIComponent(body))}`;

      // افتح برنامج الايميل (أو لو المستخدم ما عندوش عميل، ممكن يظهر رسالة)
      try {
        window.location.href = mailto;
        // رساله للمستخدم (اختياري)
        alert('تم فتح برنامج البريد الافتراضي لإرسال الرسالة. إذا لم يفتح، جرّب إعداد برنامج بريد أو استخدم بديل Backend.');
        // لو حبيت تمسح الحقول بعد الارسال:
        form.reset();
      } catch (err) {
        console.error(err);
        alert('حدث خطأ أثناء محاولة فتح برنامج البريد. إذا أردت إرسال الرسائل دون فتح برنامج البريد، تحتاج إلى خدمة Backend أو خدمة طرف ثالث مثل EmailJS.');
      }
    });
  }



















  // main.js

document.addEventListener('DOMContentLoaded', () => {
  // الايميل اللي عايز توصلك عليه الرسالة
  const targetEmail = 'ah.wa.ah12@gmail.com';

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // نجمع القيم من الحقول
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      // نجهز العنوان والمحتوى
      const subject = `رسالة جديدة من ${name || 'زائر'}`;
      const body = 
        `الاسم: ${name || 'غير محدد'}%0D%0A` +
        `الإيميل: ${email || 'غير محدد'}%0D%0A%0D%0A` +
        `الرسالة:%0D%0A${message || '---'}`;

      // إنشاء رابط mailto
      const mailto = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;

      // فتح البريد الافتراضي
      window.location.href = mailto;

      // اختيارياً: تمسح الفورم
      form.reset();
    });
  }
});
