let step = 0;

function showMessage(message, sender = "bot", delay = 800) {
  const box = document.getElementById("chatbox");

  if (sender === "bot") {
    const typing = document.createElement("div");
    typing.className = "bot typing";
    typing.innerText = "Typing...";
    box.appendChild(typing);
    box.scrollTop = box.scrollHeight;

    setTimeout(() => {
      typing.remove();
      const msg = document.createElement("div");
      msg.className = "bot";
      msg.innerText = message;
      box.appendChild(msg);
      box.scrollTop = box.scrollHeight;
    }, delay);
  } else {
    const msg = document.createElement("div");
    msg.className = "user";
    msg.innerText = message;
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }
}

function showMessagesSequentially(messages, delay = 1000) {
  if (!messages.length) return;

  let index = 0;
  const showNext = () => {
    showMessage(messages[index], "bot");
    index++;
    if (index < messages.length) {
      setTimeout(showNext, delay);
    }
  };
  setTimeout(showNext, delay);
}

function isPositive(text) {
  const lower = text.toLowerCase();
  return ["yes", "haan", "batao", "ok", "tell", "sure", "acha", "kya hai"].some(word => lower.includes(word));
}

function isNegative(text) {
  const lower = text.toLowerCase();
  return ["no", "nahi", "not interested", "leave", "exit", "stop"].some(word => lower.includes(word));
}

function containsKeyword(text, keywords) {
  const lower = text.toLowerCase();
  return keywords.some(word => lower.includes(word));
}

function handleUser() {
  const inputBox = document.getElementById("userInput");
  const userText = inputBox.value.trim();
  if (userText === "") return;

  showMessage(userText, "user");
  inputBox.value = "";

  if (isNegative(userText) && step !== -1) {
    showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
    step = -1;
    return;
  }

  if (step === 0) {
    if (isPositive(userText) || containsKeyword(userText, ["admission", "interested", "join", "apply"])) {
      showMessage("Great! Did you study Biology in your 12th grade? (Type 'biology' or mention your subject)");
      step = 1;
    } else if (!isNegative(userText)) {
      showMessage("👋 Welcome to LiaPlus Nursing College! Are you interested in admission?");
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 1) {
    if (containsKeyword(userText, ["biology", "बायोलॉजी"])) {
      showMessagesSequentially([
        "You're eligible! 🎉 B.Sc Nursing is a 4-year full-time program.",
        "Would you like more details about the program?"
      ]);
      step = 2;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("B.Sc Nursing mein admission ke liye Biology avashyak hai.");
      step = -1;
    }
  } else if (step === 2) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "The program includes theory classes and hospital training with real patients.",
        "Would you like to know about the fee structure?"
      ]);
      step = 3;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 3) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "📘 Fee Details:\n- Tuition Fee: ₹60,000\n- Bus Fee: ₹10,000\n- Total: ₹70,000",
        "Installments:\n1️⃣ ₹30,000 (at admission)\n2️⃣ ₹20,000 (after 1st semester)\n3️⃣ ₹20,000 (after 2nd semester)",
        "Shall I tell you about hostel and training facilities?"
      ]);
      step = 4;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 4) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "🏠 Hostel Facilities:\n- 24x7 water & electricity\n- CCTV security\n- On-site warden",
        "🏥 Training included: Students work with real patients.",
        "Would you like to know the college location?"
      ]);
      step = 5;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 5) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "📍 The college is located in Delhi.",
        "Do you want more information about the area?"
      ]);
      step = 6;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 6) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "The area is well connected and safe with public transport available.",
        "Shall I tell you about recognition and approvals?"
      ]);
      step = 7;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 7) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "✅ Our college is recognized by the Indian Nursing Council (INC), New Delhi.",
        "Would you like to know the clinical training locations?"
      ]);
      step = 8;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 8) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "🏥 Clinical Training Locations:\n- District Hospital (Backundpur)\n- Community Health Centers\n- Regional Hospital (Chartha)\n- Ranchi Neurosurgery Hospital (Jharkhand)",
        "Do you want to know about scholarship options?"
      ]);
      step = 9;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 9) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "🎓 Scholarships Available:\n- Govt Post-Matric: ₹18k–₹23k\n- Labour Ministry: ₹40k–₹48k (requires Labour Registration)",
        "There are 60 total seats. Want to know the eligibility criteria again?"
      ]);
      step = 10;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 10) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "Eligibility Criteria:\n✔ Biology in 12th grade\n✔ Passed PNT Exam\n✔ Age between 17 and 35 years",
        "Would you like help applying?"
      ]);
      step = 11;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === 11) {
    if (isPositive(userText)) {
      showMessagesSequentially([
        "You can apply online or contact our admissions team directly. 😊",
        "Thanks for chatting with us. All the best! 💙"
      ]);
      step = -1;
    } else if (isNegative(userText)) {
      showMessage("Alright, no worries. Feel free to ask again anytime. Take care! 👋");
      step = -1;
    } else {
      showMessage("I'm not clear on what you're saying. Please reply with something like 'yes', 'no'");
    }
  } else if (step === -1) {
    showMessage("Session ended. Refresh the page to start again.");
  }
}

// Initial welcome message
showMessage("👋 Welcome to LiaPlus Nursing College! Are you interested in admission?");
