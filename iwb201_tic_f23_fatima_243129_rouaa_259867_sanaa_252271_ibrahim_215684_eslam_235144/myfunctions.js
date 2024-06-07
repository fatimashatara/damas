document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // ادخال القيم
    const fullName = document.getElementById('fullName').value.trim();
    // اخال قيمة الاسم الكامل و شيل المسافات الفاضية من الاول و الاخر

    const nationalID = document.getElementById('nationalID').value.trim();
    // نفس الشي برضو

    const dob = document.getElementById('dob').value;

    const mobile = document.getElementById('mobile').value.trim();

    const email = document.getElementById('email').value.trim();

    const captcha = document.getElementById('captcha').value.trim();
    // ادخال قيمة الكابتشا

    let errorMessage = '';
    //كود ارسال رسالة الخطا

    if (fullName === '') {
        errorMessage += 'يرجى إدخال الاسم الكامل.\n';
        // التحقق من انو الحقل معبا و ارسال رسالة خطا اذا كان فاضي
    }

    if (!/^\d{11}$/.test(nationalID)) {
        errorMessage += 'يرجى إدخال رقم وطني صحيح مكون من 11 رقم.\n';
        //التحقق من أنو الرقم الوطني بتكون من 11 رقم، وإضافة رسالة خطأ إذا ما كان هيك
    }

    if (dob === '') {
        errorMessage += 'يرجى إدخال تاريخ الولادة.\n';
        // نفس الشي برضو
    }

    if (!/^09\d{8}$/.test(mobile)) {
        errorMessage += 'يرجى إدخال رقم موبايل صحيح (يبدأ 09 ويليه 8 أرقام).\n';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage += 'يرجى إدخال بريد إلكتروني صحيح.\n';
    }

    if (captcha === '') {
        errorMessage += 'يرجى إدخال رمز الكابتشا.\n';
        // التحقق من أنو حقل الكابتشا معبا و ارسال رسالة خطا اذا كان فاضي
    }

    if (errorMessage !== '') {
        alert(errorMessage);
        // اذا كان في اي خطا رح يرسل للمستخدم

        event.preventDefault();
        // مشان يمنع ارسال النموذج اذا كان في خطا
    } else {
        // في حال نجاح التحقق
        event.preventDefault();
        // مشان يمنع ارسال النموذج حتى بعد النجاح
        const propertyInfo = 'معلومات العقار الذي تم اختياره:\n- العنوان: شارع الملكة، المدينة\n- السعر: 500,000 دولار\n- المساحة: 200 متر مربع';
        // استبدل هذا بالمعلومات الفعلية للعقار

        // إظهار نافذة جديدة أو رسالة تتضمن معلومات العقار
        const propertyWindow = window.open('', '_blank', 'width=600,height=400');
        propertyWindow.document.write('<html><head><title>معلومات العقار</title></head><body>');
        propertyWindow.document.write('<h1>معلومات العقار الذي تم اختياره</h1>');
        propertyWindow.document.write('<p>' + propertyInfo.replace(/\n/g, '<br>') + '</p>');
        propertyWindow.document.write('</body></html>');
        propertyWindow.document.close();
    }
});A
function toggleDetails(checkbox) {
    var detailsRow = checkbox.parentElement.parentElement.nextElementSibling;
    if (checkbox.checked) {
    detailsRow.classList.remove("hid");
    } else {
    detailsRow.classList.add("hid");
    }
}
        
        function loadMore() {
            console.log("تم النقر على زر 'متابعة'");
                }