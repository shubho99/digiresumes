import {Component, EventEmitter, Inject, OnDestroy, Output, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';
import {Utils} from '../modules/core/utils/utils';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-not-found',
  template: `
    <div style="overflow: hidden">
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title' class="res-not-found-title">
        <span class="page-404 res-not-found-page-404">
          Page Not Found: Error 404
        </span>
        <br>
        <div class="demo cover res-not-found-demo">
          <div class="demo__content ">
            <div class="demo__img animated zoomInDown"></div>
          </div>
        </div>
        <span class="go-back res-not-found-go-back">
            you landed in a wrong page<br><a routerLink="">go back</a>
          </span>
      </div>
    </div>
  `,
  styles: [`
    /deep/ html {
      overflow: hidden;
    }

    .page-404 {
      text-transform: uppercase;
      position: absolute;
      top: -370%;
      right: 15%;
    }

    .go-back {
      text-transform: uppercase;
      position: absolute;
      bottom: -480%;
      right: 13%;
    }

    #stars {
      position: absolute;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: 398px 239px #FFF, 107px 1114px #FFF, 1445px 626px #FFF, 580px 1944px #FFF, 758px 753px #FFF, 1487px 1319px #FFF, 662px 443px #FFF, 8px 663px #FFF, 197px 1339px #FFF, 269px 727px #FFF, 50px 647px #FFF, 1833px 835px #FFF, 506px 1303px #FFF, 1018px 180px #FFF, 1650px 1085px #FFF, 656px 859px #FFF, 877px 805px #FFF, 1135px 1784px #FFF, 731px 312px #FFF, 1480px 768px #FFF, 132px 1457px #FFF, 1774px 891px #FFF, 1020px 52px #FFF, 1489px 1572px #FFF, 1449px 404px #FFF, 1976px 1232px #FFF, 1340px 310px #FFF, 31px 590px #FFF, 272px 440px #FFF, 519px 1275px #FFF, 1023px 1803px #FFF, 1003px 847px #FFF, 103px 995px #FFF, 69px 1502px #FFF, 546px 517px #FFF, 983px 1699px #FFF, 350px 507px #FFF, 1939px 1447px #FFF, 153px 15px #FFF, 585px 1326px #FFF, 968px 1814px #FFF, 1989px 1406px #FFF, 286px 156px #FFF, 1327px 1781px #FFF, 1165px 753px #FFF, 272px 1014px #FFF, 1992px 1301px #FFF, 1304px 562px #FFF, 191px 1017px #FFF, 1820px 864px #FFF, 1326px 953px #FFF, 1855px 110px #FFF, 137px 1294px #FFF, 812px 1768px #FFF, 1579px 1240px #FFF, 358px 137px #FFF, 1797px 1709px #FFF, 412px 340px #FFF, 567px 289px #FFF, 1432px 121px #FFF, 861px 1124px #FFF, 925px 1829px #FFF, 1473px 1220px #FFF, 983px 209px #FFF, 1288px 1680px #FFF, 23px 1908px #FFF, 358px 93px #FFF, 1816px 709px #FFF, 461px 964px #FFF, 365px 1442px #FFF, 1930px 1405px #FFF, 1176px 1444px #FFF, 1757px 1315px #FFF, 73px 1102px #FFF, 134px 704px #FFF, 1580px 1373px #FFF, 894px 122px #FFF, 1295px 1273px #FFF, 545px 1756px #FFF, 1020px 1104px #FFF, 1855px 558px #FFF, 1052px 964px #FFF, 794px 1763px #FFF, 556px 1422px #FFF, 252px 109px #FFF, 1273px 741px #FFF, 1687px 364px #FFF, 338px 1528px #FFF, 944px 1722px #FFF, 1198px 1936px #FFF, 185px 1453px #FFF, 734px 1918px #FFF, 1663px 1970px #FFF, 1294px 1180px #FFF, 1207px 147px #FFF, 797px 893px #FFF, 1441px 1440px #FFF, 1363px 654px #FFF, 1757px 1845px #FFF, 1853px 655px #FFF, 851px 1963px #FFF, 1381px 658px #FFF, 547px 1276px #FFF, 1094px 1931px #FFF, 1926px 1729px #FFF, 1998px 1010px #FFF, 887px 1348px #FFF, 571px 143px #FFF, 659px 1308px #FFF, 927px 9px #FFF, 931px 41px #FFF, 1517px 840px #FFF, 1569px 1575px #FFF, 1910px 1422px #FFF, 1584px 1462px #FFF, 1804px 954px #FFF, 772px 303px #FFF, 855px 1642px #FFF, 150px 74px #FFF, 1385px 1391px #FFF, 446px 1392px #FFF, 1190px 1771px #FFF, 1567px 369px #FFF, 358px 1852px #FFF, 314px 368px #FFF, 1896px 56px #FFF, 573px 970px #FFF, 1632px 1883px #FFF, 927px 1904px #FFF, 730px 1776px #FFF, 581px 1523px #FFF, 1174px 1425px #FFF, 1429px 762px #FFF, 1084px 294px #FFF, 996px 1927px #FFF, 1155px 1202px #FFF, 490px 1389px #FFF, 1105px 392px #FFF, 1097px 1647px #FFF, 1054px 105px #FFF, 1470px 648px #FFF, 81px 1269px #FFF, 1554px 1066px #FFF, 728px 1938px #FFF, 154px 1445px #FFF, 1867px 934px #FFF, 797px 12px #FFF, 716px 1075px #FFF, 575px 1643px #FFF, 920px 1361px #FFF, 1912px 1546px #FFF, 1848px 1123px #FFF, 1213px 777px #FFF, 1488px 1317px #FFF, 765px 1932px #FFF, 645px 1395px #FFF, 376px 1701px #FFF, 1955px 334px #FFF, 1021px 743px #FFF, 47px 885px #FFF, 1733px 13px #FFF, 1770px 1181px #FFF, 288px 1171px #FFF, 501px 460px #FFF, 368px 1209px #FFF, 1805px 748px #FFF, 1176px 1001px #FFF, 1310px 937px #FFF, 1365px 423px #FFF, 360px 1115px #FFF, 1826px 1064px #FFF, 1295px 269px #FFF, 1646px 683px #FFF, 775px 626px #FFF, 183px 1692px #FFF, 129px 543px #FFF, 469px 1973px #FFF, 12px 81px #FFF, 1019px 884px #FFF, 1877px 496px #FFF, 1866px 1976px #FFF, 1132px 1213px #FFF, 494px 1450px #FFF, 71px 771px #FFF, 595px 1707px #FFF, 1834px 1130px #FFF, 1252px 1280px #FFF, 101px 478px #FFF, 1359px 1612px #FFF, 414px 1320px #FFF, 1846px 517px #FFF, 1776px 532px #FFF, 369px 1221px #FFF, 1351px 708px #FFF, 231px 572px #FFF, 1154px 779px #FFF, 1047px 1213px #FFF, 1429px 1815px #FFF, 1808px 1153px #FFF, 1158px 1709px #FFF, 4px 426px #FFF, 47px 193px #FFF, 963px 1871px #FFF, 1773px 1988px #FFF, 61px 151px #FFF, 848px 701px #FFF, 906px 1285px #FFF, 343px 563px #FFF, 579px 1635px #FFF, 1914px 277px #FFF, 1072px 1575px #FFF, 373px 359px #FFF, 1164px 335px #FFF, 762px 1796px #FFF, 670px 1569px #FFF, 717px 451px #FFF, 712px 1835px #FFF, 1147px 1941px #FFF, 920px 1868px #FFF, 1337px 1525px #FFF, 1917px 1254px #FFF, 372px 763px #FFF, 1150px 685px #FFF, 422px 966px #FFF, 1805px 743px #FFF, 34px 1017px #FFF, 533px 961px #FFF, 35px 940px #FFF, 1232px 421px #FFF, 859px 338px #FFF, 1145px 2px #FFF, 1120px 98px #FFF, 489px 761px #FFF, 262px 1650px #FFF, 1344px 1141px #FFF, 1783px 1284px #FFF, 1224px 1048px #FFF, 567px 1435px #FFF, 197px 457px #FFF, 1520px 99px #FFF, 234px 1928px #FFF, 1758px 821px #FFF, 1506px 1326px #FFF, 671px 1478px #FFF, 17px 311px #FFF, 1404px 1665px #FFF, 263px 384px #FFF, 793px 134px #FFF, 1473px 1564px #FFF, 1796px 304px #FFF, 1388px 1621px #FFF, 723px 407px #FFF, 1768px 319px #FFF, 939px 627px #FFF, 1802px 1940px #FFF, 368px 1483px #FFF, 1802px 286px #FFF, 1653px 1117px #FFF, 1372px 206px #FFF, 165px 770px #FFF, 1540px 690px #FFF, 1565px 225px #FFF, 826px 1272px #FFF, 1498px 1681px #FFF, 1099px 1560px #FFF, 916px 1635px #FFF, 1547px 884px #FFF, 1018px 1066px #FFF, 1901px 675px #FFF, 1086px 1031px #FFF, 1967px 1827px #FFF, 623px 429px #FFF, 438px 1058px #FFF, 422px 865px #FFF, 1177px 1011px #FFF, 840px 1069px #FFF, 1525px 904px #FFF, 1566px 780px #FFF, 401px 1248px #FFF, 1123px 1924px #FFF, 286px 248px #FFF, 268px 922px #FFF, 511px 1929px #FFF, 428px 1139px #FFF, 1187px 1138px #FFF, 1143px 1295px #FFF, 1871px 804px #FFF, 1636px 399px #FFF, 1437px 979px #FFF, 874px 438px #FFF, 46px 513px #FFF, 377px 572px #FFF, 1628px 1902px #FFF, 161px 651px #FFF, 116px 1383px #FFF, 1323px 1719px #FFF, 824px 486px #FFF, 1812px 1148px #FFF, 1257px 160px #FFF, 1407px 1500px #FFF, 1744px 787px #FFF, 774px 365px #FFF, 1716px 462px #FFF, 1953px 36px #FFF, 865px 1660px #FFF, 838px 995px #FFF, 761px 923px #FFF, 1509px 42px #FFF, 1207px 987px #FFF, 732px 1374px #FFF, 346px 1306px #FFF, 282px 65px #FFF, 318px 1676px #FFF, 494px 391px #FFF, 533px 366px #FFF, 224px 344px #FFF, 1673px 1786px #FFF, 1784px 1500px #FFF, 516px 824px #FFF, 573px 160px #FFF, 197px 1133px #FFF, 1216px 1928px #FFF, 260px 1844px #FFF, 542px 1973px #FFF, 988px 362px #FFF, 1040px 360px #FFF, 241px 171px #FFF, 12px 604px #FFF, 1603px 114px #FFF, 1481px 311px #FFF, 1282px 1654px #FFF, 1965px 464px #FFF, 1210px 692px #FFF, 452px 1701px #FFF, 1414px 232px #FFF, 791px 759px #FFF, 1528px 665px #FFF, 1667px 1159px #FFF, 583px 70px #FFF, 1010px 1558px #FFF, 1859px 221px #FFF, 1636px 157px #FFF, 1522px 389px #FFF, 1523px 1959px #FFF, 1953px 34px #FFF, 988px 189px #FFF, 1098px 524px #FFF, 2000px 1309px #FFF, 1796px 886px #FFF, 718px 1281px #FFF, 1771px 1114px #FFF, 1586px 1405px #FFF, 434px 1289px #FFF, 167px 613px #FFF, 330px 1133px #FFF, 931px 1787px #FFF, 1408px 242px #FFF, 749px 1939px #FFF, 888px 1579px #FFF, 282px 1863px #FFF, 1302px 1379px #FFF, 91px 1401px #FFF, 370px 1125px #FFF, 1817px 1030px #FFF, 113px 1039px #FFF, 1293px 1569px #FFF, 797px 485px #FFF, 799px 1087px #FFF, 1788px 1800px #FFF, 424px 162px #FFF, 1709px 1300px #FFF, 578px 680px #FFF, 1690px 1836px #FFF, 845px 969px #FFF, 1774px 939px #FFF, 189px 221px #FFF, 296px 1814px #FFF, 1995px 1957px #FFF, 222px 230px #FFF, 1168px 622px #FFF, 1818px 1916px #FFF, 516px 1206px #FFF, 1193px 1774px #FFF, 1881px 708px #FFF, 245px 412px #FFF, 554px 1015px #FFF, 1896px 976px #FFF, 789px 854px #FFF, 1343px 1656px #FFF, 1160px 1311px #FFF, 1556px 346px #FFF, 466px 1079px #FFF, 438px 1495px #FFF, 708px 1497px #FFF, 652px 984px #FFF, 1848px 1941px #FFF, 712px 1065px #FFF, 314px 1629px #FFF, 1264px 408px #FFF, 1063px 372px #FFF, 482px 951px #FFF, 858px 1463px #FFF, 435px 1971px #FFF, 176px 1244px #FFF, 1662px 920px #FFF, 853px 966px #FFF, 590px 598px #FFF, 660px 805px #FFF, 1591px 311px #FFF, 613px 411px #FFF, 1719px 1014px #FFF, 274px 931px #FFF, 853px 1123px #FFF, 1674px 1023px #FFF, 381px 162px #FFF, 1113px 1636px #FFF, 1026px 300px #FFF, 1309px 1272px #FFF, 1683px 1534px #FFF, 218px 676px #FFF, 1646px 557px #FFF, 1414px 1709px #FFF, 1468px 893px #FFF, 175px 326px #FFF, 666px 1204px #FFF, 6px 923px #FFF, 1737px 680px #FFF, 130px 1107px #FFF, 1512px 1285px #FFF, 384px 705px #FFF, 1294px 1408px #FFF, 1154px 212px #FFF, 1256px 1931px #FFF, 420px 462px #FFF, 1374px 1692px #FFF, 1044px 739px #FFF, 395px 1573px #FFF, 176px 1119px #FFF, 911px 499px #FFF, 531px 675px #FFF, 1924px 1215px #FFF, 406px 831px #FFF, 1928px 42px #FFF, 656px 82px #FFF, 1202px 1759px #FFF, 1919px 1545px #FFF, 1016px 434px #FFF, 1081px 1259px #FFF, 81px 1328px #FFF, 1647px 91px #FFF, 1243px 1887px #FFF, 81px 532px #FFF, 348px 331px #FFF, 1455px 237px #FFF, 1427px 1842px #FFF, 1168px 754px #FFF, 1161px 1674px #FFF, 1610px 59px #FFF, 328px 1917px #FFF, 5px 1589px #FFF, 1548px 287px #FFF, 1789px 61px #FFF, 1012px 840px #FFF, 1954px 1048px #FFF, 1412px 1274px #FFF, 1835px 554px #FFF, 151px 523px #FFF, 1763px 1205px #FFF, 950px 361px #FFF, 1561px 1944px #FFF, 1043px 1061px #FFF, 1786px 1922px #FFF, 1056px 1304px #FFF, 1486px 763px #FFF, 1207px 654px #FFF, 1601px 378px #FFF, 1738px 256px #FFF, 861px 605px #FFF, 810px 136px #FFF, 1087px 1998px #FFF, 1289px 190px #FFF, 676px 75px #FFF, 1658px 900px #FFF, 1794px 115px #FFF, 132px 1789px #FFF, 837px 1966px #FFF, 624px 396px #FFF, 1694px 1690px #FFF, 1189px 1037px #FFF, 196px 1680px #FFF, 1555px 453px #FFF, 1599px 1603px #FFF, 1385px 699px #FFF, 1162px 559px #FFF, 1857px 1353px #FFF, 501px 1351px #FFF, 1506px 48px #FFF, 1474px 1224px #FFF, 1009px 1984px #FFF, 126px 1650px #FFF, 1234px 417px #FFF, 1015px 906px #FFF, 1697px 774px #FFF, 95px 260px #FFF, 169px 1950px #FFF, 557px 249px #FFF, 1626px 1297px #FFF, 1469px 1309px #FFF, 1066px 817px #FFF, 1002px 96px #FFF, 457px 801px #FFF, 1849px 477px #FFF, 873px 339px #FFF, 538px 299px #FFF, 149px 1582px #FFF, 1428px 1035px #FFF, 1838px 130px #FFF, 447px 1849px #FFF, 321px 359px #FFF, 280px 587px #FFF, 1210px 821px #FFF, 1608px 1787px #FFF, 813px 996px #FFF, 906px 1405px #FFF, 1097px 101px #FFF, 231px 161px #FFF, 156px 1937px #FFF, 945px 1293px #FFF, 661px 1364px #FFF, 568px 10px #FFF, 1198px 676px #FFF, 1171px 559px #FFF, 1407px 433px #FFF, 429px 977px #FFF, 1958px 258px #FFF, 429px 1798px #FFF, 12px 644px #FFF, 240px 738px #FFF, 581px 1667px #FFF, 1612px 303px #FFF, 238px 1567px #FFF, 988px 792px #FFF, 1681px 18px #FFF, 106px 1693px #FFF, 686px 365px #FFF, 1958px 1763px #FFF, 74px 370px #FFF, 653px 1874px #FFF, 664px 123px #FFF, 1739px 60px #FFF, 717px 1321px #FFF, 1116px 1192px #FFF, 317px 1330px #FFF, 376px 1924px #FFF, 310px 852px #FFF, 617px 989px #FFF, 552px 1696px #FFF, 1008px 677px #FFF, 1784px 1847px #FFF, 1653px 834px #FFF, 706px 407px #FFF, 136px 1167px #FFF, 1736px 1753px #FFF, 1237px 829px #FFF, 1731px 1678px #FFF, 1810px 1655px #FFF, 436px 1443px #FFF, 1690px 1475px #FFF, 202px 1022px #FFF, 83px 650px #FFF, 673px 730px #FFF, 47px 1660px #FFF, 942px 314px #FFF, 1610px 811px #FFF, 1166px 188px #FFF, 372px 171px #FFF, 598px 1642px #FFF, 316px 1598px #FFF, 376px 1125px #FFF, 974px 1644px #FFF, 1044px 1888px #FFF, 346px 433px #FFF, 1871px 1978px #FFF, 1362px 563px #FFF, 1547px 1378px #FFF, 1841px 805px #FFF, 1396px 465px #FFF, 633px 345px #FFF, 236px 1674px #FFF, 1072px 486px #FFF, 1095px 1868px #FFF, 834px 1633px #FFF, 1765px 1459px #FFF, 314px 1982px #FFF, 1629px 861px #FFF, 1327px 1325px #FFF, 1632px 123px #FFF, 1263px 313px #FFF, 1970px 1172px #FFF, 1240px 824px #FFF, 410px 14px #FFF, 465px 140px #FFF, 1759px 1546px #FFF, 992px 904px #FFF, 804px 191px #FFF, 700px 1666px #FFF, 1233px 747px #FFF, 582px 378px #FFF, 1534px 599px #FFF, 1558px 1356px #FFF, 548px 1170px #FFF, 366px 783px #FFF, 792px 36px #FFF, 1923px 897px #FFF, 1480px 584px #FFF, 748px 1552px #FFF, 20px 1654px #FFF, 1682px 1055px #FFF, 964px 1748px #FFF, 435px 1709px #FFF, 720px 139px #FFF, 1407px 1112px #FFF, 327px 1798px #FFF, 810px 70px #FFF, 86px 857px #FFF, 64px 868px #FFF, 1384px 1107px #FFF, 725px 1502px #FFF, 368px 173px #FFF, 1938px 1021px #FFF, 1914px 1788px #FFF, 670px 768px #FFF, 848px 724px #FFF, 746px 470px #FFF, 1118px 944px #FFF, 200px 1347px #FFF, 1147px 1216px #FFF, 1991px 1551px #FFF, 1456px 351px #FFF, 1520px 838px #FFF, 1631px 1515px #FFF, 1964px 1909px #FFF, 1092px 610px #FFF, 1694px 700px #FFF, 258px 975px #FFF, 1485px 823px #FFF, 1240px 307px #FFF, 1750px 1246px #FFF, 455px 256px #FFF, 1737px 502px #FFF, 977px 464px #FFF, 1133px 788px #FFF, 1728px 1907px #FFF, 1086px 1402px #FFF, 523px 1928px #FFF, 1201px 1272px #FFF, 895px 1324px #FFF, 1914px 1183px #FFF, 403px 1321px #FFF, 1110px 1888px #FFF, 1307px 1917px #FFF, 1901px 955px #FFF, 871px 1740px #FFF, 426px 619px #FFF, 1864px 633px #FFF, 1511px 1751px #FFF, 399px 611px #FFF, 543px 426px #FFF, 1981px 1410px #FFF, 91px 1727px #FFF, 436px 1320px #FFF, 1947px 436px #FFF, 254px 1178px #FFF, 1116px 422px #FFF, 730px 342px #FFF, 1224px 1535px #FFF, 1284px 283px #FFF, 1609px 1439px #FFF, 250px 1893px #FFF, 126px 1396px #FFF, 1041px 737px #FFF, 311px 641px #FFF, 1868px 127px #FFF, 310px 334px #FFF, 1635px 1722px #FFF, 76px 1180px #FFF, 332px 1886px #FFF, 275px 1915px #FFF, 639px 883px #FFF, 435px 638px #FFF, 195px 1779px #FFF, 36px 576px #FFF, 1999px 1031px #FFF, 1777px 149px #FFF, 1914px 1438px #FFF, 78px 583px #FFF, 1279px 729px #FFF, 1263px 599px #FFF, 37px 261px #FFF, 174px 640px #FFF;
      animation: animStar 50s linear infinite;
    }

    #stars:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: 398px 239px #FFF, 107px 1114px #FFF, 1445px 626px #FFF, 580px 1944px #FFF, 758px 753px #FFF, 1487px 1319px #FFF, 662px 443px #FFF, 8px 663px #FFF, 197px 1339px #FFF, 269px 727px #FFF, 50px 647px #FFF, 1833px 835px #FFF, 506px 1303px #FFF, 1018px 180px #FFF, 1650px 1085px #FFF, 656px 859px #FFF, 877px 805px #FFF, 1135px 1784px #FFF, 731px 312px #FFF, 1480px 768px #FFF, 132px 1457px #FFF, 1774px 891px #FFF, 1020px 52px #FFF, 1489px 1572px #FFF, 1449px 404px #FFF, 1976px 1232px #FFF, 1340px 310px #FFF, 31px 590px #FFF, 272px 440px #FFF, 519px 1275px #FFF, 1023px 1803px #FFF, 1003px 847px #FFF, 103px 995px #FFF, 69px 1502px #FFF, 546px 517px #FFF, 983px 1699px #FFF, 350px 507px #FFF, 1939px 1447px #FFF, 153px 15px #FFF, 585px 1326px #FFF, 968px 1814px #FFF, 1989px 1406px #FFF, 286px 156px #FFF, 1327px 1781px #FFF, 1165px 753px #FFF, 272px 1014px #FFF, 1992px 1301px #FFF, 1304px 562px #FFF, 191px 1017px #FFF, 1820px 864px #FFF, 1326px 953px #FFF, 1855px 110px #FFF, 137px 1294px #FFF, 812px 1768px #FFF, 1579px 1240px #FFF, 358px 137px #FFF, 1797px 1709px #FFF, 412px 340px #FFF, 567px 289px #FFF, 1432px 121px #FFF, 861px 1124px #FFF, 925px 1829px #FFF, 1473px 1220px #FFF, 983px 209px #FFF, 1288px 1680px #FFF, 23px 1908px #FFF, 358px 93px #FFF, 1816px 709px #FFF, 461px 964px #FFF, 365px 1442px #FFF, 1930px 1405px #FFF, 1176px 1444px #FFF, 1757px 1315px #FFF, 73px 1102px #FFF, 134px 704px #FFF, 1580px 1373px #FFF, 894px 122px #FFF, 1295px 1273px #FFF, 545px 1756px #FFF, 1020px 1104px #FFF, 1855px 558px #FFF, 1052px 964px #FFF, 794px 1763px #FFF, 556px 1422px #FFF, 252px 109px #FFF, 1273px 741px #FFF, 1687px 364px #FFF, 338px 1528px #FFF, 944px 1722px #FFF, 1198px 1936px #FFF, 185px 1453px #FFF, 734px 1918px #FFF, 1663px 1970px #FFF, 1294px 1180px #FFF, 1207px 147px #FFF, 797px 893px #FFF, 1441px 1440px #FFF, 1363px 654px #FFF, 1757px 1845px #FFF, 1853px 655px #FFF, 851px 1963px #FFF, 1381px 658px #FFF, 547px 1276px #FFF, 1094px 1931px #FFF, 1926px 1729px #FFF, 1998px 1010px #FFF, 887px 1348px #FFF, 571px 143px #FFF, 659px 1308px #FFF, 927px 9px #FFF, 931px 41px #FFF, 1517px 840px #FFF, 1569px 1575px #FFF, 1910px 1422px #FFF, 1584px 1462px #FFF, 1804px 954px #FFF, 772px 303px #FFF, 855px 1642px #FFF, 150px 74px #FFF, 1385px 1391px #FFF, 446px 1392px #FFF, 1190px 1771px #FFF, 1567px 369px #FFF, 358px 1852px #FFF, 314px 368px #FFF, 1896px 56px #FFF, 573px 970px #FFF, 1632px 1883px #FFF, 927px 1904px #FFF, 730px 1776px #FFF, 581px 1523px #FFF, 1174px 1425px #FFF, 1429px 762px #FFF, 1084px 294px #FFF, 996px 1927px #FFF, 1155px 1202px #FFF, 490px 1389px #FFF, 1105px 392px #FFF, 1097px 1647px #FFF, 1054px 105px #FFF, 1470px 648px #FFF, 81px 1269px #FFF, 1554px 1066px #FFF, 728px 1938px #FFF, 154px 1445px #FFF, 1867px 934px #FFF, 797px 12px #FFF, 716px 1075px #FFF, 575px 1643px #FFF, 920px 1361px #FFF, 1912px 1546px #FFF, 1848px 1123px #FFF, 1213px 777px #FFF, 1488px 1317px #FFF, 765px 1932px #FFF, 645px 1395px #FFF, 376px 1701px #FFF, 1955px 334px #FFF, 1021px 743px #FFF, 47px 885px #FFF, 1733px 13px #FFF, 1770px 1181px #FFF, 288px 1171px #FFF, 501px 460px #FFF, 368px 1209px #FFF, 1805px 748px #FFF, 1176px 1001px #FFF, 1310px 937px #FFF, 1365px 423px #FFF, 360px 1115px #FFF, 1826px 1064px #FFF, 1295px 269px #FFF, 1646px 683px #FFF, 775px 626px #FFF, 183px 1692px #FFF, 129px 543px #FFF, 469px 1973px #FFF, 12px 81px #FFF, 1019px 884px #FFF, 1877px 496px #FFF, 1866px 1976px #FFF, 1132px 1213px #FFF, 494px 1450px #FFF, 71px 771px #FFF, 595px 1707px #FFF, 1834px 1130px #FFF, 1252px 1280px #FFF, 101px 478px #FFF, 1359px 1612px #FFF, 414px 1320px #FFF, 1846px 517px #FFF, 1776px 532px #FFF, 369px 1221px #FFF, 1351px 708px #FFF, 231px 572px #FFF, 1154px 779px #FFF, 1047px 1213px #FFF, 1429px 1815px #FFF, 1808px 1153px #FFF, 1158px 1709px #FFF, 4px 426px #FFF, 47px 193px #FFF, 963px 1871px #FFF, 1773px 1988px #FFF, 61px 151px #FFF, 848px 701px #FFF, 906px 1285px #FFF, 343px 563px #FFF, 579px 1635px #FFF, 1914px 277px #FFF, 1072px 1575px #FFF, 373px 359px #FFF, 1164px 335px #FFF, 762px 1796px #FFF, 670px 1569px #FFF, 717px 451px #FFF, 712px 1835px #FFF, 1147px 1941px #FFF, 920px 1868px #FFF, 1337px 1525px #FFF, 1917px 1254px #FFF, 372px 763px #FFF, 1150px 685px #FFF, 422px 966px #FFF, 1805px 743px #FFF, 34px 1017px #FFF, 533px 961px #FFF, 35px 940px #FFF, 1232px 421px #FFF, 859px 338px #FFF, 1145px 2px #FFF, 1120px 98px #FFF, 489px 761px #FFF, 262px 1650px #FFF, 1344px 1141px #FFF, 1783px 1284px #FFF, 1224px 1048px #FFF, 567px 1435px #FFF, 197px 457px #FFF, 1520px 99px #FFF, 234px 1928px #FFF, 1758px 821px #FFF, 1506px 1326px #FFF, 671px 1478px #FFF, 17px 311px #FFF, 1404px 1665px #FFF, 263px 384px #FFF, 793px 134px #FFF, 1473px 1564px #FFF, 1796px 304px #FFF, 1388px 1621px #FFF, 723px 407px #FFF, 1768px 319px #FFF, 939px 627px #FFF, 1802px 1940px #FFF, 368px 1483px #FFF, 1802px 286px #FFF, 1653px 1117px #FFF, 1372px 206px #FFF, 165px 770px #FFF, 1540px 690px #FFF, 1565px 225px #FFF, 826px 1272px #FFF, 1498px 1681px #FFF, 1099px 1560px #FFF, 916px 1635px #FFF, 1547px 884px #FFF, 1018px 1066px #FFF, 1901px 675px #FFF, 1086px 1031px #FFF, 1967px 1827px #FFF, 623px 429px #FFF, 438px 1058px #FFF, 422px 865px #FFF, 1177px 1011px #FFF, 840px 1069px #FFF, 1525px 904px #FFF, 1566px 780px #FFF, 401px 1248px #FFF, 1123px 1924px #FFF, 286px 248px #FFF, 268px 922px #FFF, 511px 1929px #FFF, 428px 1139px #FFF, 1187px 1138px #FFF, 1143px 1295px #FFF, 1871px 804px #FFF, 1636px 399px #FFF, 1437px 979px #FFF, 874px 438px #FFF, 46px 513px #FFF, 377px 572px #FFF, 1628px 1902px #FFF, 161px 651px #FFF, 116px 1383px #FFF, 1323px 1719px #FFF, 824px 486px #FFF, 1812px 1148px #FFF, 1257px 160px #FFF, 1407px 1500px #FFF, 1744px 787px #FFF, 774px 365px #FFF, 1716px 462px #FFF, 1953px 36px #FFF, 865px 1660px #FFF, 838px 995px #FFF, 761px 923px #FFF, 1509px 42px #FFF, 1207px 987px #FFF, 732px 1374px #FFF, 346px 1306px #FFF, 282px 65px #FFF, 318px 1676px #FFF, 494px 391px #FFF, 533px 366px #FFF, 224px 344px #FFF, 1673px 1786px #FFF, 1784px 1500px #FFF, 516px 824px #FFF, 573px 160px #FFF, 197px 1133px #FFF, 1216px 1928px #FFF, 260px 1844px #FFF, 542px 1973px #FFF, 988px 362px #FFF, 1040px 360px #FFF, 241px 171px #FFF, 12px 604px #FFF, 1603px 114px #FFF, 1481px 311px #FFF, 1282px 1654px #FFF, 1965px 464px #FFF, 1210px 692px #FFF, 452px 1701px #FFF, 1414px 232px #FFF, 791px 759px #FFF, 1528px 665px #FFF, 1667px 1159px #FFF, 583px 70px #FFF, 1010px 1558px #FFF, 1859px 221px #FFF, 1636px 157px #FFF, 1522px 389px #FFF, 1523px 1959px #FFF, 1953px 34px #FFF, 988px 189px #FFF, 1098px 524px #FFF, 2000px 1309px #FFF, 1796px 886px #FFF, 718px 1281px #FFF, 1771px 1114px #FFF, 1586px 1405px #FFF, 434px 1289px #FFF, 167px 613px #FFF, 330px 1133px #FFF, 931px 1787px #FFF, 1408px 242px #FFF, 749px 1939px #FFF, 888px 1579px #FFF, 282px 1863px #FFF, 1302px 1379px #FFF, 91px 1401px #FFF, 370px 1125px #FFF, 1817px 1030px #FFF, 113px 1039px #FFF, 1293px 1569px #FFF, 797px 485px #FFF, 799px 1087px #FFF, 1788px 1800px #FFF, 424px 162px #FFF, 1709px 1300px #FFF, 578px 680px #FFF, 1690px 1836px #FFF, 845px 969px #FFF, 1774px 939px #FFF, 189px 221px #FFF, 296px 1814px #FFF, 1995px 1957px #FFF, 222px 230px #FFF, 1168px 622px #FFF, 1818px 1916px #FFF, 516px 1206px #FFF, 1193px 1774px #FFF, 1881px 708px #FFF, 245px 412px #FFF, 554px 1015px #FFF, 1896px 976px #FFF, 789px 854px #FFF, 1343px 1656px #FFF, 1160px 1311px #FFF, 1556px 346px #FFF, 466px 1079px #FFF, 438px 1495px #FFF, 708px 1497px #FFF, 652px 984px #FFF, 1848px 1941px #FFF, 712px 1065px #FFF, 314px 1629px #FFF, 1264px 408px #FFF, 1063px 372px #FFF, 482px 951px #FFF, 858px 1463px #FFF, 435px 1971px #FFF, 176px 1244px #FFF, 1662px 920px #FFF, 853px 966px #FFF, 590px 598px #FFF, 660px 805px #FFF, 1591px 311px #FFF, 613px 411px #FFF, 1719px 1014px #FFF, 274px 931px #FFF, 853px 1123px #FFF, 1674px 1023px #FFF, 381px 162px #FFF, 1113px 1636px #FFF, 1026px 300px #FFF, 1309px 1272px #FFF, 1683px 1534px #FFF, 218px 676px #FFF, 1646px 557px #FFF, 1414px 1709px #FFF, 1468px 893px #FFF, 175px 326px #FFF, 666px 1204px #FFF, 6px 923px #FFF, 1737px 680px #FFF, 130px 1107px #FFF, 1512px 1285px #FFF, 384px 705px #FFF, 1294px 1408px #FFF, 1154px 212px #FFF, 1256px 1931px #FFF, 420px 462px #FFF, 1374px 1692px #FFF, 1044px 739px #FFF, 395px 1573px #FFF, 176px 1119px #FFF, 911px 499px #FFF, 531px 675px #FFF, 1924px 1215px #FFF, 406px 831px #FFF, 1928px 42px #FFF, 656px 82px #FFF, 1202px 1759px #FFF, 1919px 1545px #FFF, 1016px 434px #FFF, 1081px 1259px #FFF, 81px 1328px #FFF, 1647px 91px #FFF, 1243px 1887px #FFF, 81px 532px #FFF, 348px 331px #FFF, 1455px 237px #FFF, 1427px 1842px #FFF, 1168px 754px #FFF, 1161px 1674px #FFF, 1610px 59px #FFF, 328px 1917px #FFF, 5px 1589px #FFF, 1548px 287px #FFF, 1789px 61px #FFF, 1012px 840px #FFF, 1954px 1048px #FFF, 1412px 1274px #FFF, 1835px 554px #FFF, 151px 523px #FFF, 1763px 1205px #FFF, 950px 361px #FFF, 1561px 1944px #FFF, 1043px 1061px #FFF, 1786px 1922px #FFF, 1056px 1304px #FFF, 1486px 763px #FFF, 1207px 654px #FFF, 1601px 378px #FFF, 1738px 256px #FFF, 861px 605px #FFF, 810px 136px #FFF, 1087px 1998px #FFF, 1289px 190px #FFF, 676px 75px #FFF, 1658px 900px #FFF, 1794px 115px #FFF, 132px 1789px #FFF, 837px 1966px #FFF, 624px 396px #FFF, 1694px 1690px #FFF, 1189px 1037px #FFF, 196px 1680px #FFF, 1555px 453px #FFF, 1599px 1603px #FFF, 1385px 699px #FFF, 1162px 559px #FFF, 1857px 1353px #FFF, 501px 1351px #FFF, 1506px 48px #FFF, 1474px 1224px #FFF, 1009px 1984px #FFF, 126px 1650px #FFF, 1234px 417px #FFF, 1015px 906px #FFF, 1697px 774px #FFF, 95px 260px #FFF, 169px 1950px #FFF, 557px 249px #FFF, 1626px 1297px #FFF, 1469px 1309px #FFF, 1066px 817px #FFF, 1002px 96px #FFF, 457px 801px #FFF, 1849px 477px #FFF, 873px 339px #FFF, 538px 299px #FFF, 149px 1582px #FFF, 1428px 1035px #FFF, 1838px 130px #FFF, 447px 1849px #FFF, 321px 359px #FFF, 280px 587px #FFF, 1210px 821px #FFF, 1608px 1787px #FFF, 813px 996px #FFF, 906px 1405px #FFF, 1097px 101px #FFF, 231px 161px #FFF, 156px 1937px #FFF, 945px 1293px #FFF, 661px 1364px #FFF, 568px 10px #FFF, 1198px 676px #FFF, 1171px 559px #FFF, 1407px 433px #FFF, 429px 977px #FFF, 1958px 258px #FFF, 429px 1798px #FFF, 12px 644px #FFF, 240px 738px #FFF, 581px 1667px #FFF, 1612px 303px #FFF, 238px 1567px #FFF, 988px 792px #FFF, 1681px 18px #FFF, 106px 1693px #FFF, 686px 365px #FFF, 1958px 1763px #FFF, 74px 370px #FFF, 653px 1874px #FFF, 664px 123px #FFF, 1739px 60px #FFF, 717px 1321px #FFF, 1116px 1192px #FFF, 317px 1330px #FFF, 376px 1924px #FFF, 310px 852px #FFF, 617px 989px #FFF, 552px 1696px #FFF, 1008px 677px #FFF, 1784px 1847px #FFF, 1653px 834px #FFF, 706px 407px #FFF, 136px 1167px #FFF, 1736px 1753px #FFF, 1237px 829px #FFF, 1731px 1678px #FFF, 1810px 1655px #FFF, 436px 1443px #FFF, 1690px 1475px #FFF, 202px 1022px #FFF, 83px 650px #FFF, 673px 730px #FFF, 47px 1660px #FFF, 942px 314px #FFF, 1610px 811px #FFF, 1166px 188px #FFF, 372px 171px #FFF, 598px 1642px #FFF, 316px 1598px #FFF, 376px 1125px #FFF, 974px 1644px #FFF, 1044px 1888px #FFF, 346px 433px #FFF, 1871px 1978px #FFF, 1362px 563px #FFF, 1547px 1378px #FFF, 1841px 805px #FFF, 1396px 465px #FFF, 633px 345px #FFF, 236px 1674px #FFF, 1072px 486px #FFF, 1095px 1868px #FFF, 834px 1633px #FFF, 1765px 1459px #FFF, 314px 1982px #FFF, 1629px 861px #FFF, 1327px 1325px #FFF, 1632px 123px #FFF, 1263px 313px #FFF, 1970px 1172px #FFF, 1240px 824px #FFF, 410px 14px #FFF, 465px 140px #FFF, 1759px 1546px #FFF, 992px 904px #FFF, 804px 191px #FFF, 700px 1666px #FFF, 1233px 747px #FFF, 582px 378px #FFF, 1534px 599px #FFF, 1558px 1356px #FFF, 548px 1170px #FFF, 366px 783px #FFF, 792px 36px #FFF, 1923px 897px #FFF, 1480px 584px #FFF, 748px 1552px #FFF, 20px 1654px #FFF, 1682px 1055px #FFF, 964px 1748px #FFF, 435px 1709px #FFF, 720px 139px #FFF, 1407px 1112px #FFF, 327px 1798px #FFF, 810px 70px #FFF, 86px 857px #FFF, 64px 868px #FFF, 1384px 1107px #FFF, 725px 1502px #FFF, 368px 173px #FFF, 1938px 1021px #FFF, 1914px 1788px #FFF, 670px 768px #FFF, 848px 724px #FFF, 746px 470px #FFF, 1118px 944px #FFF, 200px 1347px #FFF, 1147px 1216px #FFF, 1991px 1551px #FFF, 1456px 351px #FFF, 1520px 838px #FFF, 1631px 1515px #FFF, 1964px 1909px #FFF, 1092px 610px #FFF, 1694px 700px #FFF, 258px 975px #FFF, 1485px 823px #FFF, 1240px 307px #FFF, 1750px 1246px #FFF, 455px 256px #FFF, 1737px 502px #FFF, 977px 464px #FFF, 1133px 788px #FFF, 1728px 1907px #FFF, 1086px 1402px #FFF, 523px 1928px #FFF, 1201px 1272px #FFF, 895px 1324px #FFF, 1914px 1183px #FFF, 403px 1321px #FFF, 1110px 1888px #FFF, 1307px 1917px #FFF, 1901px 955px #FFF, 871px 1740px #FFF, 426px 619px #FFF, 1864px 633px #FFF, 1511px 1751px #FFF, 399px 611px #FFF, 543px 426px #FFF, 1981px 1410px #FFF, 91px 1727px #FFF, 436px 1320px #FFF, 1947px 436px #FFF, 254px 1178px #FFF, 1116px 422px #FFF, 730px 342px #FFF, 1224px 1535px #FFF, 1284px 283px #FFF, 1609px 1439px #FFF, 250px 1893px #FFF, 126px 1396px #FFF, 1041px 737px #FFF, 311px 641px #FFF, 1868px 127px #FFF, 310px 334px #FFF, 1635px 1722px #FFF, 76px 1180px #FFF, 332px 1886px #FFF, 275px 1915px #FFF, 639px 883px #FFF, 435px 638px #FFF, 195px 1779px #FFF, 36px 576px #FFF, 1999px 1031px #FFF, 1777px 149px #FFF, 1914px 1438px #FFF, 78px 583px #FFF, 1279px 729px #FFF, 1263px 599px #FFF, 37px 261px #FFF, 174px 640px #FFF;
    }

    #stars2 {
      position: absolute;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: 217px 1477px #FFF, 1131px 891px #FFF, 482px 886px #FFF, 401px 618px #FFF, 191px 405px #FFF, 1286px 413px #FFF, 1379px 1608px #FFF, 923px 1898px #FFF, 1764px 277px #FFF, 136px 1418px #FFF, 445px 1797px #FFF, 560px 811px #FFF, 562px 763px #FFF, 214px 1256px #FFF, 592px 160px #FFF, 1419px 1538px #FFF, 1881px 632px #FFF, 943px 1448px #FFF, 343px 1217px #FFF, 244px 671px #FFF, 207px 1184px #FFF, 1670px 1461px #FFF, 812px 299px #FFF, 358px 1839px #FFF, 1030px 738px #FFF, 1709px 1282px #FFF, 1593px 685px #FFF, 275px 923px #FFF, 1128px 1716px #FFF, 1133px 1080px #FFF, 598px 1401px #FFF, 1245px 208px #FFF, 387px 1445px #FFF, 1161px 1122px #FFF, 731px 1673px #FFF, 1976px 971px #FFF, 1157px 1713px #FFF, 649px 423px #FFF, 636px 681px #FFF, 1194px 1692px #FFF, 414px 451px #FFF, 47px 1530px #FFF, 1333px 1631px #FFF, 1792px 1452px #FFF, 1646px 455px #FFF, 1775px 312px #FFF, 626px 25px #FFF, 359px 116px #FFF, 390px 911px #FFF, 271px 146px #FFF, 1945px 1448px #FFF, 374px 923px #FFF, 1100px 1891px #FFF, 680px 1221px #FFF, 1511px 1677px #FFF, 93px 106px #FFF, 33px 392px #FFF, 4px 1229px #FFF, 791px 1901px #FFF, 724px 203px #FFF, 1494px 1042px #FFF, 89px 1277px #FFF, 1678px 1862px #FFF, 979px 486px #FFF, 1180px 494px #FFF, 741px 1469px #FFF, 900px 654px #FFF, 1759px 1027px #FFF, 1389px 353px #FFF, 1765px 772px #FFF, 37px 1225px #FFF, 408px 364px #FFF, 1159px 1582px #FFF, 266px 1672px #FFF, 1276px 872px #FFF, 426px 1558px #FFF, 1396px 533px #FFF, 1235px 1381px #FFF, 1993px 776px #FFF, 217px 215px #FFF, 572px 250px #FFF, 1919px 1664px #FFF, 539px 557px #FFF, 772px 93px #FFF, 247px 1369px #FFF, 499px 746px #FFF, 1795px 1901px #FFF, 1179px 1362px #FFF, 1308px 1557px #FFF, 1424px 1949px #FFF, 77px 1279px #FFF, 1866px 1340px #FFF, 238px 165px #FFF, 931px 209px #FFF, 482px 1653px #FFF, 499px 536px #FFF, 961px 414px #FFF, 1890px 573px #FFF, 1278px 830px #FFF, 805px 486px #FFF, 987px 686px #FFF, 1188px 681px #FFF, 621px 1912px #FFF, 546px 172px #FFF, 1422px 589px #FFF, 1685px 1325px #FFF, 1666px 429px #FFF, 1611px 217px #FFF, 1096px 1614px #FFF, 1910px 1745px #FFF, 1768px 617px #FFF, 1871px 1191px #FFF, 1524px 1372px #FFF, 1977px 1764px #FFF, 1725px 1200px #FFF, 1609px 153px #FFF, 75px 393px #FFF, 1091px 1827px #FFF, 1219px 588px #FFF, 369px 774px #FFF, 1599px 721px #FFF, 807px 1133px #FFF, 1907px 93px #FFF, 1004px 209px #FFF, 1622px 451px #FFF, 1331px 932px #FFF, 1390px 1300px #FFF, 1116px 1660px #FFF, 1592px 1141px #FFF, 1371px 267px #FFF, 943px 153px #FFF, 1271px 294px #FFF, 1619px 1763px #FFF, 3px 1855px #FFF, 525px 979px #FFF, 1206px 431px #FFF, 552px 1062px #FFF, 115px 138px #FFF, 1871px 1575px #FFF, 991px 1205px #FFF, 1216px 1322px #FFF, 56px 231px #FFF, 302px 1177px #FFF, 1621px 430px #FFF, 151px 1288px #FFF, 1210px 614px #FFF, 1350px 1899px #FFF, 1321px 1614px #FFF, 691px 1728px #FFF, 1289px 272px #FFF, 1641px 1990px #FFF, 1629px 1202px #FFF, 771px 868px #FFF, 808px 1407px #FFF, 1763px 748px #FFF, 903px 468px #FFF, 827px 636px #FFF, 689px 999px #FFF, 308px 633px #FFF, 1187px 1049px #FFF, 1810px 948px #FFF, 1529px 1516px #FFF, 430px 768px #FFF, 752px 223px #FFF, 756px 1611px #FFF, 1083px 195px #FFF, 1937px 956px #FFF, 1378px 1223px #FFF, 1226px 1620px #FFF, 689px 389px #FFF, 1492px 1049px #FFF, 1779px 1832px #FFF, 8px 750px #FFF, 149px 791px #FFF, 1722px 1962px #FFF, 1973px 811px #FFF, 664px 1430px #FFF, 1855px 243px #FFF, 818px 1463px #FFF, 540px 271px #FFF, 593px 899px #FFF, 1390px 264px #FFF, 791px 1076px #FFF, 333px 1855px #FFF, 815px 1622px #FFF, 525px 1922px #FFF, 1855px 1308px #FFF, 789px 1599px #FFF, 754px 1823px #FFF, 1040px 148px #FFF, 1791px 915px #FFF, 857px 1179px #FFF, 1242px 1721px #FFF, 903px 1076px #FFF, 1673px 1392px #FFF, 173px 1942px #FFF, 127px 561px #FFF, 1261px 712px #FFF, 1343px 1947px #FFF, 469px 1145px #FFF;
      animation: animStar 100s linear infinite;
    }

    #stars2:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: 217px 1477px #FFF, 1131px 891px #FFF, 482px 886px #FFF, 401px 618px #FFF, 191px 405px #FFF, 1286px 413px #FFF, 1379px 1608px #FFF, 923px 1898px #FFF, 1764px 277px #FFF, 136px 1418px #FFF, 445px 1797px #FFF, 560px 811px #FFF, 562px 763px #FFF, 214px 1256px #FFF, 592px 160px #FFF, 1419px 1538px #FFF, 1881px 632px #FFF, 943px 1448px #FFF, 343px 1217px #FFF, 244px 671px #FFF, 207px 1184px #FFF, 1670px 1461px #FFF, 812px 299px #FFF, 358px 1839px #FFF, 1030px 738px #FFF, 1709px 1282px #FFF, 1593px 685px #FFF, 275px 923px #FFF, 1128px 1716px #FFF, 1133px 1080px #FFF, 598px 1401px #FFF, 1245px 208px #FFF, 387px 1445px #FFF, 1161px 1122px #FFF, 731px 1673px #FFF, 1976px 971px #FFF, 1157px 1713px #FFF, 649px 423px #FFF, 636px 681px #FFF, 1194px 1692px #FFF, 414px 451px #FFF, 47px 1530px #FFF, 1333px 1631px #FFF, 1792px 1452px #FFF, 1646px 455px #FFF, 1775px 312px #FFF, 626px 25px #FFF, 359px 116px #FFF, 390px 911px #FFF, 271px 146px #FFF, 1945px 1448px #FFF, 374px 923px #FFF, 1100px 1891px #FFF, 680px 1221px #FFF, 1511px 1677px #FFF, 93px 106px #FFF, 33px 392px #FFF, 4px 1229px #FFF, 791px 1901px #FFF, 724px 203px #FFF, 1494px 1042px #FFF, 89px 1277px #FFF, 1678px 1862px #FFF, 979px 486px #FFF, 1180px 494px #FFF, 741px 1469px #FFF, 900px 654px #FFF, 1759px 1027px #FFF, 1389px 353px #FFF, 1765px 772px #FFF, 37px 1225px #FFF, 408px 364px #FFF, 1159px 1582px #FFF, 266px 1672px #FFF, 1276px 872px #FFF, 426px 1558px #FFF, 1396px 533px #FFF, 1235px 1381px #FFF, 1993px 776px #FFF, 217px 215px #FFF, 572px 250px #FFF, 1919px 1664px #FFF, 539px 557px #FFF, 772px 93px #FFF, 247px 1369px #FFF, 499px 746px #FFF, 1795px 1901px #FFF, 1179px 1362px #FFF, 1308px 1557px #FFF, 1424px 1949px #FFF, 77px 1279px #FFF, 1866px 1340px #FFF, 238px 165px #FFF, 931px 209px #FFF, 482px 1653px #FFF, 499px 536px #FFF, 961px 414px #FFF, 1890px 573px #FFF, 1278px 830px #FFF, 805px 486px #FFF, 987px 686px #FFF, 1188px 681px #FFF, 621px 1912px #FFF, 546px 172px #FFF, 1422px 589px #FFF, 1685px 1325px #FFF, 1666px 429px #FFF, 1611px 217px #FFF, 1096px 1614px #FFF, 1910px 1745px #FFF, 1768px 617px #FFF, 1871px 1191px #FFF, 1524px 1372px #FFF, 1977px 1764px #FFF, 1725px 1200px #FFF, 1609px 153px #FFF, 75px 393px #FFF, 1091px 1827px #FFF, 1219px 588px #FFF, 369px 774px #FFF, 1599px 721px #FFF, 807px 1133px #FFF, 1907px 93px #FFF, 1004px 209px #FFF, 1622px 451px #FFF, 1331px 932px #FFF, 1390px 1300px #FFF, 1116px 1660px #FFF, 1592px 1141px #FFF, 1371px 267px #FFF, 943px 153px #FFF, 1271px 294px #FFF, 1619px 1763px #FFF, 3px 1855px #FFF, 525px 979px #FFF, 1206px 431px #FFF, 552px 1062px #FFF, 115px 138px #FFF, 1871px 1575px #FFF, 991px 1205px #FFF, 1216px 1322px #FFF, 56px 231px #FFF, 302px 1177px #FFF, 1621px 430px #FFF, 151px 1288px #FFF, 1210px 614px #FFF, 1350px 1899px #FFF, 1321px 1614px #FFF, 691px 1728px #FFF, 1289px 272px #FFF, 1641px 1990px #FFF, 1629px 1202px #FFF, 771px 868px #FFF, 808px 1407px #FFF, 1763px 748px #FFF, 903px 468px #FFF, 827px 636px #FFF, 689px 999px #FFF, 308px 633px #FFF, 1187px 1049px #FFF, 1810px 948px #FFF, 1529px 1516px #FFF, 430px 768px #FFF, 752px 223px #FFF, 756px 1611px #FFF, 1083px 195px #FFF, 1937px 956px #FFF, 1378px 1223px #FFF, 1226px 1620px #FFF, 689px 389px #FFF, 1492px 1049px #FFF, 1779px 1832px #FFF, 8px 750px #FFF, 149px 791px #FFF, 1722px 1962px #FFF, 1973px 811px #FFF, 664px 1430px #FFF, 1855px 243px #FFF, 818px 1463px #FFF, 540px 271px #FFF, 593px 899px #FFF, 1390px 264px #FFF, 791px 1076px #FFF, 333px 1855px #FFF, 815px 1622px #FFF, 525px 1922px #FFF, 1855px 1308px #FFF, 789px 1599px #FFF, 754px 1823px #FFF, 1040px 148px #FFF, 1791px 915px #FFF, 857px 1179px #FFF, 1242px 1721px #FFF, 903px 1076px #FFF, 1673px 1392px #FFF, 173px 1942px #FFF, 127px 561px #FFF, 1261px 712px #FFF, 1343px 1947px #FFF, 469px 1145px #FFF;
    }

    #stars3 {
      position: absolute;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 375px 602px #FFF, 1585px 289px #FFF, 897px 1724px #FFF, 1325px 1887px #FFF, 1611px 604px #FFF, 1072px 261px #FFF, 28px 1999px #FFF, 1731px 200px #FFF, 381px 1473px #FFF, 1156px 1176px #FFF, 219px 1795px #FFF, 442px 325px #FFF, 173px 1343px #FFF, 1038px 1774px #FFF, 763px 89px #FFF, 1181px 1129px #FFF, 1187px 1712px #FFF, 1566px 1017px #FFF, 180px 1187px #FFF, 260px 1775px #FFF, 1351px 1532px #FFF, 563px 405px #FFF, 1601px 1826px #FFF, 1615px 863px #FFF, 1920px 1145px #FFF, 1980px 1010px #FFF, 770px 1807px #FFF, 1865px 115px #FFF, 862px 1016px #FFF, 1546px 384px #FFF, 1405px 459px #FFF, 1646px 595px #FFF, 384px 1739px #FFF, 1796px 782px #FFF, 1430px 1861px #FFF, 362px 1393px #FFF, 702px 912px #FFF, 189px 1546px #FFF, 1350px 960px #FFF, 311px 684px #FFF, 1197px 1854px #FFF, 974px 394px #FFF, 1049px 509px #FFF, 959px 695px #FFF, 1170px 326px #FFF, 1312px 773px #FFF, 1295px 1358px #FFF, 888px 358px #FFF, 1299px 429px #FFF, 1826px 1570px #FFF, 176px 231px #FFF, 389px 1915px #FFF, 571px 529px #FFF, 1182px 1500px #FFF, 348px 667px #FFF, 1023px 612px #FFF, 1528px 1572px #FFF, 219px 1810px #FFF, 1548px 1752px #FFF, 624px 1247px #FFF, 1760px 725px #FFF, 1474px 577px #FFF, 101px 708px #FFF, 1707px 1508px #FFF, 558px 820px #FFF, 1735px 849px #FFF, 254px 1098px #FFF, 1588px 574px #FFF, 545px 749px #FFF, 759px 1772px #FFF, 1064px 84px #FFF, 1739px 1687px #FFF, 819px 1651px #FFF, 1209px 1400px #FFF, 180px 1170px #FFF, 577px 695px #FFF, 1164px 564px #FFF, 1459px 878px #FFF, 479px 1715px #FFF, 1259px 1987px #FFF, 1072px 833px #FFF, 328px 1384px #FFF, 797px 227px #FFF, 414px 942px #FFF, 1774px 1775px #FFF, 1860px 664px #FFF, 1753px 1375px #FFF, 313px 444px #FFF, 1276px 363px #FFF, 165px 1018px #FFF, 1826px 1960px #FFF, 977px 1212px #FFF, 911px 1873px #FFF, 1840px 1459px #FFF, 833px 620px #FFF, 1070px 127px #FFF, 1809px 1846px #FFF, 694px 92px #FFF, 1729px 1726px #FFF, 613px 272px #FFF;
      animation: animStar 150s linear infinite;
    }

    #stars3:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 375px 602px #FFF, 1585px 289px #FFF, 897px 1724px #FFF, 1325px 1887px #FFF, 1611px 604px #FFF, 1072px 261px #FFF, 28px 1999px #FFF, 1731px 200px #FFF, 381px 1473px #FFF, 1156px 1176px #FFF, 219px 1795px #FFF, 442px 325px #FFF, 173px 1343px #FFF, 1038px 1774px #FFF, 763px 89px #FFF, 1181px 1129px #FFF, 1187px 1712px #FFF, 1566px 1017px #FFF, 180px 1187px #FFF, 260px 1775px #FFF, 1351px 1532px #FFF, 563px 405px #FFF, 1601px 1826px #FFF, 1615px 863px #FFF, 1920px 1145px #FFF, 1980px 1010px #FFF, 770px 1807px #FFF, 1865px 115px #FFF, 862px 1016px #FFF, 1546px 384px #FFF, 1405px 459px #FFF, 1646px 595px #FFF, 384px 1739px #FFF, 1796px 782px #FFF, 1430px 1861px #FFF, 362px 1393px #FFF, 702px 912px #FFF, 189px 1546px #FFF, 1350px 960px #FFF, 311px 684px #FFF, 1197px 1854px #FFF, 974px 394px #FFF, 1049px 509px #FFF, 959px 695px #FFF, 1170px 326px #FFF, 1312px 773px #FFF, 1295px 1358px #FFF, 888px 358px #FFF, 1299px 429px #FFF, 1826px 1570px #FFF, 176px 231px #FFF, 389px 1915px #FFF, 571px 529px #FFF, 1182px 1500px #FFF, 348px 667px #FFF, 1023px 612px #FFF, 1528px 1572px #FFF, 219px 1810px #FFF, 1548px 1752px #FFF, 624px 1247px #FFF, 1760px 725px #FFF, 1474px 577px #FFF, 101px 708px #FFF, 1707px 1508px #FFF, 558px 820px #FFF, 1735px 849px #FFF, 254px 1098px #FFF, 1588px 574px #FFF, 545px 749px #FFF, 759px 1772px #FFF, 1064px 84px #FFF, 1739px 1687px #FFF, 819px 1651px #FFF, 1209px 1400px #FFF, 180px 1170px #FFF, 577px 695px #FFF, 1164px 564px #FFF, 1459px 878px #FFF, 479px 1715px #FFF, 1259px 1987px #FFF, 1072px 833px #FFF, 328px 1384px #FFF, 797px 227px #FFF, 414px 942px #FFF, 1774px 1775px #FFF, 1860px 664px #FFF, 1753px 1375px #FFF, 313px 444px #FFF, 1276px 363px #FFF, 165px 1018px #FFF, 1826px 1960px #FFF, 977px 1212px #FFF, 911px 1873px #FFF, 1840px 1459px #FFF, 833px 620px #FFF, 1070px 127px #FFF, 1809px 1846px #FFF, 694px 92px #FFF, 1729px 1726px #FFF, 613px 272px #FFF;
    }

    #title {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      text-align: center;
      font-family: "lato", sans-serif;
      font-weight: 300;
      font-size: 50px;
      letter-spacing: 10px;
      margin-top: -60px;
      padding-left: 10px;
    }

    #title span {
      background: -webkit-linear-gradient(white, #38495a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @keyframes animStar {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-2000px);
      }
    }

    .demo {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20rem;
      height: 20rem;
      margin-left: -10rem;
      margin-top: -10rem;
      perspective: 1000px;
      transform-style: preserve-3d;
      animation: rotateReverse 2s infinite linear;
    }

    .demo__content {
      position: relative;
      height: 100%;
      transform-style: preserve-3d;
      animation: rotate 2s infinite linear;
      transform: rotateX(10deg) rotateZ(0);
    }

    .demo__content:before {
      content: "";
      z-index: -1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      /*box-shadow: 0 5rem 10rem rgba(0, 0, 0, 0.4);*/
    }

    @keyframes rotate {
      100% {
        transform: rotateX(10deg) rotateZ(360deg);
      }
    }

    @keyframes rotateReverse {
      100% {
        transform: rotateZ(-360deg);
      }
    }

    @keyframes shiny {
      25% {
        transform: translateY(-100%);
      }
      50% {
        transform: translateY(60rem);
      }
      50.1% {
        transform: translate(75%, 60rem);
      }
      75% {
        transform: translate(75%, -100%);
      }
    }

    .demo__img {
      overflow: hidden;
      position: absolute;
      left: -0.55rem;
      top: 0.15rem;
      width: 104%;
      height: 100%;
      transform: translateZ(5rem) scale(0.95);
    }

    .demo__img:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url(../../assets/images/ganotrixbaba.png);
      background-size: cover;
    }

    .demo__img:after {
      content: "";
      z-index: 2;
      overflow: hidden;
      position: absolute;
      left: -20%;
      top: 0;
      width: 80%;
      padding-bottom: 80%;
      border-radius: 50%;
      background: radial-gradient(ellipse farthest-corner at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
      transform: translateY(-100%);
      animation: shiny 2s infinite ease-in-out;
    }

  `],
  encapsulation: ViewEncapsulation.Emulated
})

export class NotFoundComponent implements OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)';
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.background = '';
    }
  }
}


