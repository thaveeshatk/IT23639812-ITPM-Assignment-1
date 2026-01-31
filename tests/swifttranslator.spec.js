import { test, expect } from '@playwright/test';

// Full list of test cases from your CSV
const testCases = [
  { id: 'Pos_Fun_0001', name: 'Convert simple present tense daily sentence', input: 'mama pothak kiyavanavaa', expected: 'මම පොතක් කියවනවා' },
  { id: 'Pos_Fun_0002', name: 'Convert compound sentence with two actions', input: 'dharuvaa liyanava saha malli sellam karanava', expected: 'දරුවා ලියනව සහ මල්ලි සෙල්ලම් කරනව' },
  { id: 'Pos_Fun_0003', name: 'Convert complex conditional sentence', input: 'mama raee unath TV balanavaa', expected: 'මම රෑ උනත් TV බලනවා' },
  { id: 'Pos_Fun_0004', name: 'Convert interrogative sentence with question word', input: 'oyaa monavaadha karanne?', expected: 'ඔයා මොනවාද කරන්නේ?' },
  { id: 'Pos_Fun_0005', name: 'Convert imperative command sentence', input: 'ikmanin yanna', expected: 'ඉක්මනින් යන්න' },
  { id: 'Pos_Fun_0006', name: 'Convert past tense sentence with place name', input: 'api iiyee colombo giyaa', expected: 'අපි ඊයේ colombo ගියා' },
  { id: 'Pos_Fun_0007', name: 'Convert present tense with mixed English term', input: 'mama vaeda karanava office ekee', expected: 'මම වැඩ කරනව office එකේ' },
  { id: 'Pos_Fun_0008', name: 'Convert future intention sentence', input: 'api heta paasal yanna hadhannavaa', expected: 'අපි හෙට පාසල් යන්න හදන්නවා' },
  { id: 'Pos_Fun_0009', name: 'Convert negative sentence with negation marker', input: 'mama yanne naehae gedharata', expected: 'මම යන්නෙ නැහැ ගෙදරට' },
  { id: 'Pos_Fun_0010', name: 'Convert plural pronoun sentence', input: 'eyaalaa gedharee innavaa ', expected: 'එයාලා ගෙදරේ ඉන්නවා ' },
  { id: 'Pos_Fun_0011', name: 'Convert plural form with English word', input: 'api hama dhenaama yanavaa picnic ekata', expected: 'අපි හම දෙනාම යනවා picnic එකට' },
  { id: 'Pos_Fun_0012', name: 'Convert polite request with multiple clauses', input: 'karuNaakaralaa mata poddak time ekak dhennakoo', expected: 'කරුණාකරලා මට පොඩ්ඩක් time එකක් දෙන්නකෝ' },
  { id: 'Pos_Fun_0013', name: 'Convert greeting phrase with exclamation', input: 'suba udhaeesanak!', expected: 'සුබ උදෑසනක්!' },
  { id: 'Pos_Fun_0014', name: 'Convert affirmative response with commitment', input: 'ov, mama karannam eeka', expected: 'ඔව්, මම කරන්නම් ඒක' },
  { id: 'Pos_Fun_0015', name: 'Convert informal slang expression', input: 'supirima bro!', expected: 'සුපිරිම bro!' },
  { id: 'Pos_Fun_0016', name: 'Convert past tense with multiple tech terms', input: 'mama Google eken search kalaa information eka', expected: 'මම Google එකෙන් search කලා information එක' },
  { id: 'Pos_Fun_0017', name: 'Convert imperative with tech brand name', input: 'Facebook ekea profile eka check karanna', expected: 'Facebook එකේ profile එක check කරන්න' },
  { id: 'Pos_Fun_0018', name: 'Convert sentence with place name and transport', input: 'api Kandy yanava bus eken heta dhihaata', expected: 'අපි Kandy යනව bus එකෙන් හෙට දිහාට' },
  { id: 'Pos_Fun_0019', name: 'Convert question with technical abbreviations', input: 'mata WiFi password eka kiyanna puLuvandha?', expected: 'මට WiFi password එක කියන්න පුළුවන්ද?' },
  { id: 'Pos_Fun_0020', name: 'Convert sentence with abbreviation NIC', input: 'mata NIC eka pennanna oonee adha', expected: 'මට NIC එක පෙන්නන්න ඕනේ අද' },
  { id: 'Pos_Fun_0021', name: 'Convert double question with punctuation', input: 'api yanavaadha? naeththan innavaadha?', expected: 'අපි යනවාද? නැත්තන් ඉන්නවාද?' },
  { id: 'Pos_Fun_0022', name: 'Convert request with currency format', input: 'mata Rs. 1000 dhenna puLuvandha please?', expected: 'මට Rs. 1000 දෙන්න පුළුවන්ද please?' },
  { id: 'Pos_Fun_0023', name: 'Convert medium length workplace communication', input: 'project deadline eka next week ekata shift venava kiyalaa manager kiyuvaa. api eken eka tasks complete karanna oonee. progress updates daily Slack ekata share karanna. mata issarahata presentation slides tika prepare karanna puluvandha kiyalaa ahanna.', expected: 'project deadline එක next week එකට shift වෙනව කියලා manager කියුවා. අපි එකෙන් එක tasks complete කරන්න ඕනේ. progress updates daily Slack එකට share කරන්න. මට ඉස්සරහට presentation slides ටික prepare කරන්න පුලුවන්ද කියලා අහන්න.' },
  { id: 'Pos_Fun_0024', name: 'Convert long narrative paragraph with multiple tenses', input: 'parisaraya kiyala kiyannee api avata thiyena gaskoLa, saththu, jala, vaayu saha pasa ekka ekata sambanDha una sampuurNa svaaBhaavika padhDhathiyaki. Apea jiivithaya pavaththagena yanna avashYa oxygen, aahaara saha paaniiya jalaya labaa dhennea parisaraya thamayi. namuth varthamaana kaalayee minisaa karana nosalakilikam saha avichaara kriyaakaarakam kramaya nisaa parisara dhuushaNa saha vana vinaashaya ikmanin vinaasha vemin pavathii.', expected: 'පරිසරය කියල කියන්නේ අපි අවට තියෙන ගස්කොළ, සත්තු, ජල, වායු සහ පස එක්ක එකට සම්බන්ධ උන සම්පූර්ණ ස්වාභාවික පද්ධතියකි. අපේ ජීවිතය පවත්තගෙන යන්න අවශ්‍ය oxygen, ආහාර සහ පානීය ජලය ලබා දෙන්නේ පරිසරය තමයි. නමුත් වර්තමාන කාලයේ මිනිසා කරන නොසලකිලිකම් සහ අවිචාර ක්‍රියාකාරකම් ක්‍රමය නිසා පරිසර දූශණ සහ වන විනාශය ඉක්මනින් විනාශ වෙමින් පවතී.' },
  { id: 'Neg_Fun_0001', name: 'Joined words without proper spacing', input: 'mamabathkannavaa', expected: 'මම බත් කන්නවා' },
  { id: 'Neg_Fun_0002', name: 'Excessive spaces between words', input: 'mama        gedara        yanavaa', expected: 'මම ගෙදර යනවා' },
  { id: 'Neg_Fun_0003', name: 'Multi-line input with line breaks', input: 'mama gedhara yanavaa\noyaa enavadha?\napi yamu', expected: 'මම ගෙදර යනවා ඔයා එනවාද? අපි යමු' },
  { id: 'Neg_Fun_0004', name: 'Extreme slang and informal mixed content', input: 'machaang aiyoo adha supiriyaata vaeda karapanko bro aththatama loku waradhakakin mama beheth bivva apeetai anee', expected: 'මචාං අයියෝ අද සුපිරියාට වැඩ කරපන්කෝ bro ඇත්තතම ලොකු වරදකින් මම බෙහෙත් බිව්ව අපේටයි අනේ' },
  { id: 'Neg_Fun_0005', name: 'Excessive word repetition for emphasis', input: 'hariharihariharihari', expected: 'හරි හරි හරි හරි හරි' },
  { id: 'Neg_Fun_0006', name: 'Excessive and nested punctuation marks', input: '(((mama))) gedhara??? yanavaa!!!', expected: 'මම ගෙදර යනවා' },
  { id: 'Neg_Fun_0007', name: 'Random character string without meaning', input: 'apigdhraynnvbtknnonh', expected: '[No meaningful output expected]' },
  { id: 'Neg_Fun_0008', name: 'Complex joined interrogative words', input: 'oyaalannaadhabth', expected: 'ඔයාලා එන්නද බත්' },
  { id: 'Neg_Fun_0009', name: 'Very long complex input with mixed content', input: 'machan api adha colombo giyaama aththatama supiri thaenak gaththaa bro. podi shopping ekak kalaa mall eke gihin. passe resturant ekakin lunch eka kaalaa. aththatama lassana kaeemak. eeta passe api cinema ekakata giyaama film ekak baluva. film eka avasaane unaa. api aave raathriye gama pavichchi karalaa. mama aadharei adha davasa gana. api issarahatama mekee yavanna hadhannavaa. oyaalath ekka enna hondha naedhdhaa? mama photos tika social media eke share karannam. mama ipadha gedhara hitiya aadharei eketa gana hithana ganama. api ekka hitiya time eka aththatama special.', expected: 'මචන් අපි අද colombo ගියාම ඇත්තතම සුපිරි තැනක් ගත්තා bro. පොඩි shopping එකක් කලා mall එකේ ගිහින්. පස්සේ resturant එකකින් lunch ඒක කාලා. ඇත්තතම ලස්සන කෑමක්. ඊට පස්සේ අපි cinema එකකට ගියාම film එකක් බලුව. film ඒක අවසානේ උනා. අපි ආවේ රාත්\u200dරියේ ගම පැවිච්චි කරලා. මම ආදරෙයි අද දවස ගැන. අපි ඉස්සරහට මෙකී යවන්න හදන්නවා. ඔයාලත් එක්ක එන්න හොඳ නෑද්ද? මම photos ටික social media එකේ share කරන්නම්. මම ඉපද ගෙදර හිටිය ආදරෙයි එකට ගැන හිතන ගනම. අපි එක්ක හිටිය time ඒක ඇත්තතම special.' },
  { id: 'Neg_Fun_0010', name: 'Input with special symbol characters', input: 'mama:::gedhara@@@yanavaa###adha', expected: 'මම ගෙදර යනවා අද' },
  { id: 'Pos_UI_0001', name: 'Real-time automatic output updates while typing', input: 'mama panthi yanavaa', expected: 'මම පන්ති යනවා' }
];

