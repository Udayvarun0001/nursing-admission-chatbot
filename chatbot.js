let step = 0;

function showMessage(message, sender = "bot") {
  const box = document.getElementById("chatbox");
  const msg = document.createElement("div");
  msg.className = sender;
  msg.innerText = message;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

function handleUser() {
  const inputBox = document.getElementById("userInput");
  const userText = inputBox.value.trim();
  if (userText === "") return;

  showMessage(userText, "user");
  inputBox.value = "";

  const text = userText.toLowerCase();
  const isNegative = text.includes("no") || text.includes("nahi");

  if (isNegative && step !== -1) {
    showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
    step = -1;
    return;
  }

  if (step === 0) {
    showMessage("Great! Did you study Biology in your 12th grade? (Type 'biology' or mention your subject)");
    step = 1;
  } else if (step === 1) {
    if (text.includes("biology")) {
      showMessage("You're eligible! 🎉 B.Sc Nursing is a 4-year full-time program.");
      showMessage("Would you like more details about the program?");
      step = 2;
    } else {
      showMessage("B.Sc Nursing mein admission ke liye Biology avashyak hai.");
      step = -1;
    }
  } else if (step === 2) {
    showMessage("The program includes theory classes and hospital training with real patients.");
    showMessage("Would you like to know about the fee structure?");
    step = 3;
  } else if (step === 3) {
    showMessage("📘 Fee Details:\n- Tuition Fee: ₹60,000\n- Bus Fee: ₹10,000\n- Total: ₹70,000");
    showMessage("Installments:\n1️⃣ ₹30,000 (at admission)\n2️⃣ ₹20,000 (after 1st semester)\n3️⃣ ₹20,000 (after 2nd semester)");
    showMessage("Shall I tell you about hostel and training facilities?");
    step = 4;
  } else if (step === 4) {
    showMessage("🏠 Hostel Facilities:\n- 24x7 water & electricity\n- CCTV security\n- On-site warden");
    showMessage("🏥 Training included: Students work with real patients.");
    showMessage("Would you like to know the college location?");
    step = 5;
  } else if (step === 5) {
    showMessage("📍 The college is located in Delhi.");
    showMessage("Do you want more information about the area?");
    step = 6;
  } else if (step === 6) {
    showMessage("The area is well connected and safe with public transport available.");
    showMessage("Shall I tell you about recognition and approvals?");
    step = 7;
  } else if (step === 7) {
    showMessage("✅ Our college is recognized by the Indian Nursing Council (INC), New Delhi.");
    showMessage("Would you like to know the clinical training locations?");
    step = 8;
  } else if (step === 8) {
    showMessage("🏥 Clinical Training Locations:\n- District Hospital (Backundpur)\n- Community Health Centers\n- Regional Hospital (Chartha)\n- Ranchi Neurosurgery Hospital (Jharkhand)");
    showMessage("Do you want to know about scholarship options?");
    step = 9;
  } else if (step === 9) {
    showMessage("🎓 Scholarships Available:\n- Govt Post-Matric: ₹18k–₹23k\n- Labour Ministry: ₹40k–₹48k (requires Labour Registration)");
    showMessage("There are 60 total seats. Want to know the eligibility criteria again?");
    step = 10;
  } else if (step === 10) {
    showMessage("Eligibility Criteria:\n✔ Biology in 12th grade\n✔ Passed PNT Exam\n✔ Age between 17 and 35 years");
    showMessage("Would you like help applying?");
    step = 11;
  } else if (step === 11) {
    showMessage("You can apply online or contact our admissions team directly. 😊");
    showMessage("Thanks for chatting with us. All the best! 💙");
    step = -1;
  } else if (step === -1) {
    showMessage("Session ended. Refresh the page to start again.");
  }
}

// Initial welcome message
showMessage("👋 Welcome to LiaPlus Nursing College! Are you interested in admission?");
