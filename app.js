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

const extraMeals = {
  first: [
    meal("早餐", "紫薯牛奶燕麦糊", 14, ["钙", "能量", "温和"], "紫薯蒸熟压泥，和燕麦、巴氏杀菌牛奶煮成糊，口感柔和。", ["紫薯", "燕麦", "牛奶"]),
    meal("早餐", "番茄鸡蛋软面", 15, ["胆碱", "补水"], "番茄煮软后下细面和全熟蛋花，适合早晨胃口弱的时候。", ["番茄", "鸡蛋", "细面"]),
    meal("午餐", "豆腐青菜鸡肉粥", 20, ["蛋白质", "叶酸"], "鸡肉丝、豆腐和青菜煮粥，温热软糯，减少油腻感。", ["鸡肉", "豆腐", "青菜", "米饭"]),
    meal("午餐", "牛油果鹰嘴豆吐司", 12, ["叶酸", "植物蛋白"], "熟鹰嘴豆压泥配牛油果，抹全麦吐司，少量柠檬提味。", ["鹰嘴豆", "牛油果", "全麦吐司", "柠檬"]),
    meal("加餐", "香蕉苏打饼小盘", 5, ["缓解反胃", "能量"], "香蕉切片配苏打饼，适合少量多餐。", ["香蕉", "苏打饼"]),
    meal("加餐", "蒸蛋羹", 12, ["胆碱", "蛋白质"], "鸡蛋加温水蒸熟，口感嫩滑，避免半熟蛋。", ["鸡蛋"]),
    meal("晚餐", "番茄鸡肉土豆炖菜", 25, ["蛋白质", "维 C"], "鸡肉、土豆和番茄炖到软烂，味道温和。", ["鸡肉", "土豆", "番茄"]),
    meal("晚餐", "菠菜豆腐米线汤", 18, ["叶酸", "钙"], "豆腐、菠菜和米线煮汤，蔬菜彻底加热。", ["菠菜", "豆腐", "米线"])
  ],
  second: [
    meal("早餐", "牛奶燕麦鸡蛋杯", 13, ["钙", "胆碱"], "燕麦、巴氏杀菌牛奶和全熟鸡蛋搭配，饱腹又快手。", ["燕麦", "牛奶", "鸡蛋"]),
    meal("早餐", "豆浆全麦蔬菜卷", 10, ["植物蛋白", "叶酸"], "强化豆浆配全麦饼，卷入焯熟菠菜和彩椒。", ["豆浆", "全麦饼", "菠菜", "彩椒"]),
    meal("午餐", "牛肉菠菜糙米碗", 24, ["铁", "蛋白质"], "瘦牛肉、菠菜和糙米组合，搭配橙子帮助铁吸收。", ["瘦牛肉", "菠菜", "糙米", "橙子"]),
    meal("午餐", "鸡蛋豆腐番茄盖饭", 18, ["胆碱", "钙"], "番茄、豆腐和全熟鸡蛋做成酸甜盖饭。", ["鸡蛋", "豆腐", "番茄", "米饭"]),
    meal("加餐", "红薯核桃酸奶碗", 10, ["钙", "纤维"], "蒸红薯搭配巴氏杀菌酸奶和核桃，甜度自然。", ["红薯", "酸奶", "核桃"]),
    meal("加餐", "黄瓜芝麻鹰嘴豆", 8, ["植物蛋白", "镁"], "熟鹰嘴豆、黄瓜丁和芝麻拌匀，清爽补能量。", ["鹰嘴豆", "黄瓜", "芝麻"]),
    meal("晚餐", "鳕鱼番茄豆腐汤", 20, ["DHA", "钙", "蛋白质"], "低汞鳕鱼、番茄和豆腐煮汤，鱼肉完全熟透。", ["鳕鱼", "番茄", "豆腐"]),
    meal("晚餐", "虾仁西兰花荞麦饭", 20, ["碘", "叶酸"], "虾仁彻底煮熟，搭配西兰花和荞麦饭。", ["虾仁", "西兰花", "荞麦", "米饭"])
  ],
  third: [
    meal("早餐", "黑芝麻香蕉牛奶糊", 9, ["钙", "镁"], "香蕉、黑芝麻和巴氏杀菌牛奶打成温热糊，少量多餐。", ["香蕉", "黑芝麻", "牛奶"]),
    meal("早餐", "南瓜鸡蛋软饼", 16, ["胆碱", "能量"], "南瓜泥和鸡蛋做软饼，鸡蛋完全煎熟。", ["南瓜", "鸡蛋", "面粉"]),
    meal("午餐", "豆腐牛肉青菜汤饭", 22, ["铁", "钙"], "瘦牛肉、豆腐和青菜煮汤，浇在米饭上。", ["瘦牛肉", "豆腐", "青菜", "米饭"]),
    meal("午餐", "鸡肉蘑菇燕麦咸粥", 21, ["蛋白质", "纤维"], "鸡肉、蘑菇和燕麦煮成咸粥，温和好消化。", ["鸡肉", "蘑菇", "燕麦"]),
    meal("加餐", "梨子花生酱吐司", 7, ["纤维", "健康脂肪"], "梨片配花生酱和全麦吐司，便捷补能量。", ["梨", "花生酱", "全麦吐司"]),
    meal("加餐", "毛豆玉米小碗", 10, ["植物蛋白", "纤维"], "毛豆和玉米煮熟后少量调味，适合下午加餐。", ["毛豆", "玉米"]),
    meal("晚餐", "三文鱼豆腐蔬菜蒸碗", 20, ["DHA", "钙"], "熟三文鱼、豆腐和胡萝卜蒸熟，口感软嫩。", ["三文鱼", "豆腐", "胡萝卜"]),
    meal("晚餐", "番茄鸡蛋小白菜面", 17, ["胆碱", "补水"], "番茄、全熟蛋和小白菜煮面，晚餐轻负担。", ["番茄", "鸡蛋", "小白菜", "面条"])
  ],
  postpartum: [
    meal("早餐", "芝麻核桃燕麦粥", 15, ["能量", "钙"], "燕麦、芝麻和核桃煮粥，适合产后忙碌早晨。", ["燕麦", "芝麻", "核桃"]),
    meal("早餐", "鸡蛋青菜汤面", 14, ["胆碱", "补水"], "全熟鸡蛋、青菜和面条煮汤，简单温热。", ["鸡蛋", "青菜", "面条"]),
    meal("午餐", "鸡肉豆腐杂粮饭", 20, ["蛋白质", "钙"], "鸡肉、豆腐和杂粮饭组合，食材容易备好。", ["鸡肉", "豆腐", "杂粮"]),
    meal("午餐", "虾仁番茄米粉汤", 18, ["碘", "补水"], "虾仁彻底熟透，和番茄、米粉煮成汤。", ["虾仁", "番茄", "米粉"]),
    meal("加餐", "红枣牛奶燕麦杯", 8, ["钙", "能量"], "巴氏杀菌牛奶、燕麦和红枣加热，快速补能量。", ["牛奶", "燕麦", "红枣"]),
    meal("加餐", "豆腐鹰嘴豆小碗", 10, ["植物蛋白", "钙"], "熟鹰嘴豆和豆腐拌成小碗，清淡耐饱。", ["鹰嘴豆", "豆腐"]),
    meal("晚餐", "鳕鱼南瓜豆腐汤", 22, ["DHA", "钙"], "鳕鱼、南瓜和豆腐同煮，清淡高蛋白。", ["鳕鱼", "南瓜", "豆腐"]),
    meal("晚餐", "牛肉番茄蔬菜粥", 24, ["铁", "补水"], "瘦牛肉、番茄和青菜熬粥，温热好入口。", ["瘦牛肉", "番茄", "青菜"])
  ]
};

