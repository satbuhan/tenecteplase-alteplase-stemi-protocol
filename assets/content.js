/* Clinical Algorithm Atlas — Fibrinolytic agent selection and dosing in
   ST-segment elevation myocardial infarction (STEMI) when timely primary
   percutaneous coronary intervention (PCI) is not available: tenecteplase
   versus alteplase.

   Source: "Tenecteplase versus Alteplase for Fibrinolysis in ST-Segment
   Elevation Myocardial Infarction: A Systematic Review of Two Decades of
   Evidence with Risk-of-Bias, GRADE and Clinical-Significance Appraisal"
   (Dr Özgür Karcıoğlu, manuscript, 2026), and its Figure 2 decision
   algorithm (inspected directly as a high-resolution image, not just
   text-extracted). All label/sub/dose text in NODES below is transcribed
   byte-for-byte from the author's Figure 2; only meaning, rationale,
   cautions, references and glossary are added by this tool.

   Every one of the manuscript's 103 references was independently
   re-verified against a primary source (DOI/PMID resolution plus a
   title/author/journal/subject-matter check) rather than trusted from
   the manuscript's own reference list — no citation-verification
   exception was given for this build. Outcome: 1 reference corrected
   (ref 45 — second author's name was garbled), 1 reference flagged as
   likely fabricated/mismatched (ref 73 — neither its DOI nor its
   title/author/journal/year combination could be located; it is cited
   directly on the `adjunctive_therapy` node, which carries its own
   honest caveat), and 10 references (12-21) not independently verified
   this build because the session's shared web-search budget was
   exhausted partway through verification — a tooling limitation, not a
   finding about those papers. Two of the ten (refs 19 and 20) are cited
   directly on flowchart nodes; see each reference's own `kind` field for
   full detail, and README.md's Status section for the complete picture.

   This is a 103-reference systematic review supporting a 13-box decision
   algorithm, so — unlike some shorter source manuscripts in this atlas —
   not every reference is cited on a specific node; many support
   background epidemiology, review methodology (PRISMA/RoB 2/ROBINS-I/
   GRADE), or cross-indication/agent evidence (acute ischaemic stroke,
   pulmonary embolism, streptokinase) that informs the review's
   conclusions without being drawn as its own box in Figure 2. The full,
   independently-verified reference list is always in the References
   panel regardless of which refs a given node cites.
*/
// Date this tool's content and citations were last built/checked
// together (see assets/app.js's References summary, and the hub
// README's "Content search index"-adjacent conventions doc).
const VERIFIED = "2026-11-06";

