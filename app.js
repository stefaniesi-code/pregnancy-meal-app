const mealBank = {
  first: {
    focus: "叶酸 + 维 B6 + 清淡蛋白",
    days: [
      day("明天", [
        meal("早餐", "姜香燕麦莓果碗", 12, ["叶酸", "纤维", "缓解反胃"], "燕麦、希腊酸奶、蓝莓、香蕉和少量姜粉。少量多餐，口感温和。", ["燕麦", "希腊酸奶", "蓝莓", "香蕉", "姜粉"]),
        meal("午餐", "鸡丝菠菜藜麦杯", 18, ["铁", "叶酸", "蛋白质"], "熟鸡胸、菠菜、藜麦、彩椒和柠檬汁。维 C 帮助植物铁吸收。", ["鸡胸肉", "菠菜", "藜麦", "彩椒", "柠檬"]),
        meal("加餐", "全麦吐司牛油果蛋", 10, ["胆碱", "健康脂肪"], "全熟鸡蛋搭配牛油果和全麦吐司，适合胃口不稳定时。", ["全麦吐司", "牛油果", "鸡蛋"]),
        meal("晚餐", "番茄扁豆汤配米饭", 22, ["铁", "纤维", "暖胃"], "扁豆、番茄、胡萝卜和米饭，温热软糯，便于消化。", ["扁豆", "番茄", "胡萝卜", "米饭"])
      ]),
      day("后天", [
        meal("早餐", "苏打饼苹果酸奶杯", 8, ["钙", "缓解反胃"], "巴氏杀菌酸奶、苹果丁和少量苏打饼碎，味道清爽不油腻。", ["酸奶", "苹果", "苏打饼"]),
        meal("午餐", "番茄豆腐蛋花面", 16, ["蛋白质", "叶酸"], "番茄、嫩豆腐、全熟蛋花和细面，热汤更容易入口。", ["番茄", "豆腐", "鸡蛋", "细面"]),
        meal("加餐", "梨子核桃小碗", 6, ["纤维", "健康脂肪"], "梨切小块配核桃，胃口差时也能补一点能量。", ["梨", "核桃"]),
        meal("晚餐", "南瓜鸡肉小米粥", 24, ["蛋白质", "温和", "维 A"], "南瓜、小米和鸡肉丝慢煮，软糯不刺激。", ["南瓜", "小米", "鸡肉", "姜"])
      ]),
      day("第 3 天", [
        meal("早餐", "香蕉花生酱吐司", 7, ["能量", "镁"], "全麦吐司抹花生酱，搭配香蕉，适合赶时间的早晨。", ["全麦吐司", "花生酱", "香蕉"]),
        meal("午餐", "鹰嘴豆彩椒饭团", 18, ["叶酸", "植物蛋白"], "熟鹰嘴豆、彩椒、米饭和海苔做成小饭团，方便少量多餐。", ["鹰嘴豆", "彩椒", "米饭", "海苔"]),
        meal("加餐", "蒸红薯配牛奶", 12, ["钾", "钙"], "红薯蒸熟后搭配巴氏杀菌牛奶，温和补能量。", ["红薯", "牛奶"]),
        meal("晚餐", "清炖鳕鱼豆腐汤", 20, ["DHA", "蛋白质"], "低汞白鱼、豆腐和青菜彻底煮熟，汤底清淡。", ["鳕鱼", "豆腐", "青菜"])
      ])
    ]
  },
  second: {
    focus: "铁 + 维 C + 蛋白质",
    days: [
      day("明天", [
        meal("早餐", "芝麻菠菜鸡蛋卷", 15, ["铁", "钙", "胆碱"], "全熟蛋卷包菠菜和芝麻，搭配橙子补充维 C。", ["鸡蛋", "菠菜", "芝麻", "橙子"]),
        meal("午餐", "柠檬鸡肉藜麦沙拉", 20, ["蛋白质", "叶酸", "维 C"], "鸡肉、藜麦、鹰嘴豆、黄瓜和柠檬橄榄油汁。", ["鸡胸肉", "藜麦", "鹰嘴豆", "黄瓜", "柠檬"]),
        meal("加餐", "酸奶坚果水果杯", 8, ["钙", "镁", "纤维"], "巴氏杀菌酸奶、核桃、苹果丁和奇亚籽，甜度自然。", ["酸奶", "核桃", "苹果", "奇亚籽"]),
        meal("晚餐", "低汞三文鱼糙米碗", 18, ["DHA", "蛋白质", "维 D"], "熟三文鱼、糙米、西兰花和海苔碎，鱼类完全煮熟。", ["三文鱼", "糙米", "西兰花", "海苔"])
      ]),
      day("后天", [
        meal("早餐", "红枣核桃小米粥", 18, ["铁", "能量"], "小米、红枣和核桃煮成稠粥，早晨暖胃。", ["小米", "红枣", "核桃"]),
        meal("午餐", "瘦牛肉彩椒米粉", 22, ["铁", "维 C", "蛋白质"], "瘦牛肉和彩椒快炒，搭配米粉；肉类彻底熟透。", ["瘦牛肉", "彩椒", "米粉", "小白菜"]),
        meal("加餐", "橙子鹰嘴豆泥全麦饼", 10, ["维 C", "植物蛋白"], "鹰嘴豆泥抹全麦饼，配橙子提高铁吸收。", ["鹰嘴豆", "全麦饼", "橙子"]),
        meal("晚餐", "番茄豆腐虾仁煲", 20, ["碘", "钙", "蛋白质"], "虾仁、番茄、豆腐和青菜同煮，汤汁酸甜。", ["虾仁", "番茄", "豆腐", "青菜"])
      ]),
      day("第 3 天", [
        meal("早餐", "燕麦奇亚籽梨碗", 10, ["纤维", "镁"], "燕麦、梨丁、奇亚籽和低糖酸奶，帮助稳定饱腹感。", ["燕麦", "梨", "奇亚籽", "酸奶"]),
        meal("午餐", "扁豆菠菜番茄汤", 24, ["铁", "叶酸", "纤维"], "扁豆、菠菜和番茄熬汤，搭配一小碗米饭。", ["扁豆", "菠菜", "番茄", "米饭"]),
        meal("加餐", "苹果花生酱小盘", 5, ["健康脂肪", "纤维"], "苹果片配花生酱，简单补能量。", ["苹果", "花生酱"]),
        meal("晚餐", "鸡肉西兰花荞麦面", 19, ["蛋白质", "叶酸"], "熟鸡肉丝、西兰花和荞麦面，清爽少油。", ["鸡肉", "西兰花", "荞麦面"])
      ])
    ]
  },
  third: {
    focus: "钙 + 蛋白质 + 消化舒适",
    days: [
      day("明天", [
        meal("早餐", "香蕉花生酱燕麦", 10, ["镁", "纤维", "能量"], "软糯燕麦、香蕉和花生酱，少量多餐不顶胃。", ["燕麦", "香蕉", "花生酱", "牛奶"]),
        meal("午餐", "牛肉番茄豆腐饭", 24, ["铁", "钙", "蛋白质"], "瘦牛肉碎、番茄、北豆腐和米饭，酸甜开胃。", ["瘦牛肉", "番茄", "北豆腐", "米饭"]),
        meal("加餐", "梨子奇亚籽酸奶", 7, ["钙", "纤维"], "巴氏杀菌酸奶加梨丁和奇亚籽，帮助提高纤维摄入。", ["酸奶", "梨", "奇亚籽"]),
        meal("晚餐", "虾仁蔬菜乌冬", 19, ["碘", "蛋白质", "补水"], "虾仁彻底煮熟，搭配小白菜、胡萝卜和清汤乌冬。", ["虾仁", "乌冬", "小白菜", "胡萝卜"])
      ]),
      day("后天", [
        meal("早餐", "芝士菠菜全熟蛋饼", 14, ["钙", "胆碱"], "巴氏杀菌奶酪、菠菜和全熟鸡蛋，搭配全麦面饼。", ["鸡蛋", "菠菜", "奶酪", "全麦饼"]),
        meal("午餐", "鸡肉南瓜糙米饭", 22, ["蛋白质", "纤维"], "鸡肉丁、南瓜和糙米，口感软糯不油腻。", ["鸡肉", "南瓜", "糙米"]),
        meal("加餐", "蒸苹果燕麦杯", 12, ["纤维", "温和"], "苹果蒸软后拌燕麦和肉桂粉，甜味自然。", ["苹果", "燕麦", "肉桂粉"]),
        meal("晚餐", "鳕鱼豆腐青菜汤", 18, ["DHA", "钙", "补水"], "低汞白鱼和豆腐煮汤，青菜最后下锅。", ["鳕鱼", "豆腐", "青菜"])
      ]),
      day("第 3 天", [
        meal("早餐", "红薯酸奶坚果碗", 11, ["钙", "钾"], "蒸红薯、巴氏杀菌酸奶和核桃，软糯饱腹。", ["红薯", "酸奶", "核桃"]),
        meal("午餐", "番茄扁豆牛肉汤", 25, ["铁", "纤维", "蛋白质"], "瘦牛肉、扁豆和番茄熬汤，配少量米饭。", ["瘦牛肉", "扁豆", "番茄", "米饭"]),
        meal("加餐", "黄瓜鹰嘴豆小杯", 8, ["植物蛋白", "补水"], "熟鹰嘴豆和黄瓜丁拌酸奶酱，清爽不胀。", ["鹰嘴豆", "黄瓜", "酸奶"]),
        meal("晚餐", "鸡蛋豆腐蔬菜蒸碗", 16, ["钙", "胆碱"], "鸡蛋液、豆腐和胡萝卜蒸熟，嫩滑好入口。", ["鸡蛋", "豆腐", "胡萝卜"])
      ])
    ]
  },
  postpartum: {
    focus: "补水 + 蛋白质 + 温和能量",
    days: [
      day("明天", [
        meal("早餐", "红枣燕麦牛奶粥", 14, ["钙", "能量", "温和"], "燕麦、巴氏杀菌牛奶、红枣和核桃，适合忙碌早晨。", ["燕麦", "牛奶", "红枣", "核桃"]),
        meal("午餐", "鸡汤蔬菜面", 20, ["补水", "蛋白质"], "鸡肉、面条、青菜和香菇，汤面方便进食。", ["鸡肉", "面条", "青菜", "香菇"]),
        meal("加餐", "鹰嘴豆泥蔬菜条", 9, ["植物蛋白", "纤维"], "鹰嘴豆泥配胡萝卜、黄瓜和全麦饼。", ["鹰嘴豆", "胡萝卜", "黄瓜", "全麦饼"]),
        meal("晚餐", "鳕鱼豆腐蔬菜煲", 22, ["DHA", "钙", "蛋白质"], "低汞白鱼、豆腐和青菜同煮，清淡高蛋白。", ["鳕鱼", "豆腐", "青菜", "姜"])
      ]),
      day("后天", [
        meal("早餐", "鸡蛋番茄软饭", 15, ["胆碱", "补水"], "全熟鸡蛋、番茄和软米饭，适合清晨快速恢复能量。", ["鸡蛋", "番茄", "米饭"]),
        meal("午餐", "三文鱼南瓜粥", 23, ["DHA", "蛋白质"], "熟三文鱼、南瓜和大米煮粥，口感细软。", ["三文鱼", "南瓜", "大米"]),
        meal("加餐", "酸奶蓝莓燕麦杯", 8, ["钙", "纤维"], "巴氏杀菌酸奶、蓝莓和燕麦，冷藏后尽快食用。", ["酸奶", "蓝莓", "燕麦"]),
        meal("晚餐", "牛肉萝卜汤面", 24, ["铁", "补水"], "瘦牛肉、白萝卜和面条煮汤，温热好入口。", ["瘦牛肉", "白萝卜", "面条"])
      ]),
      day("第 3 天", [
        meal("早餐", "花生酱香蕉全麦卷", 7, ["能量", "镁"], "全麦饼卷香蕉和花生酱，单手也能吃。", ["全麦饼", "香蕉", "花生酱"]),
        meal("午餐", "豆腐虾仁蔬菜饭", 18, ["钙", "蛋白质"], "虾仁、豆腐和青菜彻底煮熟，搭配米饭。", ["虾仁", "豆腐", "青菜", "米饭"]),
        meal("加餐", "苹果核桃小碗", 6, ["纤维", "健康脂肪"], "苹果丁和核桃，简单补充能量。", ["苹果", "核桃"]),
        meal("晚餐", "香菇鸡肉杂粮粥", 25, ["蛋白质", "温和"], "鸡肉、香菇、杂粮和胡萝卜熬粥，适合晚间。", ["鸡肉", "香菇", "杂粮", "胡萝卜"])
      ])
    ]
  }
};