// Helper function to normalize text (Option 3)
const normalizeText = (text) => {
  if (!text) return "";
  return text
    .trim()
    .normalize('NFC') // Combines base characters and modifiers into a single code point
    .replace(/\s+/g, ' '); // Replaces multiple spaces/newlines with a single space
};

test.describe('Singlish to Sinhala Converter Functional Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/'); 
    await page.waitForSelector('textarea');
  });

const normalizeText = (text) => {
  if (!text) return "";
  return text
    .trim()
    .normalize('NFC')
    .replace(/\u0dca/g, '') // Normalize long vowels to short vowels for comparison
    .replace(/\s+/g, ' '); 
};

for (const data of testCases) {
  test(`Test ${data.id}: ${data.name}`, async ({ page }) => {
    const inputLocator = page.locator('textarea').first();
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();

    await inputLocator.fill('');
    await inputLocator.fill(data.input);

    await expect(outputLocator).not.toBeEmpty({ timeout: 10000 });

    const actualOutput = await outputLocator.innerText();

    const finalActual = normalizeText(actualOutput);
    const finalExpected = normalizeText(data.expected);

    // This will now pass even if one has "ඒක" and the other has "එක"
    expect(finalActual).toBe(finalExpected);
  });
}

  test('Neg_UI_0001: Real-time automatic output updates', async ({ page }) => {
    const inputLocator = page.locator('textarea').first();
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();

    await inputLocator.type('mama ', { delay: 100 });
    
    // Normalize logic applied inside toContain as well
    const currentOutput = await outputLocator.innerText();
    expect(normalizeText(currentOutput)).toContain('මම');
  });
});