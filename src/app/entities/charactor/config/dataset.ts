import type { Charactor } from "@/app/entities/charactor/model";

// NOTE: キャラクターデータセット自体は個別のtsファイルで用意し、importする
import { shujinkoKaimetsu } from "./charactorData/2001_shujinkoKaimetsu";
import { shujinkoSongo } from "./charactorData/2002_shujinkoSongo";
import { himeko } from "./charactorData/2003_himeko";
import { veruto } from "./charactorData/2004_veruto";
import { buronya } from "./charactorData/2005_buronya";
import { jepado } from "./charactorData/2006_jepado";
import { kurara } from "./charactorData/2007_kurara";
import { genkyo } from "./charactorData/2008_genkyo";
import { byakuro } from "./charactorData/2009_byakuro";
import { zere } from "./charactorData/2010_zere";
import { mitsukinanoka } from "./charactorData/2011_mitsukinanoka";
import { tanko } from "./charactorData/2012_tanko";
import { aran } from "./charactorData/2013_aran";
import { aster } from "./charactorData/2014_aster";
import { helta } from "./charactorData/2015_helta";
import { natasha } from "./charactorData/2016_natasha";
import { sebal } from "./charactorData/2017_sebal";
import { pera } from "./charactorData/2018_pera";
import { sanpo } from "./charactorData/2019_sanpo";
import { huck } from "./charactorData/2020_huck";
import { susyo } from "./charactorData/2021_susyo";
import { seijaku } from "./charactorData/2022_seijaku";
import { teiun } from "./charactorData/2023_teiun";
import { keigen } from "./charactorData/2024_keigen";
import { ginro } from "./charactorData/2025_ginro";
import { rasetsu } from "./charactorData/2026_rasetsu";
import { gyoku } from "./charactorData/2027_gyoku";
import { jin } from "./charactorData/2028_jin";
import { kafka } from "./charactorData/2029_kafka";
import { ruka } from "./charactorData/2030_ruka";
import { tankoIngetsu } from "./charactorData/2031_tankoIngetsu";
import { fugen } from "./charactorData/2032_fugen";
import { rinkusu } from "./charactorData/2033_rinkusu";
import { keiryu } from "./charactorData/2034_keiryu";
import { topazu } from "./charactorData/2035_topazu";
import { keinaifun } from "./charactorData/2036_keinaifun";
import { fofo } from "./charactorData/2037_fofo";
import { arujenthi } from "./charactorData/2038_arujenthi";
import { kana } from "./charactorData/2039_kana";
import { ruanmei } from "./charactorData/2040_ruanmei";

export const charactorDataset: Charactor[] = [
  shujinkoKaimetsu,
  shujinkoSongo,
  himeko,
  veruto,
  buronya,
  jepado, 
  kurara,
  genkyo,
  byakuro,
  zere,
  mitsukinanoka,
  tanko,
  aran,
  aster,
  helta,
  natasha,
  sebal,
  pera,
  sanpo,
  huck,
  susyo,
  seijaku,
  teiun,
  keigen,
  ginro,
  rasetsu,
  gyoku,
  jin,
  kafka,
  ruka,
  tankoIngetsu,
  fugen,
  rinkusu,
  keiryu,
  topazu,
  keinaifun,
  fofo,
  arujenthi,
  kana,
  ruanmei
];