const bookletMeals = {
  first: [
    meal("早餐", "水煮蛋甜玉米牛奶", 10, ["胆碱", "钙"], "参考月子式周菜单的基础早餐：水煮蛋、甜玉米和巴氏杀菌牛奶。", ["鸡蛋", "甜玉米", "牛奶"]),
    meal("早餐", "杂粮馒头玉米粥", 12, ["能量", "温和"], "杂粮馒头搭配玉米粥，清淡耐饱。", ["杂粮馒头", "玉米", "米"]),
    meal("早餐", "全麦欧包香蕉奶昔", 8, ["纤维", "钙"], "全麦欧包配香蕉牛奶奶昔，适合早晨快手。", ["全麦欧包", "香蕉", "牛奶"]),
    meal("午餐", "虾仁炒西兰花米饭", 18, ["碘", "叶酸"], "虾仁彻底炒熟，搭配西兰花和米饭。", ["虾仁", "西兰花", "米饭"]),
    meal("午餐", "番茄炒蛋丝瓜瘦肉汤", 22, ["胆碱", "蛋白质"], "番茄炒全熟蛋，搭配丝瓜瘦肉汤。", ["番茄", "鸡蛋", "丝瓜", "瘦肉"]),
    meal("午餐", "红烧鸡腿白菜炖豆腐", 26, ["蛋白质", "钙"], "鸡腿烧熟后搭配白菜豆腐，适合配米饭。", ["鸡腿", "白菜", "豆腐", "米饭"]),
    meal("晚餐", "小米粥西芹豆干香煎鱼", 24, ["DHA", "钙"], "小米粥配西芹豆干和熟煎鱼，晚餐不油腻。", ["小米", "西芹", "豆干", "鱼"]),
    meal("晚餐", "二米粥香菇肉末豆腐", 22, ["蛋白质", "纤维"], "大米小米煮粥，配香菇肉末豆腐。", ["大米", "小米", "香菇", "肉末", "豆腐"]),
    meal("加餐", "芝麻糊橙子核桃", 6, ["钙", "健康脂肪"], "芝麻糊配橙子和核桃，适合作为下午加餐。", ["芝麻糊", "橙子", "核桃"]),
    meal("加餐", "银耳羹猕猴桃松子", 8, ["维 C", "温和"], "银耳羹搭配猕猴桃和松子，清爽补水。", ["银耳", "猕猴桃", "松子"])
  ],
  second: [
    meal("早餐", "牛奶全麦面包水果黄瓜", 8, ["钙", "纤维"], "牛奶、全麦面包、水果和黄瓜，像打印食谱一样容易照做。", ["牛奶", "全麦面包", "水果", "黄瓜"]),
    meal("早餐", "黑芝麻糊红薯水煮蛋", 10, ["钙", "胆碱"], "黑芝麻糊搭配红薯和水煮蛋，适合孕中期早餐。", ["黑芝麻糊", "红薯", "鸡蛋"]),
    meal("早餐", "蔬菜包燕麦南瓜粥", 16, ["纤维", "能量"], "蔬菜包配燕麦南瓜粥，饱腹但不厚重。", ["蔬菜包", "燕麦", "南瓜"]),
    meal("午餐", "青菜肉片面酸辣土豆丝", 20, ["蛋白质", "维 C"], "青菜肉片面搭配酸辣土豆丝，酸辣调味要适量。", ["青菜", "瘦肉", "面条", "土豆"]),
    meal("午餐", "二米饭虾仁豆腐冬瓜汤", 22, ["碘", "钙"], "大米小米饭配虾仁豆腐和冬瓜汤。", ["大米", "小米", "虾仁", "豆腐", "冬瓜"]),
    meal("午餐", "杂粮饭番茄土豆牛腩", 28, ["铁", "蛋白质"], "牛腩炖到软烂，配番茄土豆和杂粮饭。", ["杂粮", "番茄", "土豆", "牛腩"]),
    meal("晚餐", "山药牛肉粥香菇油菜", 24, ["铁", "温和"], "山药牛肉粥搭配香菇油菜，晚餐温和。", ["山药", "牛肉", "香菇", "油菜"]),
    meal("晚餐", "黑米饭土豆炖排骨清炒菜心", 28, ["铁", "蛋白质"], "排骨彻底炖熟，配黑米饭和清炒菜心。", ["黑米", "土豆", "排骨", "菜心"]),
    meal("加餐", "酸奶鸡蛋饼松子", 10, ["钙", "胆碱"], "巴氏杀菌酸奶配全熟鸡蛋饼和少量松子。", ["酸奶", "鸡蛋", "松子"]),
    meal("加餐", "南瓜小米粥猕猴桃", 16, ["纤维", "维 C"], "南瓜小米粥配猕猴桃，清淡好入口。", ["南瓜", "小米", "猕猴桃"])
  ],
  third: [
    meal("早餐", "鲜肉包燕麦南瓜粥清炒生菜", 18, ["蛋白质", "纤维"], "鲜肉包配燕麦南瓜粥和清炒生菜，肉馅完全蒸熟。", ["鲜肉包", "燕麦", "南瓜", "生菜"]),
    meal("早餐", "牛奶燕麦粥荷包蛋", 12, ["钙", "胆碱"], "牛奶燕麦粥配全熟荷包蛋，简单稳定。", ["牛奶", "燕麦", "鸡蛋"]),
    meal("午餐", "米饭炒菜心清蒸鲈鱼", 22, ["DHA", "叶酸"], "清蒸鲈鱼配米饭和炒菜心，鱼肉完全熟透。", ["米饭", "菜心", "鲈鱼"]),
    meal("午餐", "虾仁蘑菇汤红烧鸡腿", 28, ["碘", "蛋白质"], "虾仁蘑菇汤搭配红烧鸡腿，口味更像家常周菜单。", ["虾仁", "蘑菇", "鸡腿"]),
    meal("晚餐", "玉米瘦肉粥花卷清炒茼蒿", 22, ["蛋白质", "补水"], "玉米瘦肉粥配花卷和清炒茼蒿。", ["玉米", "瘦肉", "花卷", "茼蒿"]),
    meal("晚餐", "荞麦面蛤蜊蒸蛋红烧带鱼", 26, ["碘", "胆碱"], "蛤蜊蒸蛋和红烧带鱼都要彻底熟透。", ["荞麦面", "蛤蜊", "鸡蛋", "带鱼"]),
    meal("加餐", "无糖酸奶草莓瓜子", 6, ["钙", "维 C"], "无糖酸奶配草莓和瓜子，适合控糖少油。", ["无糖酸奶", "草莓", "瓜子"]),
    meal("加餐", "水煮蛋金桔雪梨汤腰果", 12, ["胆碱", "补水"], "水煮蛋配金桔雪梨汤和少量腰果。", ["鸡蛋", "金桔", "雪梨", "腰果"])
  ],
  postpartum: []
};

