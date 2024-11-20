// scripts.js

// دالة لعرض المودال عند الضغط على "اشتراك"
function showPaymentModal(amount) {
    document.getElementById("amount").value = amount + " جنيه";
    document.getElementById("paymentModal").style.display = "block";
}

// دالة لإغلاق المودال
function closePaymentModal() {
    document.getElementById("paymentModal").style.display = "none";
}

// دالة لإرسال نموذج الدفع (ستحتاج لتطويره لاحقًا لربط مع نظام إدارة الدفع)
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم إرسال التحويل بنجاح. شكرًا لك!");
    closePaymentModal();
});