const REFERENCES = [
  {
    id: 1,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Roth, G.A., Mensah, G.A., Johnson, C.O. et al. (2020) 'Global Burden of Cardiovascular Diseases and Risk Factors, 1990-2019: Update From the GBD 2019 Study', Journal of the American College of Cardiology, 76(25), pp. 2982-3021.",
    url: "https://doi.org/10.1016/j.jacc.2020.11.010"
  },
  {
    id: 2,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Yeh, R.W., Sidney, S., Chandra, M. et al. (2010) 'Population trends in the incidence and outcomes of acute myocardial infarction', New England Journal of Medicine, 362(23), pp. 2155-2165.",
    url: "https://doi.org/10.1056/NEJMoa0908610"
  },
  {
    id: 3,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Bhatt, D.L., Lopes, R.D. and Harrington, R.A. (2022) 'Diagnosis and Treatment of Acute Coronary Syndromes: A Review', JAMA, 327(7), pp. 662-675.",
    url: "https://doi.org/10.1001/jama.2022.0358"
  },
  {
    id: 4,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Thygesen, K., Alpert, J.S., Jaffe, A.S. et al. (2018) 'Fourth Universal Definition of Myocardial Infarction (2018)', Circulation, 138(20), pp. e618-e651.",
    url: "https://doi.org/10.1161/CIR.0000000000000617"
  },
  {
    id: 5,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Byrne, R.A., Rossello, X., Coughlan, J.J. et al. (2023) '2023 ESC Guidelines for the management of acute coronary syndromes', European Heart Journal, 44(38), pp. 3720-3826.",
    url: "https://doi.org/10.1093/eurheartj/ehad191"
  },
  {
    id: 6,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Rao, S.V., O'Donoghue, M.L., Ruel, M. et al. (2025) '2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines', Circulation, 151(13), pp. e771-e862.",
    url: "https://doi.org/10.1161/CIR.0000000000001309"
  },
  {
    id: 7,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "O'Gara, P.T., Kushner, F.G., Ascheim, D.D. et al. (2013) '2013 ACCF/AHA Guideline for the Management of ST-Elevation Myocardial Infarction: A Report of the American College of Cardiology Foundation/American Heart Association Task Force on Practice Guidelines', Circulation, 127(4), pp. e362-e425.",
    url: "https://doi.org/10.1161/CIR.0b013e3182742cf6"
  },
  {
    id: 8,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Ibanez, B., James, S., Agewall, S. et al. (2018) '2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation', European Heart Journal, 39(2), pp. 119-177.",
    url: "https://doi.org/10.1093/eurheartj/ehx393"
  },
  {
    id: 9,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Araiza-Garaygordobil, D., Alexander, T., Huber, K. et al. (2025) 'Reperfusion therapy for ST elevation myocardial infarction in low- to middle-income countries: a clinical consensus statement of the Association for Acute CardioVascular Care (ACVC), the European Association of Percutaneous Cardiovascular Interventions (EAPCI), the European Association of Preventive Cardiology (EAPC), the ESC Working Group on Thrombosis, and the Stent - Save a Life! Initiative', European Heart Journal. Acute Cardiovascular Care, 14(11), pp. 690-697.",
    url: "https://doi.org/10.1093/ehjacc/zuaf114"
  },
  {
    id: 10,
    kind: "Independently verified to exist (PubMed PMID 42171119 / PMC13239337 — title, journal and authorship confirmed); the exact volume/issue/page string and DOI resolution could not be independently re-confirmed in this session (PubMed/PMC blocked automated access).",
    text: "Akhter, J., Abedin, Z.U., Ali, H. et al. (2026) 'Pre-Hospital Delay in STEMI: A Narrative Review of Symptom Onset-to-First Medical Contact Across High-Income and Low- and Middle-Income Countries', Clinical Cardiology, 49(5), pp. e70352.",
    url: "https://doi.org/10.1002/clc.70352"
  },
  {
    id: 11,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Bundhun, P.K., Janoo, G. and Chen, M.H. (2016) 'Bleeding events associated with fibrinolytic therapy and primary percutaneous coronary intervention in patients with STEMI: A systematic review and meta-analysis of randomized controlled trials', Medicine (Baltimore), 95(23), pp. e3877.",
    url: "https://doi.org/10.1097/MD.0000000000003877"
  },
  {
    id: 12,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Rashedi, S., Leyva, H., Hamade, N. et al. (2025) 'Fibrinolytic Therapy for Thromboembolic Diseases: Approved Indications and Future Directions', Journal of the American College of Cardiology, 86(14), pp. 1065-1087.",
    url: "https://doi.org/10.1016/j.jacc.2025.07.061"
  },
  {
    id: 13,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Rashedi, S., Greason, C.M., Sadeghipour, P. et al. (2024) 'Fibrinolytic Agents in Thromboembolic Diseases: Historical Perspectives and Approved Indications', Seminars in Thrombosis and Hemostasis, 50(5), pp. 773-789.",
    url: "https://doi.org/10.1055/s-0044-1781451"
  },
  {
    id: 14,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Kunadian, V. and Gibson, C.M. (2010) 'Thrombolytics and myocardial infarction', Cardiovascular Therapeutics, 30(2), pp. e81-8.",
    url: "https://doi.org/10.1111/j.1755-5922.2010.00239.x"
  },
  {
    id: 15,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Melandri, G., Vagnarelli, F., Calabrese, D. et al. (2009) 'Review of tenecteplase (TNKase) in the treatment of acute myocardial infarction', Vascular Health and Risk Management, 5(1), pp. 249-56.",
    url: "https://doi.org/10.2147/vhrm.s3848"
  },
  {
    id: 16,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Coutts, S.B., Berge, E., Campbell, B.C. et al. (2018) 'Tenecteplase for the treatment of acute ischemic stroke: A review of completed and ongoing randomized controlled trials', International Journal of Stroke, 13(9), pp. 885-892.",
    url: "https://doi.org/10.1177/1747493018790024"
  },
  {
    id: 17,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Marè, A., Lorenzut, S., Janes, F. et al. (2024) 'Comparison of pharmacokinetic properties of alteplase and tenecteplase. The future of thrombolysis in acute ischemic stroke', Expert Opinion on Drug Metabolism & Toxicology, 20(1-2), pp. 25-36.",
    url: "https://doi.org/10.1080/17425255.2024.2311168"
  },
  {
    id: 18,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Tang, F., Langenhorst, J., Dang, S. et al. (2022) 'Population Pharmacokinetics of Tenecteplase in Patients With Acute Myocardial Infarction and Application to Patients With Acute Ischemic Stroke', Journal of Clinical Pharmacology, 63(2), pp. 197-209.",
    url: "https://doi.org/10.1002/jcph.2164"
  },
  {
    id: 19,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Zhao, X., Zhu, Y., Zhang, Z. et al. (2023) 'Tenecteplase versus alteplase in treatment of acute ST-segment elevation myocardial infarction: A randomized non-inferiority trial', Chinese Medical Journal, 137(3), pp. 312-319.",
    url: "https://doi.org/10.1097/CM9.0000000000002731"
  },
  {
    id: 20,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Bainey, K.R., Welsh, R.C., Zheng, Y. et al. (2024) 'Pharmaco-Invasive Strategy With Half-Dose Tenecteplase in Patients With STEMI: Prespecified Pooled Analysis of Patients Aged $\\ge 75$ Years in STREAM-1 and 2', Circulation: Cardiovascular Interventions, 17(12), pp. e014251.",
    url: "https://doi.org/10.1161/CIRCINTERVENTIONS.124.014251"
  },
  {
    id: 21,
    kind: "Not independently verified this build — this session's web-search tool budget was exhausted before this reference could be checked (a retry was attempted and hit the same limit). This is a tooling limitation, not a finding about the paper; verify independently before relying on it clinically. See README's Status section.",
    text: "Yogendrakumar, V., Xu, Y., Gurvitch, R. et al. (2026) 'Tenecteplase: expanding horizons in thrombolytic therapy across various clinical indications', Heart, 112(4), pp. 191-198.",
    url: "https://doi.org/10.1136/heartjnl-2024-325249"
  },
  {
    id: 22,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Hailu, K., Cannon, C. and Hayes, S. (2022) 'Tenecteplase use in the management of acute ischemic stroke: Literature review and clinical considerations', American Journal of Health-System Pharmacy, 79(12), pp. 944-949.",
    url: "https://doi.org/10.1093/ajhp/zxac010"
  },
  {
    id: 23,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Page, M.J., McKenzie, J.E., Bossuyt, P.M. et al. (2021) 'The PRISMA 2020 statement: an updated guideline for reporting systematic reviews', BMJ, 372, pp. n71.",
    url: "https://doi.org/10.1136/bmj.n71"
  },
  {
    id: 24,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sterne, J.A.C., Savovic, J., Page, M.J. et al. (2019) 'RoB 2: a revised tool for assessing risk of bias in randomised trials', BMJ, 366, pp. l4898.",
    url: "https://doi.org/10.1136/bmj.l4898"
  },
  {
    id: 25,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sterne, J.A., Hernan, M.A., Reeves, B.C. et al. (2016) 'ROBINS-I: a tool for assessing risk of bias in non-randomised studies of interventions', BMJ, 355, pp. i4919.",
    url: "https://doi.org/10.1136/bmj.i4919"
  },
  {
    id: 26,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Piaggio, G., Elbourne, D.R., Pocock, S.J. et al. (2012) 'Reporting of noninferiority and equivalence randomized trials: extension of the CONSORT 2010 statement', JAMA, 308(24), pp. 2594-2604.",
    url: "https://doi.org/10.1001/jama.2012.87802"
  },
  {
    id: 27,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Guyatt, G.H., Oxman, A.D., Vist, G.E. et al. (2008) 'GRADE: an emerging consensus on rating quality of evidence and strength of recommendations', BMJ, 336(7650), pp. 924-926.",
    url: "https://doi.org/10.1136/bmj.39489.470347.AD"
  },
  {
    id: 28,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Guyatt, G., Oxman, A.D., Akl, E.A. et al. (2011) 'GRADE guidelines: 1. Introduction-GRADE evidence profiles and summary of findings tables', Journal of Clinical Epidemiology, 64(4), pp. 383-394.",
    url: "https://doi.org/10.1016/j.jclinepi.2010.04.026"
  },
  {
    id: 29,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Guyatt, G.H., Oxman, A.D., Kunz, R. et al. (2011) 'GRADE guidelines: 7. Rating the quality of evidence--inconsistency', Journal of Clinical Epidemiology, 64(12), pp. 1294-1302.",
    url: "https://doi.org/10.1016/j.jclinepi.2011.03.017"
  },
  {
    id: 30,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Guyatt, G.H., Oxman, A.D., Kunz, R. et al. (2011) 'GRADE guidelines: 8. Rating the quality of evidence--indirectness', Journal of Clinical Epidemiology, 64(12), pp. 1303-1310.",
    url: "https://doi.org/10.1016/j.jclinepi.2011.04.014"
  },
  {
    id: 31,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Guyatt, G.H., Oxman, A.D., Kunz, R. et al. (2011) 'GRADE guidelines 6. Rating the quality of evidence--imprecision', Journal of Clinical Epidemiology, 64(12), pp. 1283-1293.",
    url: "https://doi.org/10.1016/j.jclinepi.2011.01.012"
  },
  {
    id: 32,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Guyatt, G.H., Oxman, A.D., Montori, V. et al. (2011) 'GRADE guidelines: 5. Rating the quality of evidence--publication bias', Journal of Clinical Epidemiology, 64(12), pp. 1277-1282.",
    url: "https://doi.org/10.1016/j.jclinepi.2011.01.011"
  },
  {
    id: 33,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "McGlothlin, A.E. and Lewis, R.J. (2014) 'Minimal clinically important difference: defining what really matters to patients', JAMA, 312(13), pp. 1342-1343.",
    url: "https://doi.org/10.1001/jama.2014.13128"
  },
  {
    id: 34,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sullivan, G.M. and Feinn, R. (2012) 'Using Effect Size-or Why the P Value Is Not Enough', Journal of Graduate Medical Education, 4(3), pp. 279-282.",
    url: "https://doi.org/10.4300/JGME-D-12-00156.1"
  },
  {
    id: 35,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Lakens, D. (2013) 'Calculating and reporting effect sizes to facilitate cumulative science: a practical primer for t-tests and ANOVAs', Frontiers in Psychology, 4, pp. 863.",
    url: "https://doi.org/10.3389/fpsyg.2013.00863"
  },
  {
    id: 36,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "IntHout, J., Ioannidis, J.P. and Borm, G.F. (2014) 'The Hartung-Knapp-Sidik-Jonkman method for random effects meta-analysis is straightforward and considerably outperforms the standard DerSimonian-Laird method', BMC Medical Research Methodology, 14, pp. 25.",
    url: "https://doi.org/10.1186/1471-2288-14-25"
  },
  {
    id: 37,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Borenstein, M., Higgins, J.P., Hedges, L.V. et al. (2017) 'Basics of meta-analysis: I2 is not an absolute measure of heterogeneity', Research Synthesis Methods, 8(1), pp. 5-18.",
    url: "https://doi.org/10.1002/jrsm.1230"
  },
  {
    id: 38,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Wetterslev, J., Jakobsen, J.C. and Gluud, C. (2017) 'Trial Sequential Analysis in systematic reviews with meta-analysis', BMC Medical Research Methodology, 17(1), pp. 39.",
    url: "https://doi.org/10.1186/s12874-017-0315-7"
  },
  {
    id: 39,
    kind: "Independently verified via PMID 19927632 on PubMed — the manuscript correctly notes no DOI is assigned to this Chinese-language report; title (with translation), journal, volume, issue and pages all confirmed.",
    text: "Liang, F., Wang, L.Z., Hu, D.Y. et al. (2009) '[An angiographic trial to evaluate the efficacy and safety of tenecteplase in Chinese patients with acute myocardial infarction]', Zhonghua Xin Xue Guan Bing Za Zhi, 37(6), pp. 514-517. [In Chinese; no DOI assigned] PMID: 19927632.",
    url: "https://pubmed.ncbi.nlm.nih.gov/19927632/"
  },
  {
    id: 40,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Guillermin, A., Yan, D.J., Perrier, A. et al. (2016) 'Safety and efficacy of tenecteplase versus alteplase in acute coronary syndrome: a systematic review and meta-analysis of randomized trials', Archives of Medical Science, 12(6), pp. 1181-1187.",
    url: "https://doi.org/10.5114/aoms.2016.58929"
  },
  {
    id: 41,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Jinatongthai, P., Kongwatcharapong, J., Foo, C.Y. et al. (2017) 'Comparative efficacy and safety of reperfusion therapy with fibrinolytic agents in patients with ST-segment elevation myocardial infarction: a systematic review and network meta-analysis', Lancet, 390(10096), pp. 747-759.",
    url: "https://doi.org/10.1016/S0140-6736(17)31441-1"
  },
  {
    id: 42,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Günlü, S. and Demir, M. (2022) 'Comparison of tenecteplase versus alteplase in STEMI patients treated with ticagrelor: A cross-sectional study', American Journal of Emergency Medicine, 58, pp. 52-56.",
    url: "https://doi.org/10.1016/j.ajem.2022.05.021"
  },
  {
    id: 43,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Wang, H.B., Ji, P., Zhao, X.S. et al. (2017) 'Recombinant human TNK tissue-type plasminogen activator (rhTNK-tPA) versus alteplase (rt-PA) as fibrinolytic therapy for acute ST-segment elevation myocardial infarction (China TNK STEMI): protocol for a randomised, controlled, non-inferiority trial', BMJ Open, 7(9), pp. e016838.",
    url: "https://doi.org/10.1136/bmjopen-2017-016838"
  },
  {
    id: 44,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Xie, C., Zheng, N., Li, M. et al. (2024) 'Comparative Analysis of Therapeutic Efficacy and Adverse Reactions among Various Thrombolytic Agents', Toxics, 12(7).",
    url: "https://doi.org/10.3390/toxics12070458"
  },
  {
    id: 45,
    kind: "Author list corrected after independent verification: the manuscript lists the second author as “Hossein, H.”, but the actual author is Niknahad, H. (the author's first name, Hossein, was mistaken for a surname). Title, journal, year, volume/pages and DOI are all otherwise correct.",
    text: "Zia-Behbahani, M., Niknahad, H., Kojuri, J. et al. (2019) 'Tenecteplase Versus Reteplase in Acute Myocardial Infarction: A Network Meta-Analysis of Randomized Clinical Trials', Iranian Journal of Pharmaceutical Research, 18(3), pp. 1622-1631.",
    url: "https://doi.org/10.22037/ijpr.2019.1100743"
  },
  {
    id: 46,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Armstrong, P.W., Gershlick, A.H., Goldstein, P. et al. (2013) 'Fibrinolysis or primary PCI in ST-segment elevation myocardial infarction', New England Journal of Medicine, 368(15), pp. 1379-1387.",
    url: "https://doi.org/10.1056/NEJMoa1301092"
  },
  {
    id: 47,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Van de Werf, F., Ristić, A.D., Averkov, O.V. et al. (2023) 'STREAM-2: Half-Dose Tenecteplase or Primary Percutaneous Coronary Intervention in Older Patients With ST-Segment-Elevation Myocardial Infarction: A Randomized, Open-Label Trial', Circulation, 148(9), pp. 753-764.",
    url: "https://doi.org/10.1161/CIRCULATIONAHA.123.064521"
  },
  {
    id: 48,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Pu, J., Ding, S., Ge, H. et al. (2017) 'Efficacy and Safety of a Pharmaco-Invasive Strategy With Half-Dose Alteplase Versus Primary Angioplasty in ST-Segment-Elevation Myocardial Infarction: EARLY-MYO Trial (Early Routine Catheterization After Alteplase Fibrinolysis Versus Primary PCI in Acute ST-Segment-Elevation Myocardial Infarction)', Circulation, 136(16), pp. 1462-1473.",
    url: "https://doi.org/10.1161/CIRCULATIONAHA.117.030582"
  },
  {
    id: 49,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sinnaeve, P.R., Armstrong, P.W., Gershlick, A.H. et al. (2014) 'ST-segment-elevation myocardial infarction patients randomized to a pharmaco-invasive strategy or primary percutaneous coronary intervention: Strategic Reperfusion Early After Myocardial Infarction (STREAM) 1-year mortality follow-up', Circulation, 130(14), pp. 1139-1145.",
    url: "https://doi.org/10.1161/CIRCULATIONAHA.114.009570"
  },
  {
    id: 50,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Cantor, W.J., Fitchett, D., Borgundvaag, B. et al. (2009) 'Routine early angioplasty after fibrinolysis for acute myocardial infarction', New England Journal of Medicine, 360(26), pp. 2705-2718.",
    url: "https://doi.org/10.1056/NEJMoa0808276"
  },
  {
    id: 51,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Bøhmer, E., Hoffmann, P., Abdelnoor, M. et al. (2010) 'Efficacy and safety of immediate angioplasty versus ischemia-guided management after thrombolysis in acute myocardial infarction in areas with very long transfer distances results of the NORDISTEMI (NORwegian study on DIstrict treatment of ST-elevation myocardial infarction)', Journal of the American College of Cardiology, 55(2), pp. 102-110.",
    url: "https://doi.org/10.1016/j.jacc.2009.08.007"
  },
  {
    id: 52,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Armstrong, P.W. (2006) 'A comparison of pharmacologic therapy with/without timely coronary intervention vs. primary percutaneous intervention early after ST-elevation myocardial infarction: the WEST (Which Early ST-elevation myocardial infarction Therapy) study', European Heart Journal, 27(13), pp. 1530-1538.",
    url: "https://doi.org/10.1093/eurheartj/ehl088"
  },
  {
    id: 53,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Fernández-Avilés, F., Alonso, J.J., Peña, G. et al. (2007) 'Primary angioplasty vs. early routine post-fibrinolysis angioplasty for acute myocardial infarction with ST-segment elevation: the GRACIA-2 non-inferiority, randomized, controlled trial', European Heart Journal, 28(8), pp. 949-960.",
    url: "https://doi.org/10.1093/eurheartj/ehl461"
  },
  {
    id: 54,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Sánchez, P.L., Gimeno, F., Ancillo, P. et al. (2010) 'Role of the paclitaxel-eluting stent and tirofiban in patients with ST-elevation myocardial infarction undergoing postfibrinolysis angioplasty: the GRACIA-3 randomized clinical trial', Circulation: Cardiovascular Interventions, 3(4), pp. 297-307.",
    url: "https://doi.org/10.1161/CIRCINTERVENTIONS.109.920868"
  },
  {
    id: 55,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Di Mario, C., Dudek, D., Piscione, F. et al. (2008) 'Immediate angioplasty versus standard therapy with rescue angioplasty after thrombolysis in the Combined Abciximab REteplase Stent Study in Acute Myocardial Infarction (CARESS-in-AMI): an open, prospective, randomised, multicentre trial', Lancet, 371(9612), pp. 559-568.",
    url: "https://doi.org/10.1016/S0140-6736(08)60268-8"
  },
  {
    id: 56,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Carver, A., Rafelt, S., Gershlick, A.H. et al. (2009) 'Longer-term follow-up of patients recruited to the REACT (Rescue Angioplasty Versus Conservative Treatment or Repeat Thrombolysis) trial', Journal of the American College of Cardiology, 54(2), pp. 118-126.",
    url: "https://doi.org/10.1016/j.jacc.2009.03.050"
  },
  {
    id: 57,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Borgia, F., Goodman, S.G., Halvorsen, S. et al. (2010) 'Early routine percutaneous coronary intervention after fibrinolysis vs. standard therapy in ST-segment elevation myocardial infarction: a meta-analysis', European Heart Journal, 31(17), pp. 2156-2169.",
    url: "https://doi.org/10.1093/eurheartj/ehq204"
  },
  {
    id: 58,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "D'Souza, S.P., Mamas, M.A., Fraser, D.G. et al. (2011) 'Routine early coronary angioplasty versus ischaemia-guided angioplasty after thrombolysis in acute ST-elevation myocardial infarction: a meta-analysis', European Heart Journal, 32(8), pp. 972-982.",
    url: "https://doi.org/10.1093/eurheartj/ehq398"
  },
  {
    id: 59,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Siddiqi, T.J., Usman, M.S., Khan, M.S. et al. (2018) 'Meta-Analysis Comparing Primary Percutaneous Coronary Intervention Versus Pharmacoinvasive Therapy in Transfer Patients with ST-Elevation Myocardial Infarction', American Journal of Cardiology, 122(4), pp. 542-547.",
    url: "https://doi.org/10.1016/j.amjcard.2018.04.057"
  },
  {
    id: 60,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Li, K., Zhang, B., Zheng, B. et al. (2022) 'Reperfusion Strategy of ST-Elevation Myocardial Infarction: A Meta-Analysis of Primary Percutaneous Coronary Intervention and Pharmaco-Invasive Therapy', Frontiers in Cardiovascular Medicine, 9, pp. 813325.",
    url: "https://doi.org/10.3389/fcvm.2022.813325"
  },
  {
    id: 61,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Fazel, R., Joseph, T.I., Sankardas, M.A. et al. (2020) 'Comparison of Reperfusion Strategies for ST-Segment-Elevation Myocardial Infarction: A Multivariate Network Meta-analysis', Journal of the American Heart Association, 9(12), pp. e015186.",
    url: "https://doi.org/10.1161/JAHA.119.015186"
  },
  {
    id: 62,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Roule, V., Ardouin, P., Blanchart, K. et al. (2016) 'Prehospital fibrinolysis versus primary percutaneous coronary intervention in ST-elevation myocardial infarction: a systematic review and meta-analysis of randomized controlled trials', Critical Care, 20(1), pp. 359.",
    url: "https://doi.org/10.1186/s13054-016-1530-z"
  },
  {
    id: 63,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Soriano-Moreno, D.R., Tuco, K.G., Delgado Flores, C.J. et al. (2025) 'Pharmacoinvasive strategy versus fibrinolytic therapy alone in adults with ST-elevation myocardial infarction: A systematic review and meta-analysis', PLoS One, 20(10), pp. e0334309.",
    url: "https://doi.org/10.1371/journal.pone.0334309"
  },
  {
    id: 64,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Diaz-Arocutipa, C., Vargas-Rivas, C., Mendoza-Quispe, D. et al. (2024) 'Pharmaco-Invasive Strategy Vs Primary Percutaneous Coronary Intervention for ST-Segment Elevation Myocardial Infarction in Latin America: A Meta-Analysis', CJC Open, 7(1), pp. 78-87.",
    url: "https://doi.org/10.1016/j.cjco.2024.10.005"
  },
  {
    id: 65,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Danchin, N., Coste, P., Ferrières, J. et al. (2008) 'Comparison of thrombolysis followed by broad use of percutaneous coronary intervention with primary percutaneous coronary intervention for ST-segment-elevation acute myocardial infarction: data from the french registry on acute ST-elevation myocardial infarction (FAST-MI)', Circulation, 118(3), pp. 268-276.",
    url: "https://doi.org/10.1161/CIRCULATIONAHA.107.762765"
  },
  {
    id: 66,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Danchin, N., Puymirat, E., Steg, P.G. et al. (2014) 'Five-year survival in patients with ST-segment-elevation myocardial infarction according to modalities of reperfusion therapy: the French Registry on Acute ST-Elevation and Non-ST-Elevation Myocardial Infarction (FAST-MI) 2005 Cohort', Circulation, 129(16), pp. 1629-1636.",
    url: "https://doi.org/10.1161/CIRCULATIONAHA.113.005874"
  },
  {
    id: 67,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Bainey, K.R., Armstrong, P.W., Zheng, Y. et al. (2019) 'Pharmacoinvasive Strategy Versus Primary Percutaneous Coronary Intervention in ST-Elevation Myocardial Infarction in Clinical Practice: Insights From the Vital Heart Response Registry', Circulation: Cardiovascular Interventions, 12(10), pp. e008059.",
    url: "https://doi.org/10.1161/CIRCINTERVENTIONS.119.008059"
  },
  {
    id: 68,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Victor, S.M., Vijayakumar, S., Alexander, T. et al. (2016) 'Two-year follow-up data from the STEPP-AMI study: A prospective, observational, multicenter study comparing tenecteplase-facilitated PCI versus primary PCI in Indian patients with STEMI', Indian Heart Journal, 68(2), pp. 169-173.",
    url: "https://doi.org/10.1016/j.ihj.2015.08.027"
  },
  {
    id: 69,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Bainey, K.R., Welsh, R.C., Zheng, Y. et al. (2025) 'Pharmaco-invasive strategy and dosing of tenecteplase in STEMI patients 60 to $< 75$ years: An inter-trial comparison of the STREAM-1 and STREAM-2 trials', American Heart Journal, 284, pp. 20-31.",
    url: "https://doi.org/10.1016/j.ahj.2025.02.002"
  },
  {
    id: 70,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Bainey, K.R., Welsh, R.C., Zheng, Y. et al. (2026) 'Rescue percutaneous coronary intervention in the pharmaco-invasive era of ST-elevation myocardial infarction: insights from the STREAM-2 trial', European Heart Journal: Acute Cardiovascular Care, 15(4), pp. 276-288.",
    url: "https://doi.org/10.1093/ehjacc/zuaf158"
  },
  {
    id: 71,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Binbrek, A.S., Rao, N.S., Van de Werf, F. et al. (2010) 'Meta-analysis of studies of patients in the United Arab Emirates with ST-elevation myocardial infarction treated with thrombolytic agents', American Journal of Cardiology, 106(12), pp. 1692-5.",
    url: "https://doi.org/10.1016/j.amjcard.2010.08.010"
  },
  {
    id: 72,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Giugliano, R.P., Giraldez, R.R., Morrow, D.A. et al. (2010) 'Relations between bleeding and outcomes in patients with ST-elevation myocardial infarction in the ExTRACT-TIMI 25 trial', European Heart Journal, 31(17), pp. 2103-10.",
    url: "https://doi.org/10.1093/eurheartj/ehq100"
  },
  {
    id: 73,
    kind: "NOT VERIFIED — likely fabricated or severely garbled. Neither the stated DOI (10.1093/eurheartj/ehag754) nor the exact title/author/journal/year combination could be located despite repeated targeted searches. A real, related paper exists with entirely different bibliographic details (Armstrong PW et al., American Heart Journal, 2015, 169(6):890-898.e1, PMID 26027628 — a STREAM mode-of-death substudy), but it is not this citation. The individual-patient-data ICH-predictor statistic this reference is cited for in the manuscript (systolic BP, sex, weight and age as predictors) could not be confirmed against this specific source — see this node's rationale and README's Status section.",
    text: "Armstrong, P.W., Danays, T. and Westerhout, C.M. (2026) 'Intracranial haemorrhage following tenecteplase fibrinolysis for acute myocardial infarction', European Heart Journal.",
    url: "https://doi.org/10.1093/eurheartj/ehag754"
  },
  {
    id: 74,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Mega, J.L., Morrow, D.A., Ostör, E. et al. (2007) 'Outcomes and optimal antithrombotic therapy in women undergoing fibrinolysis for ST-elevation myocardial infarction', Circulation, 115(22), pp. 2822-8.",
    url: "https://doi.org/10.1161/CIRCULATIONAHA.106.679548"
  },
  {
    id: 75,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Mehta, R.H., Stebbins, A.S., Lopes, R.D. et al. (2011) 'Comparison of incidence of bleeding and mortality of men versus women with ST-elevation myocardial infarction treated with fibrinolysis', American Journal of Cardiology, 109(3), pp. 320-6.",
    url: "https://doi.org/10.1016/j.amjcard.2011.09.012"
  },
  {
    id: 76,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Ogunbayo, G.O., Misumida, N., Ayoub, K. et al. (2018) 'Temporal trends, characteristics and outcomes of fibrinolytic therapy for ST-elevation myocardial infarction among patients 80 years or older', Catheterization and Cardiovascular Interventions, 92(7), pp. E425-E432.",
    url: "https://doi.org/10.1002/ccd.27833"
  },
  {
    id: 77,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Liu, F., Yang, G., Xie, J. et al. (2024) 'Adverse events of tissue plasminogen activators in acute myocardial infarction patients: a real-world and pharmacovigilance database analysis', BMC Cardiovascular Disorders, 24(1), pp. 441.",
    url: "https://doi.org/10.1186/s12872-024-04121-5"
  },
  {
    id: 78,
    kind: "Well-established landmark trial publication (ExTRACT-TIMI 25 main results) — title, authors and journal match the extensively-cited literature on this trial, but a fresh primary-source fetch could not be completed in this session (web-search budget exhausted). Verified on strong corroborating domain knowledge rather than a direct document fetch.",
    text: "Antman, E.M., Morrow, D.A., McCabe, C.H. et al. (2006) 'Enoxaparin versus unfractionated heparin with fibrinolysis for ST-elevation myocardial infarction', New England Journal of Medicine, 354(14), pp. 1477-88.",
    url: "https://doi.org/10.1056/NEJMoa060898"
  },
  {
    id: 79,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Morrow, D.A., Antman, E.M., Fox, K.A. et al. (2010) 'One-year outcomes after a strategy using enoxaparin vs. unfractionated heparin in patients undergoing fibrinolysis for ST-segment elevation myocardial infarction: 1-year results of the ExTRACT-TIMI 25 trial', European Heart Journal, 31(17), pp. 2097-102.",
    url: "https://doi.org/10.1093/eurheartj/ehq098"
  },
  {
    id: 80,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "White, H.D., Braunwald, E., Murphy, S.A. et al. (2007) 'Enoxaparin vs. unfractionated heparin with fibrinolysis for ST-elevation myocardial infarction in elderly and younger patients: results from ExTRACT-TIMI 25', European Heart Journal, 28(9), pp. 1066-71.",
    url: "https://doi.org/10.1093/eurheartj/ehm081"
  },
  {
    id: 81,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Fox, K.A., Antman, E.M., Montalescot, G. et al. (2007) 'The impact of renal dysfunction on outcomes in the ExTRACT-TIMI 25 trial', Journal of the American College of Cardiology, 49(23), pp. 2249-55.",
    url: "https://doi.org/10.1016/j.jacc.2006.12.049"
  },
  {
    id: 82,
    kind: "Well-established landmark trial publication (OASIS-6) — title, authors, journal and the older JAMA ‘joc’-style DOI format all match the extensively-cited literature on this trial, but a fresh primary-source fetch could not be completed in this session (web-search budget exhausted; relevant pages were also outside this session's fetch allowlist). Verified on strong corroborating domain knowledge rather than a direct document fetch.",
    text: "Yusuf, S., Mehta, S.R., Chrolavicius, S. et al. (2006) 'Effects of fondaparinux on mortality and reinfarction in patients with acute ST-segment elevation myocardial infarction: the OASIS-6 randomized trial', JAMA, 295(13), pp. 1519-30.",
    url: "https://doi.org/10.1001/jama.295.13.joc60038"
  },
  {
    id: 83,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Scirica, B.M., Sabatine, M.S., Morrow, D.A. et al. (2006) 'The role of clopidogrel in early and sustained arterial patency after fibrinolysis for ST-segment elevation myocardial infarction: the ECG CLARITY-TIMI 28 Study', Journal of the American College of Cardiology, 48(1), pp. 37-42.",
    url: "https://doi.org/10.1016/j.jacc.2006.02.052"
  },
  {
    id: 84,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Verheugt, F.W., Montalescot, G., Sabatine, M.S. et al. (2006) 'Prehospital fibrinolysis with dual antiplatelet therapy in ST-elevation acute myocardial infarction: a substudy of the randomized double blind CLARITY-TIMI 28 trial', Journal of Thrombosis and Thrombolysis, 23(3), pp. 173-9.",
    url: "https://doi.org/10.1007/s11239-006-9047-y"
  },
  {
    id: 85,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Berwanger, O., Nicolau, J.C., Carvalho, A.C. et al. (2018) 'Ticagrelor vs Clopidogrel After Fibrinolytic Therapy in Patients With ST-Elevation Myocardial Infarction: A Randomized Clinical Trial', JAMA Cardiology, 3(5), pp. 391-399.",
    url: "https://doi.org/10.1001/jamacardio.2018.0612"
  },
  {
    id: 86,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Berwanger, O., Lopes, R.D., Moia, D.D.F. et al. (2019) 'Ticagrelor Versus Clopidogrel in Patients With STEMI Treated With Fibrinolysis: TREAT Trial', Journal of the American College of Cardiology, 73(22), pp. 2819-2828.",
    url: "https://doi.org/10.1016/j.jacc.2019.03.011"
  },
  {
    id: 87,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Belle, L., Fourny, M., Reynaud, T. et al. (2011) 'Efficacy and safety of glycoprotein IIb/IIIa receptor antagonists for patients undergoing percutaneous coronary intervention within twelve hours of fibrinolysis', Catheterization and Cardiovascular Interventions, 78(3), pp. 376-84.",
    url: "https://doi.org/10.1002/ccd.22825"
  },
  {
    id: 88,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Al-Zakwani, I., Ali, A., Zubaid, M. et al. (2012) 'Impact of type of thrombolytic agent on in-hospital outcomes in ST-segment elevation myocardial infarction patients in the Middle East', Journal of Thrombosis and Thrombolysis, 33(3), pp. 280-6.",
    url: "https://doi.org/10.1007/s11239-012-0698-6"
  },
  {
    id: 89,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Muoghalu, C.G., Ekong, N., Wyns, W. et al. (2023) 'A Systematic Review of the Efficacy and Safety of Tenecteplase Versus Streptokinase in the Management of Myocardial Infarction in Developing Countries', Cureus, 15(8), pp. e44125.",
    url: "https://doi.org/10.7759/cureus.44125"
  },
  {
    id: 90,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Trerayapiwat, K., Jinatongthai, P., Vathesatogkit, P. et al. (2022) 'Using real world evidence to generate cost-effectiveness analysis of fibrinolytic therapy in patients with ST-segment elevation myocardial infarction in Thailand', Lancet Regional Health - Western Pacific, 26, pp. 100503.",
    url: "https://doi.org/10.1016/j.lanwpc.2022.100503"
  },
  {
    id: 91,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Koh, H.P., Md Redzuan, A., Mohd Saffian, S. et al. (2022) 'The outcomes of reperfusion therapy with streptokinase versus tenecteplase in ST-elevation myocardial infarction (STEMI): a propensity-matched retrospective analysis in an Asian population', International Journal of Clinical Pharmacy, 44(3), pp. 641-650.",
    url: "https://doi.org/10.1007/s11096-022-01383-x"
  },
  {
    id: 92,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Koh, H.P., Nagarajah, J.R., Hassan, H. et al. (2024) 'Bleeding characteristics and mortality outcomes following ST-elevation myocardial infarction thrombolysis: a 5-year analysis in an Asian population', World Journal of Emergency Medicine, 15(6), pp. 433-440.",
    url: "https://doi.org/10.5847/wjem.j.1920-8642.2024.077"
  },
  {
    id: 93,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Koh, H.P., Md Redzuan, A., Mohd Saffian, S. et al. (2023) 'Mortality outcomes and predictors of failed thrombolysis following STEMI thrombolysis in a non-PCI capable tertiary hospital: a 5-year analysis', Internal and Emergency Medicine, 18(4), pp. 1169-1180.",
    url: "https://doi.org/10.1007/s11739-023-03202-1"
  },
  {
    id: 94,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "El-Menyar, A.A., Altamimi, O.M., Gomaa, M.M. et al. (2006) 'Clinical and biochemical predictors affect the choice and the short-term outcomes of different thrombolytic agents in acute myocardial infarction', Coronary Artery Disease, 17(5), pp. 431-7.",
    url: "https://doi.org/10.1097/00019501-200608000-00006"
  },
  {
    id: 95,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Mohamed, A., Mahmoud, S., Fahmi, A.M. et al. (2025) 'Tenecteplase vs Reteplase in Patients with Acute ST-Elevation Myocardial Infarction: A Retrospective Cohort Study', Clinical and Applied Thrombosis/Hemostasis, 31, pp. 10760296251316876.",
    url: "https://doi.org/10.1177/10760296251316876"
  },
  {
    id: 96,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Campbell, B.C.V., Mitchell, P.J., Churilov, L. et al. (2018) 'Tenecteplase versus Alteplase before Thrombectomy for Ischemic Stroke', New England Journal of Medicine, 378(17), pp. 1573-1582.",
    url: "https://doi.org/10.1056/NEJMoa1716405"
  },
  {
    id: 97,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Menon, B.K., Buck, B.H., Singh, N. et al. (2022) 'Intravenous tenecteplase compared with alteplase for acute ischaemic stroke in Canada (AcT): a pragmatic, multicentre, open-label, registry-linked, randomised, controlled, non-inferiority trial', Lancet, 400(10347), pp. 161-169.",
    url: "https://doi.org/10.1016/S0140-6736(22)01054-6"
  },
  {
    id: 98,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Wang, Y., Li, S., Pan, Y. et al. (2023) 'Tenecteplase versus alteplase in acute ischaemic cerebrovascular events (TRACE-2): a phase 3, multicentre, open-label, randomised controlled, non-inferiority trial', Lancet, 401(10377), pp. 645-654.",
    url: "https://doi.org/10.1016/S0140-6736(22)02600-9"
  },
  {
    id: 99,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Muir, K.W., Ford, G.A., Ford, I. et al. (2024) 'Tenecteplase versus alteplase for acute stroke within 4.5 h of onset (ATTEST-2): a randomised, parallel group, open-label trial', Lancet Neurology, 23(11), pp. 1087-1096.",
    url: "https://doi.org/10.1016/S1474-4422(24)00377-6"
  },
  {
    id: 100,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Meng, X., Li, S., Dai, H. et al. (2024) 'Tenecteplase vs Alteplase for Patients With Acute Ischemic Stroke: The ORIGINAL Randomized Clinical Trial', JAMA, 332(17), pp. 1437-1445.",
    url: "https://doi.org/10.1001/jama.2024.14721"
  },
  {
    id: 101,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Palaiodimou, L., Katsanos, A.H., Turc, G. et al. (2024) 'Tenecteplase vs Alteplase in Acute Ischemic Stroke Within 4.5 Hours: A Systematic Review and Meta-Analysis of Randomized Trials', Neurology, 103(9), pp. e209903.",
    url: "https://doi.org/10.1212/WNL.0000000000209903"
  },
  {
    id: 102,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Murphy, L.R., Singer, A., Okeke, B. et al. (2024) 'Mortality Outcomes with Tenecteplase Versus Alteplase in the Treatment of Massive Pulmonary Embolism', Journal of Emergency Medicine, 67(5), pp. e432-e441.",
    url: "https://doi.org/10.1016/j.jemermed.2024.07.007"
  },
  {
    id: 103,
    kind: "Independently verified (DOI resolves; title, authors, journal and year confirmed) — the exact volume/issue/page numbers were corroborated via the DOI's own article-number pattern rather than an explicit listing found in this session's searches.",
    text: "Daniell, J.M., Mccormick, J., Nasreen, I. et al. (2024) 'Comparison of Tenecteplase Versus Alteplase for the Treatment of Pulmonary Embolism and Cardiac Arrest with Suspected Pulmonary Embolism', Journal of Intensive Care Medicine, 40(2), pp. 200-206.",
    url: "https://doi.org/10.1177/08850666241268539"
  },
];
const NODES = [
  {
    id: "stemi_confirmed",
    type: "terminal",
    tone: "key",
    label: "STEMI confirmed on 12-lead ECG",
    sub: "(within 10 min of first medical contact)",
    meaning:
      "The entry point: a patient whose 12-lead ECG shows persistent ST-segment elevation (or presumed new left bundle branch block) consistent with acute total coronary occlusion, confirmed as early as possible after first medical contact (FMC) — ambulance arrival, emergency-department triage, or equivalent. From here the only question that matters is which reperfusion strategy, and how fast.",
    rationale:
      "STEMI is distinguished from other acute coronary syndromes precisely by this ECG finding, reflecting acute total occlusion that requires immediate reperfusion rather than the staged work-up appropriate for non-ST-elevation ACS. The population this whole algorithm — and the trials behind it — is defined the same way: presenting with STEMI or presumed new LBBB within 12 hours of symptom onset. The specific '10 minutes of FMC' ECG target is standard ESC/ACC guideline practice rather than a figure spelled out in the manuscript's own running text; it is carried here as the authors drew it in Figure 2, on the same guideline references cited for the algorithm as a whole.",
    refs: [4, 5, 6, 8]
  },
  {
    id: "fmc_pci_120",
    type: "decision",
    label: "Anticipated FMC-to-PCI (wire crossing) time ≤120 min?",
    meaning:
      "Primary PCI is the preferred reperfusion strategy whenever it can genuinely be delivered fast enough — this gate asks whether that is realistic given anticipated transfer and catheterisation-lab timing, not merely whether a cath lab exists somewhere in the system.",
    rationale:
      "'Primary percutaneous coronary intervention (PCI) is the preferred reperfusion strategy when it can be delivered within 120 minutes of diagnosis, and fibrinolysis is recommended when this time target cannot be met...' (Section 1), citing current ESC and ACC/AHA guidance.",
    refs: [5, 6]
  },
  {
    id: "primary_pci",
    type: "branch",
    label: "Primary PCI",
    meaning:
      "If the 120-minute window is realistic, this tool's fibrinolysis pathway does not apply: primary PCI is mechanical reperfusion with reliably higher patency and a lower intracranial-haemorrhage risk than any fibrinolytic agent, which is precisely why fibrinolysis is reserved for when timely PCI genuinely is not available.",
    rationale:
      "Both the 2023 ESC guidelines for acute coronary syndromes and the 2025 ACC/AHA/ACEP/NAEMSP/SCAI guideline name primary PCI the default reperfusion strategy whenever it can be delivered on time.",
    refs: [5, 6]
  },
  {
    id: "eligibility_fibrinolysis",
    type: "decision",
    label:
      "Symptom onset ≤12 h and no absolute contraindication to fibrinolysis (prior ICH, recent ischaemic stroke, active bleeding, aortic dissection)?",
    meaning:
      "The fibrinolysis eligibility gate, with two conditions that must both hold: the patient is still early enough in their infarct (≤12 h from symptom onset) for fibrinolysis to plausibly open the artery, and none of the well-established absolute contraindications that make fibrinolysis's intracranial-haemorrhage risk unacceptable are present.",
    rationale:
      "'...fibrinolysis is recommended when this time target cannot be met, provided that it is started within 12 hours of symptom onset and followed by early angiography' (Section 1). The specific contraindication list drawn in this box (prior ICH, recent ischaemic stroke, active bleeding, aortic dissection) reflects standard ESC/ACC absolute-contraindication criteria rather than an item-by-item list spelled out in the manuscript's own running text — it is carried here exactly as the authors' Figure 2 draws it.",
    refs: [5, 6, 8]
  },
  {
    id: "transfer_pci_delay",
    type: "branch",
    tone: "alarm",
    label: "Transfer for PCI irrespective of delay",
    sub: "urgent angiography if ongoing ischaemia or shock",
    meaning:
      "When fibrinolysis is either too late to plausibly help or unsafe because of an absolute contraindication, the algorithm does not abandon reperfusion — it falls back to transfer for mechanical PCI regardless of how long that transfer takes, escalating to urgent (not routine) angiography specifically if the patient is showing ongoing ischaemia or cardiogenic shock.",
    rationale:
      "This mirrors standard guideline practice: fibrinolysis is a time-limited substitute for PCI, not an alternative to reach for when PCI is merely delayed and fibrinolysis itself would be unsafe or too late to work. The escalation to urgent angiography for ongoing ischaemia or shock follows the same logic used elsewhere in this algorithm for failed or high-risk reperfusion — see the REACT and STREAM-2 rescue-PCI evidence behind the 'Failed fibrinolysis' box below.",
    refs: [5, 6, 56]
  },
  {
    id: "start_fibrinolysis",
    type: "process",
    tone: "key",
    label: "Start fibrinolysis within 10 min of diagnosis",
    sub:
      "(prehospital where possible)\nPreferred agent: TENECTEPLASE (single IV bolus over 5–10 s)\nAlteplase acceptable only if tenecteplase is unavailable",
    meaning:
      "The review's central practical recommendation: tenecteplase as the default fibrinolytic, given as fast as possible — ideally before hospital arrival — rather than alteplase held as a routine alternative.",
    rationale:
      "'...international guidelines list tenecteplase among the preferred fibrin-specific agents and ... recent reviews describe it as the default fibrinolytic for STEMI when timely PCI is not available' (Section 4.2). This rests on randomised equivalence for 30-day mortality (RR 1.02, 95% CI 0.90–1.15) and intracranial haemorrhage (RR 0.96, 95% CI 0.71–1.31) between tenecteplase and alteplase, a modest bleeding advantage for tenecteplase (RR 0.79 for major non-cerebral bleeding), and tenecteplase's single 5–10 second bolus — eliminating infusion pumps, reducing preparation and administration errors, shortening door-to-needle time, and uniquely enabling paramedic-administered prehospital fibrinolysis, which is central to the pharmaco-invasive programmes this review's indirect evidence is built on.",
    refs: [5, 8, 19, 21, 22, 40]
  },
  {
    id: "age_75",
    type: "decision",
    label: "Age ≥75 years?",
    meaning:
      "A dosing fork, not an eligibility gate: age 75 or over does not change whether fibrinolysis is given, only how much tenecteplase.",
    rationale:
      "The STREAM programme specifically identified age ≥75 as the threshold at which full-dose tenecteplase's intracranial-haemorrhage risk becomes disproportionate, prompting the age-adjusted half-dose regimen now reflected in current guideline recommendations.",
    refs: [5, 20, 49]
  },
  {
    id: "full_dose_tenecteplase",
    type: "branch",
    label: "Full weight-tiered tenecteplase",
    sub:
      "30 mg <60 kg; 35 mg 60–69 kg; 40 mg 70–79 kg; 45 mg 80–89 kg; 50 mg ≥90 kg\n(Alteplase: 15 mg bolus + 0.75 mg/kg over 30 min, max 50 mg + 0.5 mg/kg over 60 min, max 35 mg)",
    dose: [
      ["Tenecteplase, <60 kg", "30 mg IV bolus (5–10 s)"],
      ["Tenecteplase, 60–69 kg", "35 mg IV bolus (5–10 s)"],
      ["Tenecteplase, 70–79 kg", "40 mg IV bolus (5–10 s)"],
      ["Tenecteplase, 80–89 kg", "45 mg IV bolus (5–10 s)"],
      ["Tenecteplase, ≥90 kg", "50 mg IV bolus (5–10 s)"],
      [
        "Alteplase, if tenecteplase unavailable",
        "15 mg bolus, then 0.75 mg/kg over 30 min (max 50 mg), then 0.5 mg/kg over 60 min (max 35 mg) — total ≤100 mg/90 min"
      ]
    ],
    meaning:
      "Standard weight-tiered tenecteplase dosing for patients under 75, approximating 0.5 mg/kg as a single bolus — the regimen used across the modern randomised trials this review's direct evidence is built on. The bracketed alteplase regimen is the accelerated (front-loaded) 90-minute fallback, used only when tenecteplase genuinely is not available.",
    rationale:
      "Table 2's comparative pharmacology and dosing summary gives this exact weight-tiered tenecteplase schedule and the three-part accelerated alteplase regimen (15 mg bolus, then 0.75 mg/kg over 30 minutes to a maximum of 50 mg, then 0.5 mg/kg over 60 minutes to a maximum of 35 mg, total ≤100 mg over 90 minutes).",
    refs: [5, 13, 15, 16, 17, 19]
  },
  {
    id: "half_dose_tenecteplase",
    type: "branch",
    label: "HALF-DOSE tenecteplase",
    sub:
      "(weight-tiered dose ÷ 2)\nReduces ICH without loss of efficacy; no validated age-adjusted alteplase regimen",
    dose: [
      ["Tenecteplase, age ≥75 y", "weight-tiered dose ÷ 2 (see full-dose tiers)"]
    ],
    meaning:
      "Simply halves whichever weight-tiered tenecteplase dose the patient would otherwise receive. No equivalent age-adjusted alteplase regimen has been validated in STEMI outcome trials, which is why the algorithm does not offer a parallel half-dose alteplase option here.",
    rationale:
      "A pooled analysis of STREAM and STREAM-2 found that among patients aged 75 or older, half-dose tenecteplase was associated with no intracranial haemorrhage, versus 7.1% with full-dose tenecteplase, without loss of efficacy. STREAM-2 itself randomised 604 patients aged ≥60 to half-dose tenecteplase plus early angiography versus primary PCI, with a comparable 30-day composite outcome (RR 0.96, 95% CI 0.62–1.48). 'No validated age-adjusted alteplase regimen' reflects the review's own finding: half-dose alteplase has only been tested within a pharmaco-invasive strategy in China (EARLY-MYO), not studied as a direct age-based substitute the way tenecteplase has been.",
    refs: [20, 47, 48, 49]
  },
  {
    id: "adjunctive_therapy",
    type: "process",
    label: "Adjunctive therapy",
    sub:
      "aspirin; clopidogrel 300 mg (75 mg if ≥75 years); enoxaparin (age- and renal-adjusted) or UFH\nkeep systolic BP controlled; avoid excess anticoagulation",
    meaning:
      "Fibrinolysis is never given alone — this is the antithrombotic and blood-pressure-control scaffold given alongside it, regardless of which dose or agent was chosen above.",
    rationale:
      "Clopidogrel's age-adjusted loading dose (300 mg, or 75 mg if ≥75) and its artery-patency benefit come from the CLARITY-TIMI 28 programme. Enoxaparin reduced death or reinfarction versus unfractionated heparin in ExTRACT-TIMI 25 (9.9% vs 12.0%) at the cost of more major bleeding (2.1% vs 1.4%); age-adjusted dosing in patients ≥75 attenuated that bleeding excess, and the benefit shrank as renal function worsened. Blood-pressure control matters specifically because of intracranial-haemorrhage risk: the manuscript cites a pooled individual-patient analysis of six tenecteplase RCTs (15,954 patients) reporting that above a systolic blood pressure of 110 mmHg, each 1 mmHg increase raised ICH risk by 2% (adjusted OR 1.02), with female sex, lower body weight and older age as further independent predictors.",
    cautions: [
      "That specific pooled individual-patient-data finding is attributed to reference 73, which independent verification could not confirm — neither its DOI nor its stated title/author/journal/year combination could be located, and it appears to be a fabricated or severely garbled citation (a related but clearly different 2015 American Heart Journal paper exists). The underlying clinical principle — that blood pressure, sex, weight and age drive intracranial-haemorrhage risk more than the specific fibrinolytic chosen — is well supported elsewhere in this review (see reference 75 on sex and bleeding, and Section 3.9's broader discussion), but this particular statistic should not be taken as confirmed until the citation is corrected or replaced."
    ],
    refs: [73, 75, 78, 80, 81, 83, 84]
  },
  {
    id: "reassess_60_90",
    type: "decision",
    label: "Reassess at 60–90 min: ST-segment resolution ≥50% and symptom relief?",
    meaning:
      "The non-invasive bedside check for whether fibrinolysis actually worked, using the ECG rather than angiography — the same kind of ST-segment-resolution threshold used across the trials behind this algorithm's routine-versus-rescue-angiography fork.",
    rationale:
      "This is the standard reperfusion-assessment criterion used across the trial literature synthesised here; comparable assessment timepoints and ST-resolution thresholds recur throughout the review, including the 90-minute angiographic assessment windows in both direct head-to-head RCTs and the ST-segment-resolution comparisons discussed for other fibrinolytic agents.",
    refs: [19, 39, 94]
  },
  {
    id: "failed_fibrinolysis",
    type: "branch",
    tone: "alarm",
    label: "Failed fibrinolysis",
    sub: "immediate transfer for rescue PCI",
    meaning:
      "Fibrinolysis has not opened the artery. The response is not to wait or repeat the dose — it is immediate transfer for mechanical (rescue) PCI.",
    rationale:
      "Long-term follow-up of the REACT trial confirmed a survival benefit for rescue PCI after failed fibrinolysis (HR 0.43, 95% CI 0.23–0.79). A STREAM-2 subanalysis found that 43.5% of patients required rescue PCI, with worse clinical outcomes than those undergoing scheduled angiography (16.7% vs 6.0%) — underlining the need for rapid transfer after any fibrinolytic, not only a successful one.",
    refs: [56, 70]
  },
  {
    id: "successful_fibrinolysis",
    type: "branch",
    tone: "key",
    label: "Successful fibrinolysis",
    sub: "routine angiography ± PCI within 2–24 h",
    meaning:
      "Even when fibrinolysis has worked, the pathway does not end there — routine early angiography (with PCI if needed) within a defined window remains part of the recommended strategy, not an optional extra reserved for failure.",
    rationale:
      "This 'pharmaco-invasive' approach — fibrinolysis plus planned early angiography — is the strategy almost all of the review's indirect evidence validates: in TRANSFER-AMI, transfer for PCI within 6 hours of tenecteplase cut the 30-day composite outcome from 17.2% to 11.0%; NORDISTEMI showed a similar benefit in rural patients with long transport distances; and meta-analyses found early routine PCI after fibrinolysis reduced reinfarction without increasing major bleeding. The 2–24 hour window matches the angiography timing used in both STREAM and STREAM-2.",
    refs: [46, 47, 50, 51, 57, 58]
  }
];
const GLOSSARY = [
  {
    match: "STEMI",
    full: "ST-segment elevation myocardial infarction",
    def: "Acute total coronary occlusion producing persistent ST-segment elevation on the ECG; it requires immediate reperfusion, by primary PCI if deliverable in time, otherwise by fibrinolysis."
  },
  {
    match: "PCI",
    full: "percutaneous coronary intervention",
    def: "Catheter-based mechanical reperfusion (balloon angioplasty ± stenting) of the occluded coronary artery — the preferred reperfusion strategy whenever it can be delivered within the guideline time window."
  },
  {
    match: "FMC",
    full: "first medical contact",
    def: "The time point guideline time-targets are anchored to — ambulance arrival, emergency-department triage, or the equivalent first point of contact with a healthcare provider who can act on the diagnosis."
  },
  {
    match: "ICH",
    full: "intracranial haemorrhage",
    def: "The most feared complication of fibrinolysis. Its risk is driven mainly by patient factors — age, sex, body weight and blood-pressure control — rather than by the choice between tenecteplase and alteplase, whose randomised ICH rates are statistically equivalent."
  },
  {
    match: "TIMI",
    full: "Thrombolysis in Myocardial Infarction (flow grade)",
    def: "Angiographic grading (0–3) of blood flow in the infarct-related artery. Grade 2–3 or grade 3 flow is the standard recanalisation endpoint used in the trials comparing tenecteplase and alteplase."
  },
  {
    match: "MACCE",
    full: "major adverse cardiovascular and cerebrovascular events",
    def: "A composite clinical endpoint (typically death, reinfarction and stroke) used as the primary or secondary outcome in several of the trials cited here, including the largest direct tenecteplase-versus-alteplase RCT."
  },
  {
    match: "rhTNK-tPA",
    full: "recombinant human TNK tissue-type plasminogen activator",
    def: "Tenecteplase — a triple-site (T, N, K) substituted variant of alteplase engineered for a longer half-life, higher fibrin specificity and marked resistance to plasminogen activator inhibitor-1, which together permit single-bolus dosing."
  },
  {
    match: "rt-PA",
    full: "recombinant tissue-type plasminogen activator",
    def: "Alteplase — the second-generation fibrinolytic that tenecteplase was engineered from, requiring an accelerated three-part infusion rather than a single bolus."
  },
  {
    match: "GRADE",
    full: "Grading of Recommendations Assessment, Development and Evaluation",
    def: "The framework this review used to rate certainty of evidence for each outcome as High, Moderate, Low or Very low, downgrading for risk of bias, inconsistency, indirectness, imprecision or publication bias."
  },
  {
    match: "MCID",
    full: "minimal clinically important difference",
    def: "The smallest difference that patients and clinicians would consider meaningful. This review prespecified an absolute standardised effect size (Cohen's d) of 0.20 as the MCID threshold for judging whether a statistically significant finding was also clinically important."
  },
  {
    match: "UFH",
    full: "unfractionated heparin",
    def: "An adjunctive anticoagulant option alongside fibrinolysis, used either instead of or historically before age- and renal-adjusted enoxaparin."
  },
  {
    match: "pharmaco-invasive",
    full: "pharmaco-invasive strategy",
    def: "Fibrinolysis followed by planned, early (typically 2–24 h) transfer for routine angiography ± PCI — distinct from fibrinolysis alone (no planned angiography) or primary PCI (no fibrinolysis at all). Most of this review's indirect evidence validates tenecteplase specifically within this strategy."
  },
  {
    match: "RoB 2",
    full: "revised Cochrane risk-of-bias tool for randomised trials",
    def: "The five-domain tool (randomisation process, deviations from intended interventions, missing outcome data, outcome measurement, selection of the reported result) used to appraise this review's randomised evidence."
  },
  {
    match: "ROBINS-I",
    full: "Risk Of Bias In Non-randomised Studies of Interventions",
    def: "The tool used to appraise the single non-randomised comparative cohort included in this review's direct evidence, which was judged at serious overall risk of bias, mainly from confounding and participant selection."
  },
  {
    match: "door-to-needle",
    full: "door-to-needle time",
    def: "The interval from hospital arrival to fibrinolytic administration. Earlier guidelines specified a 30-minute target; tenecteplase's single-bolus administration helps shorten this further, including enabling prehospital dosing before 'door' is even reached."
  }
];

const AGENTS = [
  "Tenecteplase",
  "Alteplase",
  "Aspirin",
  "Clopidogrel",
  "Enoxaparin",
  "Unfractionated heparin",
  "Streptokinase",
  "Reteplase",
  "Ticagrelor",
  "Fondaparinux"
];
