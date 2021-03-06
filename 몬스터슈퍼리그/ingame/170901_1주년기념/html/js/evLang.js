﻿/****************************************

  *monsterSuperLeague eventLanguageSet - ui.js*

    [language set]
      langKo(한국어)
      langEn(영어)
      langJa(일본어)
      langTh(태국어)
      langHans(중국어 - 간체)
      langHant(중국어 - 번체)

 ****************************************/
function evLang (langType) {
  var langKo = {        // 한국어
    questTitle: [
      '에너지 50개 사용',
      '은빛정령의 숲에서<br>코코마루(나무) 1회<br>포획 성공',
      '루나 협곡에서<br>캔트라(불) 1회 <br>포획 성공',
      '노래 호수에서<br>세이렌(물) 1회 <br>포획 성공',
      '신기루 유적에서<br>프랑(나무) 1회 <br>포획 성공',
      '파고스 해안에서<br>모나(물) 1회 <br>포획 성공',
      '해저 동굴에서<br>베스(나무) 1회 <br>포획 성공',
      '마그마 대지에서<br>만드라고라(불) 1회 <br>포획 성공',
      '별의 성소에서<br>코스모(빛) 1회 <br>포획 성공',
      '하늘 폭포에서<br>셀리(물) 1회 <br>포획 성공',
      '잠자는 고대 도시에서<br>몽크(불) 1회 <br>포획 성공',
      '눈보라 설원에서<br>웬디고(물) 1회 <br>포획 성공',
      '오로라 대지에서<br>라디스(나무) 1회 <br>포획 성공',
      '',
      '',
      ''
    ],
    rewardTitle: [
      '에너지 20개',
      '에너지 40개',
      '에너지 60개',
      '에너지 80개',
      '에너지 100개',
      '50,000 골드',
      '80,000 골드',
      '100,000 골드',
      '120,000 골드',
      '150,000 골드',
      '(상급)<br>비밀의 알 1개',
      '(상급)<br>비밀의 알 1개',
      '(상급)<br>비밀의 알 1개',
      '',
      '',
      ''
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>일반미션은 총 13개이고 각 미션 달성마다 글자와 보상을 받으실 수 있습니다.</li>'+
      '<li><span class="bu"></span>각 단어 달성 시 추가 보상이 지급되며, 모든 단어 완성 시 최종 보상을 받으실 수 있습니다. </li>'+
      '<li><span class="bu"></span>계정 당 1회만 참여 가능하며, 보상은 우편함으로 지급됩니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      'Use Energy x50',
      'Capture of (Wood)Cocomaru x1<br>in Phantom Forest',
      'Capture of (Fire)Candling x1 <br>n Lunar Valley',
      'Capture of (Water)Seiren x1 <br>n Aria Lake',
      'Capture of (Wood)Seedler x1<br>in Mirage Ruins',
      'Capture of (Water)Mona x1 <br>n Pagos Coast',
      'Capture of (Wood)Beth x1<br>in Seabed Caves',
      'Capture of (Fire)Mandragora x1<br>in Magma Crags',
      'Capture of (Light)Cosmo x1<br>in Star Sanctuary',
      'Capture of (Water)Shellie x1<br>in Sky Falls',
      'Capture of (Fire)Monkiki x1<br>in Slumbering City',
      'Capture of (Water)Wendigo x1<br>in Glacial Plains',
      'Capture of (Wood)Radis x1<br>in Aurora Plateau',
      '',
      '',
      ''
    ],
    rewardTitle: [
      'Energy x20',
      'Energy x40',
      'Energy x60',
      'Energy x80',
      'Energy x100',
      '50,000 Gold',
      '80,000 Gold',
      '100,000 Gold',
      '120,000 Gold',
      '150,000 Gold',
      '(High)<br>Secret Egg x1',
      '(High)<br>Secret Egg x1',
      '(High)<br>Secret Egg x1',
      '',
      '',
      ''
    ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu"></span>You can receive a letter and reward for every misson and there are total 13 missions.</li>'+
    '<li><span class="bu"></span>Reward will be given when completing each syllable and final reward will be given when completing a word.</li>'+
    '<li><span class="bu"></span>You will be able to participate only once per account and rewards will be deliverd through mailbox.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        'エネルギー50個使用',
        '精霊の森で ココマル(木)<br>1回捕獲成功',
        'ルナ峡谷で キャンドラ(火)<br>1回捕獲成功',
        'アリア湖で セイレーン(水)<br>1回捕獲成功',
        '蜃気楼の遺跡で フラン(木)<br>1回捕獲成功',
        'パゴス海岸で モナ(水)<br>1回捕獲成功',
        '海底洞窟で ベス(木)<br>1回捕獲成功',
        'マグマの大地で マンドラゴラ(火)<br>1回捕獲成功',
        '星の聖域で コスモ(光)<br>1回捕獲成功',
        '天空の滝で シェリー(水)<br>1回捕獲成功',
        '眠れる古代都市で モンク(火)<br>1回捕獲成功',
        '吹雪の雪原で ウェンディゴ(水)<br>1回捕獲成功',
        'オーロラ高原で ラディス(木)<br>1回捕獲成功',
        '',
        '',
        ''
      ],
      rewardTitle: [
        'エネルギー20個',
        'エネルギー40個',
        'エネルギー60個',
        'エネルギー80個',
        'エネルギー100個',
        '50,000ゴールド',
        '80,000ゴールド',
        '100,000ゴールド',
        '120,000ゴールド',
        '150,000ゴールド',
        '(上級)<br>秘密の卵1個',
        '(上級)<br>秘密の卵1個',
        '(上級)<br>秘密の卵1個',
        '',
        '',
        ''
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>ミッションは全て13個です。各ミッションをクリアする度に文字と報酬がもらえます。</li>'+
        '<li><span class="bu"></span>単語を完成する度に追加報酬が得られ、全ての単語を完成することで最終報酬がもらえます。</li>'+
        '<li><span class="bu"></span>アカウントにつき1回のみ参加できます。報酬は受信箱に届きます。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受け取り済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'ใช้ 50 พลังงาน',
        'จับโคโคมารุ (ไม้) x1<br>ในแผนที่พงไพรแห่งวิญญาณสำเร็จ',
        'จับแคนเดิลลิ่ง (ไฟ) x1<br>ในแผนที่หุบเขาลูนาร์สำเร็จ',
        'จับเซเรน (น้ำ) x1<br>ในแผนที่ทะเลสาบเสนาะโสตสำเร็จ',
        'จับซีดเลอร์ (ไม้) x1<br>ในแผนที่ซากปรักหักพังลวงตาสำเร็จ',
        'จับโมน่า (ไม้) x1<br>ในแผนที่ชายฝั่งปากอสสำเร็จ',
        'จับเบ็ธ (ไม้) x1<br>ในแผนที่ถ้ำใต้ทะเลสำเร็จ',
        'จับแมนดราโกร่า (ไฟ) x1<br>ในแผนที่หน้าผาหินแม็กม่าสำเร็จ',
        'จับคอสโม่ (แสง) x1<br>ในแผนที่วิหารแห่งดวงดาวสำเร็จ',
        'จับเชลลี่ (น้ำ) x1<br>ในแผนที่น้ำตกระฟ้าสำเร็จ',
        'จับมองกิกิ (ไฟ) x1<br>ในแผนที่เมืองนิทราสำเร็จ',
        'จับเวนดิโก้ (น้ำ) x1<br>ในแผนที่ทุ่งน้ำแข็งสำเร็จ',
        'จับราดิส (ไม้) x1<br>ในแผนที่ที่ราบแสงอรุณสำเร็จ',
        '',
        '',
        ''
      ],
      rewardTitle: [
        '20 พลังงาน',
        '40 พลังงาน',
        '60 พลังงาน',
        '80 พลังงาน',
        '100 พลังงาน',
        '50,000 ทอง',
        '80,000 ทอง',
        '100,000 ทอง',
        '120,000 ทอง',
        '150,000 ทอง',
        '(สูง)<br>ไข่แห่งความลับ 1 ชิ้น',
        '(สูง)<br>ไข่แห่งความลับ 1 ชิ้น',
        '(สูง)<br>ไข่แห่งความลับ 1 ชิ้น',
        '',
        '',
        ''
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>สามารถรับของรางวัลตัวอักษรในทุกภารกิจได้ทั้งหมด 13 ภารกิจ</li>'+
        '<li><span class="bu"></span>รางวัลจะถูกส่งเมื่อเสร็จคำในแต่ละพยางค์ และรางวัลสุดท้ายจะส่งให้เมื่อสำเร็จเป็นคำ</li>'+
        '<li><span class="bu"></span>หนึ่งบัญชีสามารถเข้าร่วมกิจกรรมได้หนึ่งครั้ง และของรางวัลจะถูกส่งทางกล่องจดหมาย</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '使用能量50个',
        '在幻影森林<br>捕获椰子太郎成功1次',
        '在月之山谷<br>捕获小盏芯成功1次',
        '在歌咏之湖<br>捕获塞壬成功1次',
        '在海市蜃楼遗迹<br>捕获小草种成功1次',
        '在帕戈海岸<br>捕获莫纳成功1次',
        '在海床洞窟<br>捕获贝丝成功1次',
        '在熔岩峭壁<br>捕获魔力果成功1次',
        '在星之圣殿<br>捕获星之子成功1次',
        '在天空瀑布<br>捕获小贝壳成功1次',
        '在沉睡之城<br>捕获小猩猩成功1次',
        '在冰河平原<br>捕获雪怪成功1次',
        '在极光高原<br>捕获拉底斯成功1次',
        '',
        '',
        ''
      ],
      rewardTitle: [
        '能量20个',
        '能量40个',
        '能量60个',
        '能量80个',
        '能量100个',
        '50,000金币',
        '80,000金币',
        '100,000金币',
        '120,000金币',
        '150,000金币',
        '(高级)<br>神秘的蛋1个',
        '(高级)<br>神秘的蛋1个',
        '(高级)<br>神秘的蛋1个',
        '',
        '',
        ''
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>13个一般任务，完成每个任务即可领取相应字母和奖励。</li>'+
        '<li><span class="bu"></span>完成每个单字即可再次领取相应奖励，完成所有单字即可领取最终奖励。</li>'+
        '<li><span class="bu"></span>单一帐号仅限参与一次，奖励将发送至收件箱。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '使用能量50個',
      '在魅影森林<br>捕獲椰子丸成功1次',
      '在月亮谷<br>捕獲蠟燭精成功1次',
      '在詠嘆之湖<br>捕獲賽壬成功1次',
      '在海市蜃樓遺跡<br>捕獲小花苞成功1次',
      '在帕格斯海岸<br>捕獲莫那成功1次',
      '在海底洞窟<br>捕獲貝絲成功1次',
      '在岩漿大地<br>捕獲人面草成功1次',
      '在星辰聖殿<br>捕獲星星小子成功1次',
      '在天空瀑布<br>捕獲貝殼兵成功1次',
      '在沉眠古都<br>捕獲猴精成功1次',
      '在風暴雪原<br>捕獲雪怪成功1次',
      '在極光高原<br>捕獲輻光兵成功1次',
      '',
      '',
      ''
    ],
    rewardTitle: [
      '能量20個',
      '能量40個',
      '能量60個',
      '能量80個',
      '能量100個',
      '50,000金幣',
      '80,000金幣',
      '100,000金幣',
      '120,000金幣',
      '150,000金幣',
      '(高級)神秘卵1個',
      '(高級)神秘卵1個',
      '(高級)神秘卵1個',
      '',
      '',
      ''
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>13個一般任務，完成每個任務即可領取相應字母和獎勵。</li>'+
      '<li><span class="bu"></span>完成每個單字即可再次領取相應獎勵，完成所有單字即可領取最終獎勵。</li>'+
      '<li><span class="bu"></span>單一帳號僅限參與一次，獎勵將發送至收件匣。</li>'+
      '</ul>',
    btnName:[
    '<span class="btn_normal">領取獎勵</span>'+
    '<span class="btn_end">已領取</span>'
    ]
  }

  if (langType == 'ko'){
    return langKo
  }else if (langType == 'en'){
    return langEn
  }else if(langType == 'ja'){
    return langJa
  }else if(langType == 'th'){
    return langTh
  }else if (langType == 'zh-CN'){
    return langHans
  }else if (langType == 'zh-TW'){
    return langHant
  }else{
    return '존재하지 않는 언어입니다.'
  }
}