const menuProfiles = {
  balanced: {
    label: "日常均衡",
    focus: "按月龄默认均衡菜单",
    boosts: ["牛奶", "鸡蛋", "米饭", "豆腐", "青菜"]
  },
  light: {
    label: "清淡开胃",
    focus: "清淡开胃 + 少量多餐",
    boosts: ["小米", "南瓜", "番茄", "黄瓜", "冬瓜", "苹果"]
  },
  iron: {
    label: "补铁高蛋白",
    focus: "铁 + 优质蛋白 + 维 C",
    boosts: ["瘦牛肉", "牛肉", "菠菜", "扁豆", "橙子", "红薯"]
  },
  fiber: {
    label: "纤维顺畅",
    focus: "纤维 + 补水 + 温和主食",
    boosts: ["燕麦", "梨", "红薯", "玉米", "杂粮", "青菜"]
  },
  quick: {
    label: "快手备餐",
    focus: "快手备餐 + 少洗少切",
    boosts: ["鸡蛋", "牛奶", "全麦面包", "酸奶", "米饭", "豆腐"]
  },
  lowSugar: {
    label: "控糖少油",
    focus: "无糖酸奶 + 杂粮主食 + 少油烹调",
    boosts: ["无糖酸奶", "杂粮", "燕麦", "黄瓜", "青菜", "豆腐"]
  }
};

