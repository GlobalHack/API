var createQuestion = function (question, type, required, key, widget, help, heading, options) {
  return {
    title       : question,
    type        : type,
    required    : required,
    key         : key,
    widget      : widget,
    help        : help,
    heading     : heading,
    options     : options
  };
};

var fixtures = [
  //General
  createQuestion('How old are you?', 'number', true, 'General_1', 'RefusableNumber', null, 'General'),

  //Housing
  createQuestion('What is the total length of time you have lived on the streets or in shelters? (Years)', 'number', true, 'Housing_1', 'RefusableNumber', null, 'Housing'),
  createQuestion('In the past three years, how many times have you been housed and then homeless?', 'number', true, 'Housing_2', 'RefusableNumber'),

  //Risks
  createQuestion('In the past six months, how many times have you been to the emergency department/room?', 'number', true, 'Risks_1', 'RefusableNumber', null, 'Risks'),
  createQuestion('In the past six months, how many times have you had an interaction with the police?', 'number', true, 'Risks_2', 'RefusableNumber'),
  createQuestion('In the past six months, how many times have you been taken to the hospital in an ambulance?', 'number', true, 'Risks_3', 'RefusableNumber'),
  createQuestion('In the past six months, how many times have you used a crisis service, including distress centers or suicide prevention hotlines?', 'number', true, 'Risks_4', 'RefusableNumber'),
  createQuestion('In the past six months, how many times have you been hospitalized as an in-patient, including hospitalizations in a mental health hospital?', 'number', true, 'Risks_5', 'RefusableNumber'),
  createQuestion('Have you been attacked or beaten up since becoming homeless?', 'boolean', true, 'Risks_6', 'RefusableBoolean'),
  createQuestion('Threatened to or tried to harm yourself or anyone else in the last year?', 'boolean', true, 'Risks_7', 'RefusableBoolean'),
  createQuestion('Do you have any legal stuff going on right now that may result in you being locked up or having to pay fines?', 'boolean', true, 'Risks_8', 'RefusableBoolean'),
  createQuestion('Does anybody force or trick you to do things that you do not want to do?', 'boolean', true, 'Risks_9', 'RefusableBoolean'),
  createQuestion('Ever do things that may be considered to be risky like exchange sex for money, run drugs for someone, have unprotected sex with someone that you don\'t really know, share a needle, or anything like that?', 'boolean', true, 'Risks_10', 'RefusableBoolean'),
  createQuestion('Please tell me which you sleep at most often.', 'string', true, 'Risks_11', 'RefusableSelect', null, null, 'Shelter|Street, Sidewalk or Doorway|Car, Van, or RV|Bus or Subway|Beach, Riverbed or Park'),

  //Socialization
  createQuestion('Is there anybody that thinks you owe them money?', 'boolean', true, 'Socialization_1', 'RefusableBoolean', null, 'Socialization'),
  createQuestion('Do you have any money coming in on a regular basis, like a job or government benefit or even working under the table, binning or bottle collecting, sex work, odd jobs, day labor, or anything like that?', 'boolean', true, 'Socialization_2', 'RefusableBoolean'),
  createQuestion('Do you have enough money to meet all of your expenses on a monthly basis?', 'boolean', true, 'Socialization_3', 'RefusableBoolean'),
  createQuestion('Do you have planned activities each day other than just surviving that bring you happiness and fullfillment?', 'boolean', true, 'Socialization_4', 'RefusableBoolean'),
  createQuestion('Do you have any friends, family or other people in your life out of convenience or necessity, but you do not like their company?', 'boolean', true, 'Socialization_5', 'RefusableBoolean'),
  createQuestion('Do any friends, family or other people in your life ever take your money, borrow cigarettes, use your drugs, drink your alcohol, or get you to do things you really don\'t want to do?', 'boolean', true, 'Socialization_6', 'RefusableBoolean'),
  createQuestion('Surveyor, do you detect signs of poor hygiene or daily living skills?', 'boolean', true, 'Socialization_7', 'RefusableBoolean', 'OBSERVATION ONLY - DO NOT ASK'),

  //Wellness
  createQuestion('Where do you usually go for healthcare or when you\'re not feeling well?', 'string', true, 'Wellness_1', 'RefusableSelect', null, 'Wellness', 'Hospital|Clinic|VA|Does not go for care'),
  createQuestion('Kidney disease/End stage Renal Disease or Dialysis', 'boolean', true, 'Wellness_2', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('History of frostbite, Hypothermia, or Immersion Foot', 'boolean', true, 'Wellness_3', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('Liver disease, Cirrhosis, or End-Stage Liver Disease', 'boolean', true, 'Wellness_4', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('HIV+/AIDS', 'boolean', true, 'Wellness_5', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('History of Heat Stroke/Heat Exhaustion', 'boolean', true, 'Wellness_6', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('Heart disease, Arrhythmia, or Irregular Heartbeat', 'boolean', true, 'Wellness_7', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('Emphysema', 'boolean', true, 'Wellness_8', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('Diabetes', 'boolean', true, 'Wellness_9', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('Asthma', 'boolean', true, 'Wellness_10', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('Cancer', 'boolean', true, 'Wellness_11', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('Hepatitis C', 'boolean', true, 'Wellness_12', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('Tuberculosis', 'boolean', true, 'Wellness_13', 'RefusableBoolean', 'Do you have now, have you ever had, or has a healthcare provider ever told you that you have'),
  createQuestion('Surveyor, do you observe signs or symptoms of a serious health condition?', 'boolean', true, 'Wellness_14', 'RefusableBoolean', 'OBSERVATION ONLY - DO NOT ASK'),
  createQuestion('Have you ever had problematic drug or alcohol use, abused drugs or alcohol, or told you do?', 'boolean', true, 'Wellness_15', 'RefusableBoolean'),
  createQuestion('Have you ever consumed alcohol and/or drugs almost every day or every other day for the past month?', 'boolean', true, 'Wellness_16', 'RefusableBoolean'),
  createQuestion('Have you ever used injection drugs or shots in the last six months?', 'boolean', true, 'Wellness_17', 'RefusableBoolean'),
  createQuestion('Have you ever been treated for drug or alcohol problems and returned to drinking or using drugs?', 'boolean', true, 'Wellness_18', 'RefusableBoolean'),
  createQuestion('Have you used non-beverage alcohol like cough syrup, mouthwash, rubbing alcohol, cooking wine, or anything like that in the past six months?', 'boolean', true, 'Wellness_19', 'RefusableBoolean'),
  createQuestion('Have you blacked out because of your alcohol or drug use in the past month?', 'boolean', true, 'Wellness_20', 'RefusableBoolean'),
  createQuestion('Surveyor, do you observe signs or symptoms or problematic alcohol or drug abuse?', 'boolean', true, 'Wellness_21', 'RefusableBoolean', 'OBSERVATION ONLY - DO NOT ASK'),
  createQuestion('Ever been taken to a hospital against your will for a mental health reason?', 'boolean', true, 'Wellness_22', 'RefusableBoolean'),
  createQuestion('Gone to the emergency room because you weren\'t feeling 100% well emotionally or because of your nerves?', 'boolean', true, 'Wellness_23', 'RefusableBoolean'),
  createQuestion('Spoken with a psychiatrist, psychologist or other mental health professional in the last six months because of your mental health - whether that was voluntary or because someone insisted that you do so?', 'boolean', true, 'Wellness_24', 'RefusableBoolean'),
  createQuestion('Had a serious brain injury or head trauma?', 'boolean', true, 'Wellness_25', 'RefusableBoolean'),
  createQuestion('Ever been told you have a learning disability or developmental disability?', 'boolean', true, 'Wellness_26', 'RefusableBoolean'),
  createQuestion('Do you have any problems concentrating and/or remembering things?', 'boolean', true, 'Wellness_27', 'RefusableBoolean'),
  createQuestion('Surveyor, do you detect signs or symptoms or severe, persistent mental illness or severely compromised cognitive functioning?', 'boolean', true, 'Wellness_28', 'RefusableBoolean', 'OBSERVATION ONLY - DO NOT ASK'),
  createQuestion('Have you had any medicines prescribed to you by a doctor that you do not take, sell, had stolen, misplaced, or where the prescriptions were never filled?', 'boolean', true, 'Wellness_29', 'RefusableBoolean'),
  createQuestion('Have you experienced any emotional, physical, psychological, sexual or other type of abuse or trauma in your life which you have not sought help for, and/or which has caused your homelessness?', 'boolean', true, 'Wellness_30', 'RefusableBoolean')
];

// module.exports = Question.create(fixtures);
module.exports = {
  fixtures: fixtures
};