const symptomBoosts = {
  nausea: ["姜", "苏打饼", "香蕉", "米粥"],
  iron: ["菠菜", "瘦牛肉", "扁豆", "橙子"],
  constipation: ["梨", "燕麦", "奇亚籽", "豆类"],
  heartburn: ["燕麦", "香蕉", "清汤", "少油烹调"],
  quick: ["鸡蛋", "酸奶", "全麦吐司", "冷冻蔬菜"]
};

const dietSwaps = {
  balanced: "",
  vegetarian: "可把肉类替换为豆腐、鸡蛋、鹰嘴豆或扁豆。",
  lowLactose: "可把牛奶/酸奶替换为低乳糖或强化豆奶产品。"
};

const safetyItems = [
  safe("三文鱼", "推荐", "低汞鱼类选择之一，需完全煮熟。每周鱼类目标可按医嘱调整。"),
  safe("虾", "推荐", "低汞海鲜，彻底煮熟后食用。"),
  safe("鸡蛋", "推荐", "提供胆碱和蛋白质，蛋黄蛋白都要全熟。"),
  safe("咖啡", "限量", "按咖啡因总量计算，茶、奶茶、可乐、能量饮料和巧克力也要计入。不同品牌浓度差异很大，优先看营养标签。", "每天咖啡因不超过 200mg；普通冲煮咖啡先按约 240ml/杯估算。"),
  safe("金枪鱼", "限量", "优先低汞种类并控制频率，避免高汞大型鱼。", "不要把高汞鱼当作日常蛋白来源；鱼类总量按医生建议调整。"),
  safe("李斯特菌风险", "避免", "重点留意冷藏即食食品：未消毒奶制品、冷切熟食、热狗、冷藏烟熏海鲜、预制沙拉、未洗净果蔬。需要吃熟食时加热到冒热气。"),
  safe("软奶酪", "避免", "未消毒乳制品风险较高；只选择明确巴氏杀菌产品，并尽量现开现吃。"),
  safe("生鱼片", "避免", "生食有食源性疾病风险；孕期优先熟食。"),
  safe("酒精", "避免", "孕期没有已知安全饮酒量。")
];