const monthProfiles = {
  month1: { label: "孕1月", group: "first", profile: "light", focus: "孕1月：清淡开胃 + 叶酸 + 少量多餐" },
  month2: { label: "孕2月", group: "first", profile: "light", focus: "孕2月：缓解反胃 + 清淡蛋白" },
  month3: { label: "孕3月", group: "first", profile: "balanced", focus: "孕3月：清淡均衡 + 蛋白质" },
  month4: { label: "孕4月", group: "second", profile: "iron", focus: "孕4月：补铁 + 蛋白质 + 维 C" },
  month5: { label: "孕5月", group: "second", profile: "fiber", focus: "孕5月：钙 + 铁 + 纤维" },
  month6: { label: "孕6月", group: "third", profile: "balanced", focus: "孕6月：蛋白质 + DHA + 稳定能量" },
  month78: { label: "孕7-8月", group: "third", profile: "lowSugar", focus: "孕7-8月：控糖少油 + 消化舒适" },
  postpartum: { label: "产后哺乳期", group: "postpartum", profile: "balanced", focus: "产后哺乳期：补水 + 蛋白质 + 温和能量" }
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
  stage: "month4",
  profile: "iron",
  diet: "balanced",
  fishCount: 2,
  quickOnly: false,
  pantry: [],
  planSeed: 0
};

