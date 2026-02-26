 // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Fade-up
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // QUIZ DATA
  const questions = [
    {
      q: "You receive an SMS saying 'Your NTC SIM will be deactivated. Click here to verify.' What should you do?",
      np: "SMS: 'तपाईंको NTC SIM बन्द हुन्छ। यहाँ क्लिक गरेर verify गर्नुहोस्'",
      opts: ["Click the link immediately", "Call NTC's official helpline (1498) to verify", "Share it with friends to warn them", "Reply to the SMS with your details"],
      correct: 1,
      feedback: "✓ Correct! Always verify directly with NTC (1498) or visit an NTC center. This is a classic phishing SMS targeting Nepalis. Legitimate telecom companies never deactivate your SIM via a link."
    },
    {
      q: "Which password is the strongest?",
      np: "कुन पासवर्ड सबैभन्दा बलियो छ?",
      opts: ["9841234567", "Ram@1990", "Everest#Chai#2025!", "password123"],
      correct: 2,
      feedback: "✓ Correct! 'Everest#Chai#2025!' is long (17 characters), uses uppercase, lowercase, numbers, and symbols. Length and variety make passwords strong. Phone numbers and common words are very easy to crack."
    },
    {
      q: "Someone calls claiming to be from your bank and asks for your OTP. What do you do?",
      np: "कोहीले बैंकको कर्मचारी भनेर फोन गरी OTP माग्दछ। के गर्नुहुन्छ?",
      opts: ["Give the OTP since it's your bank", "Refuse and hang up — banks never ask for OTPs", "Ask them to call back later", "Give the first 3 digits only"],
      correct: 1,
      feedback: "✓ Correct! Banks NEVER ask for your OTP over the phone. This is called 'vishing' (voice phishing) and is very common in Nepal. Hang up immediately and call your bank's official number."
    },
    {
      q: "You want to log into your email at an internet cafe. What is the safest approach?",
      np: "इन्टरनेट क्याफेमा इमेल खोल्न चाहनुहुन्छ। सबैभन्दा सुरक्षित तरिका कुन हो?",
      opts: ["Log in normally", "Use Incognito mode and change password later from a safe device", "Save your password when the browser asks", "Let the cafe owner help you log in"],
      correct: 1,
      feedback: "✓ Correct! Use Incognito/Private mode to prevent saved history. But even better, avoid logging into sensitive accounts on public computers. If you must, change your password from a trusted device afterward."
    },
    {
      q: "Under Nepal's Electronic Transactions Act, sharing someone's private photos without consent is:",
      np: "नेपालको इलेक्ट्रोनिक कारोबार ऐन अनुसार, सहमति बिना कसैको निजी फोटो शेयर गर्नु...",
      opts: ["Only illegal if they complain", "A criminal offense punishable by law", "Only illegal on Facebook", "Not illegal in Nepal"],
      correct: 1,
      feedback: "✓ Correct! Nepal's Electronic Transactions Act and Individual Privacy Act 2075 make non-consensual sharing of private images a criminal offense. Victims can report to Nepal Police Cyber Bureau."
    },
    {
      q: "What does a padlock (🔒) in your browser's address bar mean?",
      np: "ब्राउजरको URL बारमा तालाको चिन्ह (🔒) को अर्थ के हो?",
      opts: ["The website is completely safe from hackers", "The connection is encrypted (HTTPS)", "The website is owned by the government", "Your device is protected"],
      correct: 1,
      feedback: "✓ Correct! The padlock means your connection to the site is encrypted using HTTPS — your data can't be intercepted in transit. But it doesn't mean the website itself is trustworthy or legitimate!"
    },
    {
      q: "You receive a Facebook friend request from someone you're already friends with. What could this mean?",
      np: "तपाईंसँग पहिले नै साथी भएको व्यक्तिको Facebook friend request आउँछ। यसको अर्थ के हो?",
      opts: ["They unfriended and re-added you", "It could be a fake/cloned profile", "Facebook had a technical error", "They want to be closer friends"],
      correct: 1,
      feedback: "✓ Correct! Scammers often clone profiles of your real friends to gain your trust, then ask for money or personal info. Always message your actual friend to verify before accepting duplicate requests."
    },
    {
      q: "Which is a sign that your social media account may have been hacked?",
      np: "तपाईंको सोशल मिडिया खाता ह्याक भएको संकेत कुन हो?",
      opts: ["You get more notifications than usual", "Friends report getting strange messages from your account", "Your profile picture looks different", "The app is slower than usual"],
      correct: 1,
      feedback: "✓ Correct! If friends report receiving odd messages, links, or requests from your account that you didn't send, you may be hacked. Immediately change your password, enable 2FA, and check connected apps."
    },
    {
      q: "An online investment scheme promises 30% returns every month. What is this likely?",
      np: "एक अनलाइन योजनाले हरेक महिना ३०% प्रतिफल दिने वाचा गर्छ। यो सम्भवतः के हो?",
      opts: ["A legitimate investment opportunity", "A Ponzi scheme or scam", "A government savings program", "A reliable crypto investment"],
      correct: 1,
      feedback: "✓ Correct! Guaranteed high returns are a classic red flag for financial scams. These are typically Ponzi schemes — early investors are paid using new investors' money until the scheme collapses. Many Nepalis have lost savings this way."
    },
    {
      q: "Someone is cyberbullying you online. What is the best first step?",
      np: "कोहीले अनलाइनमा तपाईंलाई बुलिङ गर्दैछ। पहिलो राम्रो कदम के हो?",
      opts: ["Fight back with equal insults", "Screenshot evidence, block the person, and report to the platform", "Delete your account", "Share it publicly to shame them"],
      correct: 1,
      feedback: "✓ Correct! Document everything first (screenshots), then block and report to the platform. If it's severe, you can also report to Nepal Police Cyber Bureau. Never engage with or escalate — that's what bullies want."
    }
  ];

  let currentQ = 0;
  let score = 0;
  let answered = false;

  function loadQuestion() {
    const q = questions[currentQ];
    document.getElementById('questionText').textContent = q.q;
    document.getElementById('questionNp').textContent = q.np;
    document.getElementById('progressFill').style.width = ((currentQ + 1) / questions.length * 100) + '%';
    document.getElementById('progressText').textContent = `Question ${currentQ + 1} of ${questions.length}`;
    document.getElementById('quizFeedback').className = 'quiz-feedback';
    document.getElementById('quizFeedback').textContent = '';
    document.getElementById('quizNext').className = 'quiz-next';
    answered = false;
    const opts = document.getElementById('quizOptions');
    opts.innerHTML = '';
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.textContent = opt;
      btn.onclick = () => selectAnswer(i);
      opts.appendChild(btn);
    });
  }

  function selectAnswer(idx) {
    if (answered) return;
    answered = true;
    const q = questions[currentQ];
    const btns = document.querySelectorAll('.quiz-opt');
    btns.forEach(b => b.disabled = true);
    const fb = document.getElementById('quizFeedback');
    if (idx === q.correct) {
      score++;
      btns[idx].classList.add('correct');
      fb.textContent = q.feedback;
      fb.className = 'quiz-feedback correct show';
    } else {
      btns[idx].classList.add('wrong');
      btns[q.correct].classList.add('correct');
      fb.textContent = '✗ ' + q.feedback;
      fb.className = 'quiz-feedback wrong show';
    }
    document.getElementById('quizNext').className = 'quiz-next show';
  }

  function nextQuestion() {
    currentQ++;
    if (currentQ >= questions.length) {
      showResult();
    } else {
      loadQuestion();
    }
  }

  function showResult() {
    document.getElementById('quizMain').style.display = 'none';
    document.getElementById('quizProgress').style.display = 'none';
    const result = document.getElementById('quizResult');
    result.className = 'quiz-result show';
    document.getElementById('resultScore').textContent = `${score}/10`;
    let label, msg;
    if (score >= 9) {
      label = '🏆 Cyber Champion!'; msg = 'Excellent! You are very well-informed about cybersecurity. Share this quiz with friends and family to spread awareness.';
    } else if (score >= 7) {
      label = '🛡️ Cyber Aware'; msg = 'Great job! You know the basics well. Review the tips in the Learn section to sharpen the areas you missed.';
    } else if (score >= 5) {
      label = '⚠️ Getting There'; msg = 'You have some knowledge but there are gaps. Read our Safe Practices tips carefully — your digital safety depends on it.';
    } else {
      label = '🚨 Needs Attention'; msg = 'Your digital safety is at risk. Please go through all our tips and FAQs carefully. Knowing this could protect you from real harm.';
    }
    document.getElementById('resultLabel').textContent = label;
    document.getElementById('resultMsg').textContent = msg;
  }

  function restartQuiz() {
    currentQ = 0; score = 0; answered = false;
    document.getElementById('quizMain').style.display = 'block';
    document.getElementById('quizProgress').style.display = 'block';
    document.getElementById('quizResult').className = 'quiz-result';
    loadQuestion();
  }

  loadQuestion();