const state = {
  stage: "second",
  symptom: "iron",
  diet: "balanced",
  fishCount: 2,
  quickOnly: false,
  pantry: []
};

const stageSelect = document.querySelector("#stage");
const symptomSelect = document.querySelector("#symptom");
const pantryInput = document.querySelector("#pantry");
const quickOnly = document.querySelector("#quickOnly");
const mealGrid = document.querySelector("#mealGrid");
const focusText = document.querySelector("#focusText");
const timeText = document.querySelector("#timeText");
const coverageText = document.querySelector("#coverageText");
const fishCount = document.querySelector("#fishCount");
const shoppingList = document.querySelector("#shoppingList");
const safeSearch = document.querySelector("#safeSearch");
const safetyList = document.querySelector("#safetyList");
let renderedMeals = [];

function meal(slot, title, minutes, tags, description, ingredients) {
  return { slot, title, minutes, tags, description, ingredients };
}

function day(label, meals) {
  return { label, meals };
}

function safe(name, status, note, amount = "") {
  return { name, status, note, amount };
}

function renderMeals() {
  const base = mealBank[state.stage];
  const boost = symptomBoosts[state.symptom];
  const pantryMode = state.pantry.length > 0;
  const sourceDays = pantryMode ? buildPantryDays() : base.days;
  const days = sourceDays.map((plan) => ({
    ...plan,
    meals: plan.meals
      .map(prepareMeal)
      .filter((item) => !state.quickOnly || item.minutes <= 20)
  }));

  const meals = days.flatMap((plan) => plan.meals);
  renderedMeals = meals;

  focusText.textContent = pantryMode ? `优先使用：${state.pantry.join("、")}` : base.focus;
  timeText.textContent = `${meals.reduce((sum, item) => sum + item.minutes, 0)} 分钟`;
  coverageText.textContent = pantryMode ? `${meals.reduce((sum, item) => sum + item.matches.length, 0)} 次命中` : `${new Set(meals.flatMap((item) => item.tags)).size} 项`;
  fishCount.textContent = state.fishCount;

  mealGrid.innerHTML = days.map((plan) => `
    <section class="day-plan">
      <div class="day-heading">
        <h3>${plan.label}</h3>
        <span>${plan.meals.length ? `${plan.meals.reduce((sum, item) => sum + item.minutes, 0)} 分钟` : "无 20 分钟内菜谱"}</span>
      </div>
      <div class="day-meals">
        ${plan.meals.map((item) => `
          <article class="meal-card">
            <div class="meal-top">
              <div>
                <span class="meal-slot">${item.slot}</span>
                <h3>${item.title}</h3>
              </div>
              <span class="time-pill">${item.minutes}m</span>
            </div>
            <p>${item.description}</p>
            <div class="tags">
              ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              ${item.matches.map((tag) => `<span class="tag match">已有 ${tag}</span>`).join("")}
            </div>
            ${item.missing.length && pantryMode ? `<span class="missing-note">还需：${item.missing.slice(0, 4).join("、")}</span>` : ""}
            <div class="card-actions">
              <button class="action-button" type="button" data-add="${item.title}">加入清单</button>
              <button class="action-button" type="button" data-swap="${item.title}">替换建议</button>
            </div>
          </article>
        `).join("") || `<p class="empty-day">打开“只看 20 分钟内”后，这一天暂时没有符合条件的菜。</p>`}
      </div>
    </section>
  `).join("");

  const items = collectIngredients(meals, boost);
  shoppingList.innerHTML = items.map(([name, count]) => `<li><strong>${name}</strong><span>${count > 1 ? `${count} 份` : "1 份"}</span></li>`).join("");
}