const stageSelect = document.querySelector("#stage");
const pantryInput = document.querySelector("#pantry");
const rerollPlan = document.querySelector("#rerollPlan");
const quickOnly = document.querySelector("#quickOnly");
const mealGrid = document.querySelector("#mealGrid");
const focusText = document.querySelector("#focusText");
const timeText = document.querySelector("#timeText");
const coverageText = document.querySelector("#coverageText");
const fishCount = document.querySelector("#fishCount");
const shoppingList = document.querySelector("#shoppingList");
const safeSearch = document.querySelector("#safeSearch");
const safetyList = document.querySelector("#safetyList");
const setupModal = document.querySelector("#setupModal");
const setupPantry = document.querySelector("#setupPantry");
const applySetup = document.querySelector("#applySetup");
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
  const month = getMonthProfile();
  const base = mealBank[month.group];
  const boost = getActiveBoosts();
  const pantryMode = state.pantry.length > 0;
  const sourceDays = pantryMode ? buildPantryDays() : buildStageDays();
  const days = sourceDays.map((plan) => ({
    ...plan,
    meals: plan.meals
      .map(prepareMeal)
      .filter((item) => !state.quickOnly || item.minutes <= 20)
  }));

  const meals = days.flatMap((plan) => plan.meals);
  renderedMeals = meals;

  focusText.textContent = pantryMode ? `${month.label} · 优先使用：${state.pantry.join("、")}` : `${month.label} · ${getActiveFocus()}`;
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
              <span class="meal-slot">${item.slot}</span>
              <div>
                <h3>${item.title}</h3>
                <span class="meal-meta">${item.minutes} 分钟${item.matches.length ? ` · 已有 ${item.matches.join("、")}` : ""}</span>
              </div>
            </div>
            ${item.missing.length && pantryMode ? `<span class="missing-note">还需：${item.missing.slice(0, 4).join("、")}</span>` : ""}
            <details class="meal-details">
              <summary>营养与说明</summary>
              <p>${item.description}</p>
              <div class="tags">
                ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
            </details>
            <div class="card-actions">
              <button class="action-button" type="button" data-add="${item.title}">清单</button>
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
  const pool = getAllMeals()
    .map((item) => ({ ...item, score: scoreMeal(item) }))
    .filter((item) => !state.quickOnly || item.minutes <= 20)
    .sort((a, b) => b.score - a.score || a.minutes - b.minutes);

  return buildDaysFromPool(pool);
}

