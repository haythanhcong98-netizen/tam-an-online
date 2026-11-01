// TÂM AN - phiên bản tĩnh chạy trên GitHub Pages
// Tài khoản hiện tại là DEMO lưu trên trình duyệt. Xem README để kết nối Supabase thật.
const sutras = [
 {id:1,title:"Kinh Phổ Môn",tag:"Kinh phổ thông",category:"pho-thong",desc:"Phẩm Phổ Môn – phẩm thứ 25 trong Kinh Diệu Pháp Liên Hoa.",body:"Kinh Phổ Môn\n\nPhẩm Phổ Môn nói về hạnh nguyện từ bi và sự lắng nghe, cứu giúp chúng sinh của Bồ Tát Quán Thế Âm.\n\nNam mô Đại Bi Quán Thế Âm Bồ Tát.\n\nNgười học Phật thực tập lắng nghe bằng tâm từ, nuôi dưỡng lòng thương và đem sự hiểu biết để giúp đỡ mọi người.\n\nLưu ý: Đây là phần giới thiệu và trích đoạn biên soạn cho bản mẫu giao diện, không phải toàn văn kinh chính thức."},
 {id:2,title:"Kinh A Di Đà",tag:"Niệm Phật",category:"niem-phat",desc:"Giới thiệu pháp môn niệm Phật và cảnh giới Cực Lạc.",body:"Kinh A Di Đà\n\nKinh giới thiệu thế giới an lành Cực Lạc và hạnh nguyện của Đức Phật A Di Đà.\n\nNam mô A Di Đà Phật.\n\nNgười đọc có thể nhiếp tâm niệm danh hiệu Phật, nuôi dưỡng sự tỉnh thức, lòng từ bi và hướng đến đời sống thiện lành.\n\nLưu ý: Đây là phần giới thiệu và trích đoạn biên soạn cho bản mẫu giao diện, không phải toàn văn kinh chính thức."},
 {id:3,title:"Kinh Địa Tạng",tag:"Kinh phổ thông",category:"pho-thong",desc:"Nói về hiếu hạnh, lòng từ và tinh thần cứu độ.",body:"Kinh Địa Tạng Bồ Tát Bổn Nguyện\n\nKinh nêu bật hạnh nguyện rộng lớn, lòng hiếu thảo và tâm nguyện giúp chúng sinh hướng về điều thiện.\n\nNam mô Đại Nguyện Địa Tạng Vương Bồ Tát.\n\nThực tập hiếu kính, biết ơn và làm các việc lành là cách thiết thực để nuôi dưỡng đạo tâm.\n\nLưu ý: Đây là phần giới thiệu và trích đoạn biên soạn cho bản mẫu giao diện, không phải toàn văn kinh chính thức."},
 {id:4,title:"Nghi thức sám hối",tag:"Sám hối",category:"sam-hoi",desc:"Gợi ý thực tập nhìn lại thân, khẩu, ý và phát nguyện sửa đổi.",body:"Nghi thức sám hối – bản gợi ý\n\nThành tâm nhìn lại những điều chưa thiện trong suy nghĩ, lời nói và hành động.\n\nNguyện nhận diện lỗi lầm, không che giấu, không đổ lỗi; phát tâm sửa đổi và tránh lặp lại những điều gây khổ đau.\n\nNguyện sống chân thật, từ ái, tỉnh thức và biết tôn trọng mọi người.\n\nLưu ý: Đây là nội dung gợi ý thực tập do Tâm An biên soạn, không thay thế nghi thức của từng truyền thống."},
 {id:5,title:"Chú Đại Bi",tag:"Niệm Phật",category:"niem-phat",desc:"Giới thiệu thời khóa trì tụng Chú Đại Bi.",body:"Chú Đại Bi\n\nĐây là mục giới thiệu thời khóa trì tụng Chú Đại Bi. Khi bổ sung bản văn đầy đủ, vui lòng đối chiếu ấn bản đáng tin cậy và ghi rõ nguồn.\n\nNgười trì tụng nên giữ tâm cung kính, chánh niệm, hiểu rằng thực hành cần đi cùng lòng từ bi và việc làm thiện lành."},
 {id:6,title:"Kinh Từ Bi",tag:"Sám hối",category:"sam-hoi",desc:"Nuôi dưỡng tâm từ, mong mọi loài được an vui.",body:"Kinh Từ Bi – lời nhắc thực tập\n\nNguyện cho tất cả chúng sinh được an vui và bình an.\n\nNuôi dưỡng tâm không oán giận, không làm tổn hại; biết cảm thông, tôn trọng và giúp đỡ trong khả năng của mình.\n\nThực tập tâm từ bắt đầu từ những hành động nhỏ trong đời sống hằng ngày.\n\nLưu ý: Phần này là lời gợi nhắc được biên soạn cho bản mẫu, không phải bản dịch kinh nguyên văn."}
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let activeCategory = "all", currentSutra = null, readerSize = 16, accountMode = "login";
function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2600)}
function renderSutras(){
 const term=$("#searchInput").value.trim().toLocaleLowerCase("vi");
 const items=sutras.filter(s=>(activeCategory==="all"||s.category===activeCategory)&&(`${s.title} ${s.desc}`.toLocaleLowerCase("vi").includes(term)));
 $("#sutraGrid").innerHTML=items.length?items.map(s=>`<article class="sutra-card"><div class="sutra-top"><span class="sutra-symbol">☸</span><span class="sutra-tag">${s.tag}</span></div><h3>${s.title}</h3><p>${s.desc}</p><button data-read="${s.id}">Đọc bài kinh →</button></article>`).join(""):'<div class="empty-state">Không tìm thấy bài kinh phù hợp.</div>';
 $$("[data-read]").forEach(b=>b.addEventListener("click",()=>openReader(Number(b.dataset.read))));
}
function openReader(id){currentSutra=sutras.find(s=>s.id===id);$("#readerTitle").textContent=currentSutra.title;$("#readerBody").textContent=currentSutra.body;$("#readerBody").style.fontSize=readerSize+"px";showModal("readerModal")}
function showModal(id){$("#"+id).classList.add("show");$("#"+id).setAttribute("aria-hidden","false")}
function hideModal(id){$("#"+id).classList.remove("show");$("#"+id).setAttribute("aria-hidden","true")}
$$("[data-close]").forEach(b=>b.addEventListener("click",()=>hideModal(b.dataset.close)));
$$(".modal-backdrop").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)hideModal(m.id)}));
$$(".category").forEach(b=>b.addEventListener("click",()=>{$$(".category").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeCategory=b.dataset.category;renderSutras()}));
$("#searchInput").addEventListener("input",renderSutras);
$("#readerFontDown").addEventListener("click",()=>{readerSize=Math.max(13,readerSize-1);$("#readerBody").style.fontSize=readerSize+"px"});
$("#readerFontUp").addEventListener("click",()=>{readerSize=Math.min(25,readerSize+1);$("#readerBody").style.fontSize=readerSize+"px"});
$("#readerPrint").addEventListener("click",()=>window.print());
$("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
$$('#mainNav a').forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
$("#audioFile").addEventListener("change",e=>{const file=e.target.files[0];if(!file)return;const player=$("#audioPlayer");if(player.dataset.objectUrl)URL.revokeObjectURL(player.dataset.objectUrl);const url=URL.createObjectURL(file);player.src=url;player.dataset.objectUrl=url;$("#audioTitle").textContent=file.name;$("#audioStatus").textContent="Đang phát từ thiết bị của bạn";player.play().catch(()=>toast("Đã chọn audio. Nhấn nút phát để nghe."))});

// Lịch cá nhân: lưu localStorage trên trình duyệt hiện tại
const scheduleKey="taman_schedule_v1";
function getSchedules(){try{return JSON.parse(localStorage.getItem(scheduleKey)||"[]")}catch{return []}}
function saveSchedules(items){localStorage.setItem(scheduleKey,JSON.stringify(items));renderSchedules()}
function renderSchedules(){
 const items=getSchedules().sort((a,b)=>a.date.localeCompare(b.date));
 $("#scheduleList").innerHTML=items.length?items.map((x,i)=>`<div class="schedule-item"><span><strong>${escapeHtml(x.title)}</strong><br><small>${formatDate(x.date)} · ${escapeHtml(x.time)}</small></span><button data-delete="${i}" aria-label="Xóa lịch">Xóa ×</button></div>`).join(""):'<div class="empty-state">Chưa có lịch tụng kinh. Quý vị có thể thêm thời khóa đầu tiên ở phía trên.</div>';
 $$("[data-delete]").forEach(b=>b.addEventListener("click",()=>{const arr=getSchedules();arr.splice(Number(b.dataset.delete),1);saveSchedules(arr);toast("Đã xóa lịch tụng.")}));
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function formatDate(d){return new Date(d+"T00:00:00").toLocaleDateString("vi-VN",{weekday:"short",day:"2-digit",month:"2-digit",year:"numeric"})}
$("#scheduleDate").value=new Date().toLocaleDateString("en-CA");
$("#scheduleForm").addEventListener("submit",e=>{e.preventDefault();const arr=getSchedules();arr.push({date:$("#scheduleDate").value,time:$("#scheduleTime").value,title:$("#scheduleTitle").value.trim()});saveSchedules(arr);$("#scheduleTitle").value="";toast("Đã thêm lịch tụng kinh.")});

// Tài khoản demo: KHÔNG dùng cho dữ liệu thật hoặc mật khẩu thật.
$("#accountOpen").addEventListener("click",()=>{updateAccountUI();showModal("accountModal")});
$$("[data-tab]").forEach(b=>b.addEventListener("click",()=>{accountMode=b.dataset.tab;$$("[data-tab]").forEach(x=>x.classList.toggle("active",x===b));$("#accountSubmit").textContent=accountMode==="login"?"Đăng nhập":"Tạo tài khoản";$("#accountMessage").textContent=""}));
function updateAccountUI(){const user=localStorage.getItem("taman_demo_user");$("#accountTitle").textContent=user?"Xin chào":"Tài khoản";$("#accountMessage").textContent=user?`Bạn đang đăng nhập demo với ${user}`:"";$("#accountForm").classList.toggle("hidden",!!user);$("#logoutButton").classList.toggle("hidden",!user)}
$("#accountForm").addEventListener("submit",e=>{e.preventDefault();const email=$("#accountEmail").value.trim().toLowerCase(),password=$("#accountPassword").value;if(accountMode==="register"){const users=JSON.parse(localStorage.getItem("taman_demo_users")||"{}");if(users[email]){$("#accountMessage").textContent="Email này đã có trong bản demo.";return}users[email]=password;localStorage.setItem("taman_demo_users",JSON.stringify(users));localStorage.setItem("taman_demo_user",email);toast("Tạo tài khoản demo thành công.");updateAccountUI()}else{const users=JSON.parse(localStorage.getItem("taman_demo_users")||"{}");if(users[email]!==password){$("#accountMessage").textContent="Thông tin chưa đúng hoặc chưa có tài khoản demo.";return}localStorage.setItem("taman_demo_user",email);toast("Đăng nhập demo thành công.");updateAccountUI()}});
$("#logoutButton").addEventListener("click",()=>{localStorage.removeItem("taman_demo_user");updateAccountUI();toast("Đã đăng xuất bản demo.")});
$("#year").textContent=new Date().getFullYear();
renderSutras();renderSchedules();