function prepareMeal(item) {
  const matches = getMatches(item.ingredients, state.pantry);
  const missing = item.ingredients.filter((ingredient) => !matches.includes(ingredient));
  return {
    ...item,
    matches,
    missing,
    description: `${item.description} ${dietSwaps[state.diet]}`.trim()
  };
}

function buildPantryDays() {
  const slots = ["早餐", "午餐", "加餐", "晚餐"];
  const pool = getAllMeals()
    .map((item) => ({ ...item, score: scoreMeal(item) }))
    .filter((item) => !state.quickOnly || item.minutes <= 20)
    .sort((a, b) => b.score - a.score || a.minutes - b.minutes);

  const used = new Set();
  return ["明天", "后天", "第 3 天"].map((label) => {
    const meals = slots.map((slot) => {
      const picked = pool.find((item) => item.slot === slot && !used.has(item.title)) || pool.find((item) => !used.has(item.title));
      if (picked) {
        used.add(picked.title);
      }
      return picked;
    }).filter(Boolean);

    return day(label, meals);
  });
}

function getAllMeals() {
  return Object.entries(mealBank).flatMap(([stage, plan]) => {
    return plan.days.flatMap((dayPlan) => dayPlan.meals.map((item) => ({ ...item, stage })));
  });
}

function scoreMeal(item) {
  const matches = getMatches(item.ingredients, state.pantry).length;
  const symptomMatches = item.ingredients.filter((ingredient) => symptomBoosts[state.symptom].includes(ingredient)).length;
  const stageScore = item.stage === state.stage ? 1.5 : 0;
  const quickScore = item.minutes <= 20 ? 0.5 : 0;
  return matches * 8 + symptomMatches * 2 + stageScore + quickScore;
}