function buildStageDays() {
  const month = getMonthProfile();
  const pool = getStageMeals(month.group)
    .map((item) => ({ ...item, stage: month.group, score: 0 }))
    .filter((item) => !state.quickOnly || item.minutes <= 20);

  return buildDaysFromPool(pool);
}

function buildDaysFromPool(pool) {
  const slots = ["早餐", "午餐", "加餐", "晚餐"];
  const used = new Set();
  return ["明天", "后天", "第 3 天"].map((label) => {
    const meals = slots.map((slot, slotIndex) => {
      const candidates = pool.filter((item) => item.slot === slot && !used.has(item.title));
      const fallback = pool.filter((item) => !used.has(item.title));
      const list = candidates.length ? candidates : fallback;
      const picked = list.length ? list[(state.planSeed + slotIndex) % list.length] : null;
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
    return getStageMeals(stage).map((item) => ({ ...item, stage }));
  });
}

function getStageMeals(stage) {
  return mealBank[stage].days
    .flatMap((dayPlan) => dayPlan.meals)
    .concat(extraMeals[stage] || [])
    .concat(bookletMeals[stage] || []);
}

function scoreMeal(item) {
  const matches = getMatches(item.ingredients, state.pantry).length;
  const profileMatches = item.ingredients.filter((ingredient) => getActiveBoosts().includes(ingredient)).length;
  const stageScore = item.stage === getMonthProfile().group ? 1.5 : 0;
  const quickScore = item.minutes <= 20 ? 0.5 : 0;
  return matches * 8 + profileMatches * 2 + stageScore + quickScore;
}

function getMonthProfile() {
  return monthProfiles[state.stage] || monthProfiles.month4;
}

function getActiveProfile() {
  return menuProfiles[state.profile] || menuProfiles[getMonthProfile().profile] || menuProfiles.balanced;
}

function getActiveBoosts() {
  return getActiveProfile().boosts;
}

function getActiveFocus() {
  if (state.profile === getMonthProfile().profile) {
    return getMonthProfile().focus;
  }
  return getActiveProfile().focus;
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
  state.profile = getMonthProfile().profile;
  state.planSeed = 0;
  renderMeals();
});

pantryInput.addEventListener("input", (event) => {
  state.pantry = parsePantry(event.target.value);
  state.planSeed = 0;
  renderMeals();
});

rerollPlan.addEventListener("click", () => {
  state.planSeed += 1;
  renderMeals();
});

quickOnly.addEventListener("change", (event) => {
  state.quickOnly = event.target.checked;
  state.planSeed = 0;
  renderMeals();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.diet = button.dataset.diet;
    state.planSeed = 0;
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

document.querySelectorAll(".option-grid").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest(".option-chip");
    if (!button) {
      return;
    }
    group.querySelectorAll(".option-chip").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
  });
});

document.querySelector("[data-options='stage']").addEventListener("click", (event) => {
  const button = event.target.closest("[data-stage]");
  if (!button) {
    return;
  }
  state.stage = button.dataset.stage;
  stageSelect.value = state.stage;
  state.profile = getMonthProfile().profile;
  const defaultProfileButton = document.querySelector(`[data-profile='${state.profile}']`);
  if (defaultProfileButton) {
    document.querySelectorAll("[data-profile]").forEach((item) => item.classList.remove("is-active"));
    defaultProfileButton.classList.add("is-active");
  }
});

document.querySelector("[data-options='profile']").addEventListener("click", (event) => {
  const button = event.target.closest("[data-profile]");
  if (!button) {
    return;
  }
  state.profile = button.dataset.profile;
});

applySetup.addEventListener("click", () => {
  state.pantry = parsePantry(setupPantry.value);
  pantryInput.value = setupPantry.value;
  state.planSeed = 0;
  setupModal.classList.add("is-hidden");
  renderMeals();
});

mealGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const swapButton = event.target.closest("[data-swap]");

  if (addButton) {
    const meal = renderedMeals.find((item) => item.title === addButton.dataset.add);
    const items = collectIngredients([meal], getActiveBoosts());
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
