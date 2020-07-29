import React, { useEffect } from "react";
import { useThemeUI } from "theme-ui";
import { Transition, useAnimation, motion } from "framer-motion";

interface LogoProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  transition?: Transition;
}

const Logo = ({ color = "white", width = "111px", height = "21px", transition }: LogoProps) => {
  const { theme } = useThemeUI();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      fill: (theme.colors![color] as string) ?? color,
      transition,
    });
  }, [color]);

  return (
    <svg width={width} height={height} viewBox="0 0 111 21" version="1.1">
      <title>Logo-Blanc</title>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <motion.g
          animate={controls}
          id="MENU-Vert"
          transform="translate(-27.000000, -22.000000)"
          fill={(theme.colors![color] as string) ?? color}
        >
          <g id="MENU">
            <g id="Logo">
              <g transform="translate(27.000000, 22.000000)">
                <g id="Group-22">
                  <path
                    d="M81.9655333,1.54046667 C84.2765333,1.45746667 85.8752,2.1108 86.7158667,3.47746667 C88.4485333,6.2928 86.4705333,11.4638 85.1832,13.8048 C83.1315333,17.5348 79.3798667,20.7188005 76.0085333,20.7188005 C75.2542,20.7191333 74.5192,20.5594667 73.8265333,20.2111333 C73.1488667,19.8704667 72.7498667,19.4101333 72.5258667,18.9258 C72.0075333,18.4831333 71.7405333,17.9241333 71.6632,17.4471333 C71.5795333,16.9321333 71.7042,16.4824667 71.9885333,16.2734667 C72.1982,16.1198 72.4685333,16.1121333 72.7495333,16.2528 C72.8338667,16.2948 72.8715333,16.3944667 72.8368667,16.4821333 C72.8102,16.5491333 72.3785333,17.6698 72.8145333,18.6948 C73.0515333,18.8858 73.3458667,19.0501333 73.7045333,19.1661333 C75.3702,19.7038 77.3782,18.8521333 79.3572,16.7674667 C82.8685333,13.0691333 85.0515333,7.04046667 83.9382,4.11913333 C83.5252,3.0368 82.6885333,2.4358 81.4518667,2.3328 C78.9095333,2.12513333 75.8375333,4.0758 74.7935333,5.53946667 C74.8915333,5.59146667 74.9752,5.65346667 75.0428667,5.72746667 C75.2815333,5.9888 75.3225333,6.3688 75.1648667,6.85746667 C75.1645333,6.8578 75.1645333,6.85846667 75.1645333,6.85846667 C75.1532,6.88413333 75.1448667,6.90046667 75.1332,6.9148 C75.1288667,6.9208 75.1228667,6.92446667 75.1178667,6.9298 C75.1075333,6.9398 75.0978667,6.9488 75.0862,6.95613333 L75.0862,6.95613333 L75.0642,6.96613333 C75.0525333,6.97146667 75.0405333,6.9758 75.0278667,6.97846667 C75.0195333,6.98046667 75.0108667,6.98046667 75.0022,6.98113333 L75.0022,6.98113333 L74.9788667,6.98346667 C74.7972,6.9698 74.6482,6.9308 74.5225333,6.8748 C73.4242,5.62146667 74.8625333,4.33346667 75.0478667,4.1768 C76.6278667,2.82246667 79.7858667,1.61746667 81.9655333,1.54046667 Z M23.5887,0.0065 C24.0963667,0.0385 24.5640333,0.158833333 24.9570333,0.3485 C25.3693667,0.504166667 25.7010333,0.7585 25.9150333,1.09783333 C26.1983667,1.54683333 26.2137,2.0785 25.9587,2.52783333 L25.9582,2.52870833 L25.9575333,2.53 L25.9571583,2.530875 L25.9560333,2.532625 L25.9553667,2.53383333 L25.9550333,2.53483333 C25.9543667,2.53516667 25.9543667,2.5355 25.9540333,2.53583333 L25.9540333,2.53616667 C25.9523667,2.5385 25.9510333,2.54116667 25.9493667,2.54416667 L25.9489083,2.54466667 L25.9487,2.5455 L25.948075,2.546 C25.9473667,2.54716667 25.9473667,2.5475 25.9470333,2.54783333 L25.9463667,2.5495 L25.945575,2.55083333 C25.9447,2.5525 25.9447,2.55283333 25.9443667,2.5535 L25.9440333,2.55404167 L25.9432,2.55566667 C25.9427,2.5565 25.9427,2.55716667 25.9423667,2.5575 L25.9409917,2.55966667 C25.9403667,2.56083333 25.9400333,2.5615 25.9397,2.56183333 C25.5480333,3.2105 24.8750333,3.67483333 24.1823667,3.7735 C23.6027,3.8555 23.0627,3.68383333 22.6180333,3.2745 C22.6123667,3.2695 22.6097,3.26316667 22.6050333,3.2575 C22.5987,3.25016667 22.5927,3.2425 22.5870333,3.23416667 C22.5813667,3.22383333 22.5767,3.21283333 22.5727,3.20183333 L22.5643667,3.17516667 L22.5643667,3.17516667 C22.5620333,3.16183333 22.5620333,3.14883333 22.5623667,3.1355 C22.5627,3.12916667 22.5607,3.12283333 22.5613667,3.11616667 C22.6040333,2.8125 22.5020333,2.6875 22.4220333,2.61983333 C22.1073667,2.35483333 21.3660333,2.37216667 20.3563667,2.5625 C18.3047,4.7575 16.2817,8.56916667 15.3493667,13.1571667 C14.7730333,15.9938333 14.8757,19.3158333 16.4637,19.9061667 C18.4053667,20.6291667 21.0520333,17.6838333 23.0763667,12.5095 C24.3297,9.3065 24.9987,6.26283333 24.9110333,4.15916667 C24.9080333,4.09316667 24.9413667,4.03083333 24.9980333,3.9965 C25.0543667,3.96216667 25.1250333,3.96116667 25.1820333,3.99416667 C26.2507,4.60883333 26.4480333,6.5935 25.7513667,9.7325 C24.7227,14.3741667 22.3953667,18.2761667 19.6780333,19.9161667 C18.7957,20.4481667 17.9033667,20.7188333 17.0500333,20.7188333 C16.7017,20.7188333 16.3597,20.6738333 16.0273667,20.5828333 C14.6000333,20.1925 12.8630333,18.9305 12.6923667,15.1348333 C12.4240333,9.18416667 15.0940333,5.3635 16.9087,3.47483333 C16.1170333,3.7175 15.2863667,3.9835 14.4443667,4.25316667 C10.7273667,5.44383333 6.53936667,6.78516667 3.72536667,6.7855 C3.5757,6.7855 3.4307,6.78183333 3.28903333,6.77383333 C2.10803333,6.70883333 1.1407,6.01216667 0.702366667,4.91083333 C0.603366667,4.66316667 0.537366667,4.4085 0.503033333,4.15283333 C0.289366667,3.98916667 0.132033333,3.79683333 0.0537,3.57283333 C-0.167633333,2.93916667 0.297366667,2.2165 1.43603333,1.42516667 C1.5127,1.37216667 1.61636667,1.38516667 1.67703333,1.4555 C1.73736667,1.52616667 1.73503333,1.63083333 1.67103333,1.6985 C1.07303333,2.3305 0.785366667,3.14216667 0.846366667,3.94616667 C1.63603333,4.4435 3.25836667,4.6805 4.68703333,4.58683333 C8.4267,4.34283333 12.3373667,3.42083333 15.4800333,2.68016667 C16.6250333,2.41016667 17.6730333,2.16316667 18.6003667,1.9735 C20.5213667,0.529166667 22.4000333,-0.0698333333 23.5887,0.0065 Z M85.5958667,3.71513333 C87.2148667,10.6281333 81.7192,16.9278 80.5562,18.3168 C86.5328667,13.9558 87.7415333,3.80846667 85.5958667,3.71513333 Z M78.1127,3.9371 C78.9033667,2.45243333 80.4700333,4.6411 80.1520333,5.38376667 C79.8337,6.12643333 79.5343667,6.6431 79.1363667,7.45476667 C77.3297,11.1397667 75.7690333,14.3224333 75.7227,17.9887667 C75.7217,18.0401 75.6980333,18.0884333 75.6580333,18.1197667 C75.6333667,18.1397667 75.6040333,18.1514333 75.5737,18.1541 C75.5557,18.1557667 75.5373667,18.1541 75.5193667,18.1494333 C74.9613667,17.9967667 74.3257,17.2571 74.1003667,16.7257667 C73.0697,14.2907667 75.9150333,8.46943333 77.4433667,5.34176667 C77.7390333,4.73643333 77.7443667,4.62876667 78.1127,3.9371 Z M90.9313667,7.65223333 C92.1757,7.7809 93.3970333,8.73656667 93.5907,10.7305667 C93.6583667,11.4269 93.5947,12.1665667 93.4193667,12.8889 C94.3741188,12.7419208 95.3682512,12.3493777 96.3146844,11.6342686 C96.7619703,10.360641 97.2840188,9.23990601 97.4999667,8.90383333 C98.4649667,7.40116667 99.7843,9.3085 99.5156333,10.1588333 C100.335967,9.11583333 101.2653,8.3115 102.1853,7.94383333 C102.467633,7.83083333 103.4403,7.49383333 104.089967,7.89983333 C104.381633,8.08183333 104.5513,8.38916667 104.580967,8.78883333 C104.6283,9.43183333 104.2803,10.4288333 103.810967,11.5238333 C104.5243,10.4901667 105.386967,9.6565 106.424967,9.2415 C107.0283,9.0005 107.8583,8.86583333 108.379633,9.2115 C108.575633,9.34116667 108.8113,9.60016667 108.8213,10.0965 C108.840967,11.1055 108.020967,12.5791667 107.297633,13.8791667 L107.085558,14.2614937 C106.559523,15.2151055 106.088398,16.1295 106.206633,16.4945 C106.2243,16.5485 106.253633,16.5818333 106.305633,16.6061667 C106.6463,16.7638333 107.873633,15.6181667 109.0303,14.0418333 C109.534633,13.2838333 109.990633,12.5008333 110.363967,11.8595 L110.5793,11.4905 C110.6283,11.4068333 110.734633,11.3768333 110.820633,11.4221667 C110.9063,11.4678333 110.9413,11.5725 110.8983,11.6605 C110.5503,12.3895 110.0413,13.2295 109.477967,14.0231667 C108.385967,15.7075 107.063967,17.3111667 105.7153,17.3111667 C105.671633,17.3111667 105.627967,17.3095 105.584633,17.3061667 C105.093967,17.2678333 104.755633,17.0855 104.578967,16.7638333 C104.085633,15.8658333 104.996633,14.1481667 105.877633,12.4868333 C106.395967,11.5098333 107.0413,10.2938333 106.863633,10.0141667 C106.832967,9.96583333 106.7413,9.95983333 106.669967,9.9635 C105.454967,10.0231667 103.302967,12.8775 102.290967,15.5455 C102.146967,15.9711667 102.017967,16.3915 101.903633,16.7961667 L101.903633,16.8705 C101.903633,16.9218333 101.881633,16.9708333 101.843633,17.0051667 C101.809967,17.0351667 101.766633,17.0515 101.7223,17.0515 C101.715967,17.0515 101.709967,17.0515 101.7033,17.0508333 C101.1763,16.9955 100.802633,16.7828333 100.5923,16.4188333 C99.9833,15.3631667 100.9183,13.2671667 101.7433,11.4181667 C102.247633,10.2875 102.8193,9.00616667 102.6153,8.71383333 C102.605633,8.6995 102.573967,8.65683333 102.4333,8.66516667 C100.689633,8.7815 97.6609667,13.4918333 97.2069667,16.7948333 C97.1989667,16.8528333 97.1623,16.8985 97.1146333,16.9255 C97.1069667,16.9325 97.0993,16.9395 97.0899667,16.9455 C97.0603,16.9645 97.0263,16.9745 96.9916333,16.9745 C96.9713,16.9745 96.9499667,16.9705 96.9303,16.9635 C96.3053,16.7371667 95.8559667,16.3198333 95.6576333,15.7011667 C95.4072219,14.9210267 95.6981001,13.5282247 96.1246701,12.19728 C95.1850108,12.8362937 94.2134475,13.2047391 93.2877,13.3645667 C92.9780333,14.3525667 92.4633667,15.2812333 91.7993667,15.9872333 C91.1083667,16.7222333 90.3380333,17.1092333 89.5887,17.1092333 C89.4343667,17.1092333 89.2810333,17.0929 89.1293667,17.0595667 C88.2983667,16.8775667 87.7020333,16.3002333 87.4047,15.3895667 C86.9920333,14.1252333 87.2173667,12.3639 87.9407,10.7579 C87.8733667,10.4995667 87.8383667,10.2302333 87.8383667,9.9539 C87.8383667,8.5149 89.0333667,7.6859 90.2137,7.61023333 C90.4520333,7.59523333 90.6937,7.60856667 90.9313667,7.65223333 Z M33.8945333,3.30556667 C33.4802,4.09523333 33.1042,4.63656667 32.5942,5.49423333 C30.5178667,8.9899 28.6995333,12.0592333 28.1255333,15.5829 C28.0958667,15.9479 28.1335333,16.2299 28.3032,16.2965667 C28.3312,16.3072333 28.3628667,16.3129 28.3965333,16.3129 C29.0228667,16.3132333 30.6182,14.5079 31.7218667,12.7802333 C31.9074439,12.4750883 32.0721637,12.1905662 32.2091483,11.9447303 C32.6763946,10.547216 33.2676621,9.26661109 33.5013,8.90326667 C34.5046333,7.34126667 35.8916333,9.4656 35.4776333,10.2552667 C35.1183,10.9412667 33.6939667,12.9709333 33.2836333,15.5842667 C33.2496333,15.9469333 33.2826333,16.2296 33.4529667,16.2966 C33.9653,16.4969333 35.5089667,14.8209333 36.6593,13.1046 C37.0631267,12.4697051 37.3855695,11.9034958 37.5624494,11.5697762 C37.8349682,10.3463565 38.1764003,9.28174617 38.3376,8.94196667 C39.1332667,7.2643 40.7806,9.19396667 40.4709333,10.0299667 C40.1832667,10.8073 38.8819333,13.2676333 38.9772667,16.1603 C38.9926,16.1923 39.0089333,16.2213 39.0269333,16.2443 C39.0636,16.2913 39.0939333,16.2996333 39.1162667,16.3016333 C39.6609333,16.3533 40.7919333,14.5169667 41.8529333,12.6583 C41.8102667,12.5539667 41.7746,12.4343 41.7509333,12.2943 C41.6112667,11.4809667 41.6782667,10.2656333 42.7902667,9.0953 C43.1269333,8.74063333 43.5666,8.6203 43.8372667,8.80863333 C43.9582667,8.89263333 44.2036,9.1593 43.8782667,9.8213 L43.8779333,9.82196667 L43.8776,9.82263333 C43.7209333,10.1359667 43.5589333,10.4643 43.3932667,10.8006333 C43.0676,11.4623 42.7312667,12.1443 42.3896,12.8039667 C42.4549333,12.8563 42.5296,12.8946333 42.6159333,12.9153 C43.2275513,13.0616882 44.2850491,12.4105633 44.9189677,11.6908175 C45.7082021,10.3133311 47.0545576,9.09037517 48.7417,8.64246667 C49.6023667,8.4138 50.2967,8.53146667 50.6963667,8.97313333 C51.0620333,9.37713333 51.1317,10.0141333 50.8823667,10.6774667 C50.6343667,11.3378 50.0170333,12.1104667 48.9900333,12.6414667 C48.4380333,12.9724667 47.7950333,13.2008 47.0913667,13.2291333 C46.7657,14.0184667 46.5927,14.7998 46.6247,15.4164667 C46.6450333,15.7988 46.7573667,16.2928 47.1800333,16.4744667 C47.5983667,16.6541333 49.2747,16.3694667 51.0677,14.3944667 C51.4693667,13.9434667 51.8547,13.4421333 52.2110333,12.9008 C52.4853667,12.4808 52.7560333,12.0151333 53.0200333,11.4998 C53.0657,11.4108 53.1740333,11.3751333 53.2633667,11.4204667 C53.3523667,11.4658 53.3880333,11.5744667 53.3433667,11.6641333 C51.6963667,14.9454667 49.0027,17.2294667 46.9197,17.2294667 C46.6977,17.2294667 46.4827,17.2038 46.2767,17.1501333 C44.9220333,16.7988 44.1427,15.7771333 44.1383521,14.3471333 C44.1367897,13.7825061 44.261583,13.1738822 44.4959824,12.5696676 C43.9658045,12.9786167 43.3372807,13.2986333 42.8026,13.2986333 C42.7092667,13.2986333 42.6186,13.2889667 42.5316,13.2683 C42.4326,13.2443 42.3239333,13.2019667 42.2192667,13.1303 C41.1736,15.1113 40.0842667,16.8123 39.0849333,16.9949667 C39.0222667,17.0063 38.9609333,17.0116333 38.9002667,17.0116333 C38.8916,17.0116333 38.8826,17.0093 38.8736,17.0093 L38.8652667,17.0113 C38.8446,17.0139667 38.8232667,17.0133 38.8026,17.0086333 C38.7896,17.0053 38.7769333,17.0013 38.7639333,16.9979667 C38.6722667,16.9843 38.5836,16.9586333 38.4972667,16.9179667 C37.9979333,16.7386333 37.6099333,16.4106333 37.3792667,15.9193 C37.0586325,15.235763 37.1272445,13.9775347 37.3378806,12.7086176 C37.2469523,12.858029 37.1491333,13.0121185 37.0466333,13.1686 C36.1159667,14.6592667 34.6119667,16.7509333 33.3903,16.9612667 C33.3203,16.9732667 33.2523,16.9792667 33.1856333,16.9792667 C33.1376333,16.9792667 33.0916333,16.9726 33.0449667,16.9662667 C33.0283,16.9712667 33.0106333,16.9742667 32.9929667,16.9742667 C32.9723,16.9742667 32.9513,16.9706 32.9313,16.9632667 C32.3063,16.7369333 31.8573,16.3196 31.6586333,15.7009333 C31.4799229,15.1438234 31.5771733,14.2742422 31.8027287,13.3378553 C30.8655923,14.8357658 29.4152083,16.8308416 28.2332,17.0342333 C28.1645333,17.0462333 28.0975333,17.0519 28.0322,17.0519 C27.7785333,17.0519 27.5515333,16.9609 27.3535333,16.7849 C26.9325333,16.5409 26.6318667,16.1789 26.4605333,15.7012333 C25.4555333,12.8992333 29.0995333,6.7459 31.0572,3.44023333 C31.4362,2.80056667 31.4498667,2.6819 31.9175333,1.9539 C32.9212,0.391566667 34.3082,2.5159 33.8945333,3.30556667 Z M66.5198667,4.42193333 C66.7048667,4.7326 66.8198667,5.06893333 66.8672,5.41226667 C67.0258667,6.2106 66.7442,7.0656 66.0622,7.7406 C65.8862,7.9146 65.7078667,8.07793333 65.5278667,8.2316 C64.3462,9.2416 63.0438667,9.8976 61.9592,10.4372667 C62.1088667,10.7436 62.2842,11.0406 62.4835333,11.3242667 C62.6308667,11.5332667 62.7755333,11.7416 62.9192,11.9479333 C63.4242,12.6746 63.9175333,13.3846 64.4598667,14.0486 C65.5851792,13.3957875 66.6117612,12.6433656 67.066926,12.245619 L67.1502,12.1709333 C67.1505333,12.1706 67.1508667,12.1702667 67.1515333,12.1699333 C67.2252,12.1019333 67.3398667,12.1066 67.4075333,12.1799333 C67.4395333,12.2146 67.4555333,12.2589333 67.4555333,12.3029333 C67.4555333,12.3519333 67.4362,12.4002667 67.3975333,12.4362667 C67.3418667,12.4872667 67.2745333,12.5462667 67.1978667,12.6112667 C66.7155333,13.0159333 65.7875333,13.7096 64.7482,14.3916 C65.4218667,15.1679333 66.1802,15.8712667 67.1285333,16.4502667 C67.1845333,16.4846 67.2152,16.5442667 67.2152,16.6052667 C67.2155333,16.6376 67.2068667,16.6699333 67.1888667,16.6996 C67.1548667,16.7556 67.0952,16.7862667 67.0342,16.7862667 C67.0018667,16.7862667 66.9692,16.7779333 66.9398667,16.7599333 C66.3328667,16.3892667 65.2628667,15.7029333 64.1005333,14.8056 C63.1378667,15.4032667 62.1415333,15.9416 61.3548667,16.2026 C59.4938667,16.8196 58.0345333,16.4929333 57.4508667,15.3289333 C56.8578667,14.1472667 57.3992,12.5662667 58.7095333,11.6512667 C59.1762,11.3252667 59.6555333,11.0526 60.1485333,10.8019333 C59.1342,9.18926667 58.7758667,7.4026 59.2142,5.95193333 C59.6092,4.64226667 60.5802,3.71793333 62.0212,3.2786 C64.4018667,2.55293333 65.9058667,3.39326667 66.5198667,4.42193333 Z M17.3737,3.84483333 C16.1240648,4.94827987 12.8031919,10.6036362 13.4427017,16.1559862 L13.4840333,16.4761667 L13.4840333,16.4761667 C13.3653667,14.8178333 14.6560333,8.57516667 17.3737,3.84483333 Z M89.2023667,12.5722333 C88.7480333,13.6642333 88.5923667,14.7805667 88.7677,15.5179 C88.8803667,15.9909 89.1163667,16.2719 89.4693667,16.3529 C90.1300333,16.5035667 90.8497,16.2125667 91.4957,15.5319 C92.0230333,14.9755667 92.4417,14.2409 92.7157,13.4375667 C91.4783667,13.5409 90.3567,13.2769 89.5450333,12.7985667 C89.4250333,12.7275667 89.3107,12.6522333 89.2023667,12.5722333 Z M32.5999667,15.9179333 C32.6649667,14.0442667 34.6786333,10.4262667 34.7323,10.1032667 C34.6353,8.68326667 32.0186333,15.0026 32.5999667,15.9179333 Z M57.8828667,13.8859333 C57.7945333,14.1386 57.7812,14.4182667 57.8358667,14.6879333 C57.8888667,14.9576 58.0108667,15.2259333 58.2078667,15.4379333 C58.4025333,15.6522667 58.6688667,15.7956 58.9395333,15.8576 C59.2125333,15.9239333 59.4898667,15.8959333 59.7442,15.8242667 C59.4868667,15.7449333 59.2438667,15.6922667 59.0282,15.5886 C58.8125333,15.4879333 58.6272,15.3569333 58.4742,15.1919333 C58.3218667,15.0269333 58.2005333,14.8282667 58.1058667,14.6069333 C58.0102,14.3849333 57.9445333,14.1456 57.8828667,13.8859333 Z M107.4123,10.0168333 C106.548967,12.6878333 104.489967,15.2608333 105.071633,15.8855 C105.5453,14.3135 108.440967,9.86683333 107.4123,10.0168333 Z M48.4213667,9.29446667 C47.0860333,9.21446667 43.6293667,13.0911333 44.9753667,15.7851333 C44.6953667,13.5434667 46.3913667,10.5394667 48.4213667,9.29446667 Z M103.026633,9.14583333 C102.396967,11.8815 100.268967,15.1105 101.0443,15.7565 C101.0103,14.5675 104.3613,8.94016667 103.026633,9.14583333 Z M60.4438667,11.2409333 C60.1678667,11.4119333 59.9318667,11.5859333 59.7488667,11.7712667 C59.1685333,12.3599333 58.9702,13.3776 59.2875333,14.1386 C59.5875333,14.8569333 60.2855333,15.2536 61.2542,15.2552667 L61.2572,15.2552667 C61.9148667,15.2552667 62.7948667,14.9252667 63.6792,14.4746 C62.6758667,13.6696 61.6375333,12.7216 60.7925333,11.6939333 C60.6705333,11.5456 60.5542,11.3942667 60.4438667,11.2409333 Z M88.8050333,10.1409 C88.5420333,10.7255667 87.1563667,13.4732333 87.7597,15.2395667 C87.5993667,12.1599 89.7637,10.0775667 88.8050333,10.1409 Z M97.8466333,9.1015 C97.7508884,9.32754975 97.2070627,10.4102135 96.7303544,11.6961438 L96.7513667,11.7295667 L96.7045554,11.7661187 C96.2909633,12.89413 95.9355389,14.1678335 95.9803,15.1535 C96.4873,12.3925 98.4926333,9.07783333 97.8466333,9.1015 Z M38.7959333,9.2953 C38.3346,10.5446333 37.4822667,13.3656333 37.6762667,15.1316333 C38.0206,15.2609667 37.8329333,14.2449667 38.3082667,12.2139667 C38.7746,10.2213 39.3346,9.18763333 38.7959333,9.2953 Z M78.4240333,4.4581 C78.1657,5.1041 74.2243667,12.5987667 74.5457,15.0864333 C75.0763667,13.1161 76.5400333,8.93476667 78.6780333,5.11943333 C78.7843667,4.92976667 78.4240333,4.4581 78.4240333,4.4581 Z M32.4238667,2.0159 C32.1282,2.48056667 27.1345333,10.7599 26.9625333,13.3872333 C27.6515333,11.4705667 28.4218667,10.0355667 29.6112,7.70156667 C31.3125333,4.36323333 33.1005333,1.7359 32.4238667,2.0159 Z M90.5320333,8.00156667 C89.4977,8.04423333 88.4290333,8.72223333 88.3620333,9.93756667 C88.4267,9.8269 88.5390333,9.6439 88.6287,9.47223333 C88.8963667,8.9629 89.6557,10.0722333 89.6557,10.0722333 C90.0777,10.6105667 90.0927,11.0045667 89.7830333,11.4582333 C89.6300333,11.6819 89.5970333,11.7559 89.4727,11.9935667 C89.5743667,12.0705667 89.6820333,12.1445667 89.7960333,12.2152333 C90.6133667,12.7202333 91.6940333,13.0139 92.8620333,12.9475667 C93.0513667,12.2189 93.1230333,11.4542333 93.0520333,10.7275667 C92.8893667,9.05423333 91.9230333,8.20456667 90.8770333,8.01023333 C90.7603667,7.99956667 90.6450333,7.9969 90.5320333,8.00156667 Z M50.4430333,9.6838 C50.3010333,9.6838 50.0717,9.75013333 49.7447,9.93313333 C48.7163667,10.5084667 47.8327,11.6461333 47.2703667,12.8248 C47.8890333,12.7204667 48.4177,12.5344667 48.8603667,12.3014667 C49.7263667,11.7671333 50.3410333,10.9584667 50.5670333,10.3361333 C50.6960333,9.98013333 50.6597,9.78413333 50.5893667,9.72413333 C50.5597,9.69913333 50.5117,9.6838 50.4430333,9.6838 Z M43.0539333,9.34396667 C42.2482667,10.1919667 41.9299333,11.1569667 42.1052667,12.2139667 C42.2382667,11.9789667 42.3692667,11.7456333 42.4969333,11.5183 C42.8442667,10.8999667 43.2036,10.2609667 43.5549333,9.6573 C43.7059333,9.34763333 43.6999333,9.15463333 43.6302667,9.10596667 C43.5446,9.04563333 43.2892667,9.09596667 43.0539333,9.34396667 Z M60.6398667,4.5826 C60.4492,4.73693333 60.3072,4.9466 60.1828667,5.15693333 C60.0578667,5.36926667 59.9565333,5.5946 59.8678667,5.82526667 C59.6932,6.28726667 59.5968667,6.7796 59.5722,7.2766 C59.5535333,7.7736 59.6095333,8.2756 59.7558667,8.75126667 C59.9072,9.2256 60.1542,9.6636 60.4675333,10.0339333 C60.2818667,9.58226667 60.1228667,9.1396 60.0298667,8.68093333 C59.9475333,8.22126667 59.9108667,7.75726667 59.9342,7.29326667 C59.9502,6.82893333 60.0248667,6.36526667 60.1368667,5.90893333 C60.1988667,5.68293333 60.2598667,5.45393333 60.3428667,5.23226667 C60.4205333,5.00726667 60.5112,4.78826667 60.6398667,4.5826 Z M64.3818667,3.86193333 C64.0925333,3.86193333 63.7765333,3.90893333 63.4345333,4.0156 C62.6048667,4.27526667 61.9275333,5.01826667 61.5762,6.05393333 C61.1572,7.28793333 61.2432,8.72326667 61.7778667,10.0339333 C62.9822,9.4826 64.2125333,8.89226667 65.3538667,7.90226667 C65.5068667,7.7696 65.6578667,7.63026667 65.8048667,7.4846 L65.8068667,7.4826 C66.3372,6.95826667 66.5858667,6.2706 66.5285333,5.5946 C66.4942,5.34026667 66.4082,5.09226667 66.2688667,4.86026667 C65.9602,4.34726667 65.3132,3.86193333 64.3818667,3.86193333 Z M36.0286333,7.08593333 C36.5969667,7.46226667 36.8443,8.08893333 36.5819667,8.48593333 C36.3193,8.88293333 35.6453,8.89993333 35.0769667,8.52393333 C34.5083,8.1476 34.2609667,7.52093333 34.5236333,7.12393333 C34.7859667,6.72693333 35.4599667,6.70993333 36.0286333,7.08593333 Z M23.5697,0.550833333 C22.9010333,0.6165 22.1527,0.982833333 21.3823667,1.6005 C22.0377,1.5995 22.5140333,1.71683333 22.7767,1.99883333 C23.0023667,2.24116667 23.0627,2.5875 22.9587,3.02783333 C24.1047,3.42883333 25.1420333,3.1815 25.6290333,2.37483333 C25.6307,2.3725 25.6307,2.37216667 25.6307,2.37183333 C25.8087,2.07516667 25.8150333,1.7505 25.6487,1.43216667 C25.4867,1.1225 25.1813667,0.860166667 24.7880333,0.6725 C24.4413667,0.549833333 24.0257,0.5055 23.5697,0.550833333 Z"
                    id="Combined-Shape"
                  />
                </g>
              </g>
            </g>
          </g>
        </motion.g>
      </g>
    </svg>
  );
};

export default Logo;