function getMatches(ingredients, pantry) {
  return ingredients.filter((ingredient) => {
    return pantry.some((item) => ingredient.includes(item) || item.includes(ingredient));
  });
}

function parsePantry(value) {
  return value
    .split(/[、,，\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function collectIngredients(meals, boost) {
  const counts = new Map();
  meals.flatMap((item) => item.ingredients).concat(boost).forEach((name) => {
    counts.set(name, (counts.get(name) || 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"));
}

function renderSafety() {
  const query = safeSearch.value.trim().toLowerCase();
  const filtered = safetyItems.filter((item) => {
    return item.name.toLowerCase().includes(query) || item.note.toLowerCase().includes(query) || item.amount.toLowerCase().includes(query) || item.status.includes(query);
  });

  safetyList.innerHTML = filtered.map((item) => {
    const statusClass = item.status === "避免" ? "avoid" : item.status === "限量" ? "warn" : "";
    return `
      <article class="safety-item">
        <span class="status ${statusClass}">${item.status}</span>
        <div>
          <strong>${item.name}</strong>
          <p>${item.note}</p>
          ${item.amount ? `<p class="amount-note">建议量：${item.amount}</p>` : ""}
        </div>
      </article>
    `;
  }).join("") || `<p class="empty">没有找到，先按“是否生食、是否高汞、是否巴氏杀菌、是否含酒精”判断。</p>`;
}

stageSelect.addEventListener("change", (event) => {
  state.stage = event.target.value;
  renderMeals();
});

symptomSelect.addEventListener("change", (event) => {
  state.symptom = event.target.value;
  renderMeals();
});

pantryInput.addEventListener("input", (event) => {
  state.pantry = parsePantry(event.target.value);
  renderMeals();
});

quickOnly.addEventListener("change", (event) => {
  state.quickOnly = event.target.checked;
  renderMeals();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.diet = button.dataset.diet;
    renderMeals();
  });
});

document.querySelector("#fishMinus").addEventListener("click", () => {
  state.fishCount = Math.max(0, state.fishCount - 1);
  renderMeals();
});

document.querySelector("#fishPlus").addEventListener("click", () => {
  state.fishCount = Math.min(4, state.fishCount + 1);
  renderMeals();
});

mealGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const swapButton = event.target.closest("[data-swap]");

  if (addButton) {
    const meal = renderedMeals.find((item) => item.title === addButton.dataset.add);
    const items = collectIngredients([meal], symptomBoosts[state.symptom]);
    shoppingList.innerHTML = items.map(([name, count]) => `<li><strong>${name}</strong><span>${count > 1 ? `${count} 份` : "1 份"}</span></li>`).join("");
  }

  if (swapButton) {
    const card = swapButton.closest(".meal-card");
    const note = card.querySelector(".swap-note");
    if (note) {
      note.remove();
      return;
    }
    card.insertAdjacentHTML("beforeend", `<p class="swap-note">替换建议：肉类可换熟豆腐/鸡蛋/低汞鱼；生冷食材换成焯熟蔬菜；反胃时把浓味调料减半。</p>`);
  }
});

safeSearch.addEventListener("input", renderSafety);

renderMeals();
renderSafety();
