//Word and Hints Object
const options = {Abstract:	"Actual instances",
    Abstruse:	"Hard to understand",
    Arduous:	"Difficult",
    Augean:	"Difficult and Unpleasant",
    Baffling:	"To confuse or perplex",
    Confined:	"Restricted in an area or volume",
    Austere:	"Strict and serious in appearance and behavior",
    Competence:	"The ability to do something",
    Parochial:	"Having a limited or narrow outlook",
    Moribund:	"No longer effective and about to come to an end completely",
    Ineptitude:	"Lack of skill or ability",
    Bystander:	"A person who is present at an event or incident but does not part",
    Entrench:	"To establish something very strongly so that it is difficult to change", 
    Contagion:	"The spread of disease by close contact between people",
    Cohort:	"The tactic, gambit, trick",
    Ploy:	"Words or actions that are carefully planned to get an advantage over somebody else",
    Idiosyncrasy:	"An unusual feature",
    Quibble:	"A small complaint or criticism",
    Aghast:	"Shocked or scared",
    Accrue:	"Payments or benefits",
    Muzzle:	"Prevent a person or group from expressing their opinions freely",
    Synergy:	"The extra energy",
    Officious:	"Assertive of authority in a domineering way",
    Dash:	"Destroy or frustrate", 
    Outcry:	"A reaction of anger or strong protest",
    Progenitor:	"A person who starts an idea or a development",
    Sumptuous:	"Very expensive/impressive",
    Enthuse:	"To make somebody feel very interested and excited",
    Underscore:	"To emphasise",
    Sanguine:	"Optimistic",
    Fable:	"A short story",
    Protectionist:	"A defensor",
    Remit:	"Task/activity assigned to an individual/organization",
    Slack:	"Characterised by a lack of work or activity",
    Polemics:	"The practice of engaging in a controversial debate",
    Sully:	"Damage to the purity or integrity",
    Salience:	"The quality of being particularly noticeable or important",
    Totter:	"Move in a shabby way/feel insecure",
    Reckon:	"To calculate something/be of an opinion",
    Cataclysmic:	"Causing sudden and violent upheaval",
    Unflinching:	"Remaining strong and determined",
    Goliath:	"A person or thing that is very large or powerful (",
    Ferment:	"A state of political or social excitement and confusion",
    Mangled:	"Destroy or severely damaged by tearing or crushing",
    Febrile:	"Nervous/excited/ Showing fever",
    Connote:	"To suggest a feeling, an idea, etc",
    Serpentine:	"Winding and twisting like a snake",
    Heyday:	"The period of a person’s or thing’s greatest success",
    Fret:	"Anxious/nervous",
    Inkling:	"A slight knowledge or suspicion", 
    Abstract:	"Actual instances",
    Abstruse:	"Hard to understand",
    Arduous:	"Difficult",
    Augean:	"Difficult and Unpleasant",
    Baffling:	"To confuse or perplex",
    Confined:	"Restricted in an area or volume",
    Austere:	"Strict and serious in appearance and behavior",
    Competence:	"The ability to do something",
    Parochial:	"Having a limited or narrow outlook",
    Moribund:	"No longer effective and about to come to an end completely",
    Ineptitude:	"Lack of skill or ability",
    Bystander:	"A person who is present at an event or incident but does not part",
    Entrench:	"To establish something very strongly so that it is difficult to change", 
    Contagion:	"The spread of disease by close contact between people",
    Cohort:	"The tactic, gambit, trick",
    Ploy:	"Words or actions that are carefully planned to get an advantage over somebody else",
    Idiosyncrasy:	"An unusual feature",
    Quibble:	"A small complaint or criticism",
    Aghast:	"Shocked or scared",
    Accrue:	"Payments or benefits",
    Muzzle:	"Prevent a person or group from expressing their opinions freely",
    Synergy:	"The extra energy",
    Officious:	"Assertive of authority in a domineering way",
    Dash:	"Destroy or frustrate", 
    Outcry:	"A reaction of anger or strong protest",
    Progenitor:	"A person who starts an idea or a development",
    Sumptuous:	"Very expensive/impressive",
    Enthuse:	"To make somebody feel very interested and excited",
    Underscore:	"To emphasise",
    Sanguine:	"Optimistic",
    Fable:	"A short story",
    Protectionist:	"A defensor",
    Remit:	"Task/activity assigned to an individual/organisation",
    Slack:	"Characterised by a lack of work or activity",
    Polemics:	"The practice of engaging in a controversial debate",
    Sully:	"Damage to the purity or integrity",
    Salience:	"The quality of being particularly noticeable or important",
    Totter:	"Move in a shabby way/feel insecure",
    Reckon:	"To calculate something/be of an opinion",
    Cataclysmic:	"Causing sudden and violent upheaval",
    Unflinching:	"Remaining strong and determined",
    Goliath:	"A person or thing that is very large or powerful (",
    Ferment:	"A state of political or social excitement and confusion",
    Mangled:	"Destroy or severely damaged by tearing or crushing",
    Febrile:	"Nervous/excited/ Showing fever",
    Connote:	"To suggest a feeling, an idea, etc",
    Serpentine:	"Winding and twisting like a snake",
    Heyday:	"The period of a person’s or thing’s greatest success",
    Fret:	"Anxious/nervous",
    Inkling:	"A slight knowledge or suspicion", 
    Dangerous:	"Something likely to cause injury or damage",
    Dark:	"With no light or very little light",
    Decide:	"Think about two or more possibilities and choose one of them",
    Definite:	"Having certain or distinct limits for a definite period",
    Delicious:	"Having a very pleasant taste or smell",
    Describe:	"To say what somebody/something is like, or what happened",
    Destroy:	"To damage something so badly that it can no longer be used or no longer exists",
    Difference:	"The way that people or things are not the same or the way that somebody/something has changed",
    Do:	"To perform an action, activity or job",
    Dull:	"Not interesting or exciting; boring",
    Eager:	"Strongly wanting to do or have something.",
    End:	"The furthest or last part of something; the place or time where something stops",
    Enjoy:	"To get pleasure from something",
    Explain:	"To make something clear or easy to understand",
    Fair:	"Appropriate and acceptable in a particular situation",
    Fall:	"To drop down towards the ground",
    FALSE:	"Not true; not correct",
    Fast:	"Able to move or act at great speed",
    Fat:	"Weighing too much; covered with too much flesh",
    Fear:	"The feeling that you have when something dangerous, painful or frightening might happen",
    Fly:	"To move through the air",
    Funny:	"That makes you smile or laugh", 
    Get:	"To receive, obtain or buy something",
    Go:	"To move or travel from one place to another",
    Good:	"Of a high quality or standard",
    Great:	"Large in amount, degree, size, etc.; a lot of",
    Gross:	"Being the total amount before anything is taken away",
    Happy:	"Feeling or showing pleasure; pleased",
    Hate:	"To have a very strong feeling of not liking somebody/something at all",
    Have:	"Used for forming the perfect tenses",
    Help:	"To do something for somebody to be useful or to make something easier for him/her",
    Hide:	"To put or keep somebody/something in a place where he/she/it cannot be seen; to cover something so that it cannot be seen",
    Hurry:	"The need or wish to do something quickly",
    Hurt:	"To feel painful",
    Idea:	"A picture or impression in your mind",
    Important:	"Having great value or influence; is very necessary",
    Interesting:	"Enjoyable and entertaining; holding your attention",
    Keep:	"To continue to be in a particular state or position",
    Kill:	"To make somebody/something die", 
    Laugh:	"An expression of mirth, derision, etc.",
    Lots:	"Of great numbers or quantities",
    Label:	"A short word or phrase descriptive of a person, group, intellectual movement, etc.",
    Labor:	"Productive activity, especially for the sake of economic gain.",
    Landfill:	"A low area of land that is built up from deposits of solid refuse in layers covered by soil.",
    Landlord:	"A person or organisation that owns and leases apartments to others.",
    Language:	"A body of words and the systems for their use is common to people who are of the same community or nation, the same geographical area, or the same cultural tradition",
    Machine:	"An apparatus consisting of interrelated parts with separate functions, used in the performance of some kind of work",
    Mail:	"Letters, packages, etc., that are sent or delivered using a postal system",
    Major:	"Greater in size, extent, or importance",
    Malice:	"Desire to inflict injury, harm, or suffering on another, either because of a hostile impulse or out of deep-seated meanness",
    Management:	"The person or persons controlling and directing the affairs of a business, institution, etc",
    Manufacture:	"The making of goods or wares by manual labor or by machinery, especially on a large scale",
    Nation:	"The territory or country itself",
    Near:	"Close to a point or place not far away",
    Narrow:	"Of little breadth or width; not broad or wide; not as wide as usual or expected",
    Nearly:	"With close approximation",
    Name:	"A word or a combination of words by which a person, place, thing, body or class, or any object of thought is designated, called, or known",
    Objective:	"Something that one’s efforts or actions are intended to attain or accomplish",
    Observe:	"To see, watch, perceive, or notice",
    Abate:	"Moderate, decrease",
    Adhere:	"Comply, observe",
    Abolish:	"Abrogate, annul",
    Acumen:	"Awareness, brilliance",
    Abash:	"Disconcert, rattle",
    Absolve:	"Pardon, forgive",
    Abjure:	"Forsake, renounce",
    Abject:	"Despicable, servile",
    Abound:	"Flourish, proliferate",
    Abortive:	"Vain, unproductive",
    Acrimony:	"Harshness, bitterness",
    Accord:	"Agreement, harmony",
    Adjunct:	"Joined, Added",
    Adversity:	"Misfortune, calamity",
    Adherent:	"Follower, disciple",
    Adamant:	"Stubborn, inflexible",
    Admonish:	"Counsel, reprove",
    Allay:	"Pacify, soothe",
    Alien:	"Foreigner, outsider",
    Ascend:	"Climb Escalate",
    Alleviate:	"Abate, relieve",
    Allure:	"Entice, fascinate",
    Arraign:	"Incriminate, indict",
    Amplify:	"Augment, deepen",
    Axiom:	"Adage, truism",
    Audacity:	"Boldness, Courage",
    Authentic:	"Accurate, credible",
    Awkward:	"Rude, blundering",
    Barbarous:	"Frustrate, perplex",
    Bleak:	"Grim, Austere",
    Bewitching:	"Alluring, charming",
    Baroque:	"Florid, gilt",
    Brittle:	"Breakable, crisp",
    Barrier:	"Barricade, Obstacle",
    Baffle:	"Astound, Faze",
    Bustle:	"Commotion, Tumult",
    Barren:	"Desolate, Sterile",
    Bawdy:	"Erotic, Coarse",
    Bind:	"Predicament",
    Batty:	"Insane, silly",
    Benevolent:	"Benign, Generous",
    Befogged:	"Becloud, Dim",
    Base:	"Vulgar, Coarse",
    Benign:	"Favorable, friendly",
    Busy:	"Active, Engaged",
    Bleak:	"Austere, Blank",
    Bold:	"Adventurous",
    Boisterous:	"Clamorous, rowdy",
    Blunt:	"Dull, Insensitive",
    Callous:	"Obdurate, unfeeling",
    Capable:	"Competent, able",
    Calamity:	"Adversity, misfortune",
    Calculating:	"Canny, Devious",
    Calumny:	"Defamation, aspersion",
    Captivity:	"Imprisonment, confinement",
    Captivate:	"Charm, fascinate",
    Chaste:	"Virtuous, pure",
    Cease:	"Terminate, desist",
    Compassion:	"Kindness, sympathy",
    Chastise:	"Punish, admonish",
    Concede:	"Yield, permit",
    Comprise:	"Include, contain",
    Consent:	"Agree, permit",
    Concur:	"Approve, agree",
    Consolidate:	"Solidify, strengthen",
    Consequence:	"Effect, outcome",
    Contempt:	"Scorn, disregard",
    Conspicuous:	"Prominent, obvious",
    Contrary:	"Dissimilar, conflicting",
    Contradict:	"Deny, oppose",
    Callous:	"Insensitive, indurated",
    Calm:	"Harmonious, unruffled",
    Candid:	"Blunt, bluff",
    Camouflage:	"Cloak, disguise",
    Carnal:	"Earthly, fleshly",
    Captivate:	"Beguile, bewitch",
    Celebrated:	"Acclaimed, lionised",
    Catholic:	"Generic, liberal",
    Censure:	"Rebuke, reprimand",
    Cement:	"Plaster, mortar",
    Clandestine:	"Covert, furtive",
    Cheap:	"Competitive, Inexpensive",
    Coarse:	"Bawdy, Boorish",
    Classic:	"Simple, Typical",
    Compact:	"Bunched, thick",
    Comic:	"Clown, Jester",
    Conceit:	"Egotism, Immodesty",
    Compress:	"Abbreviate, Shrink",
    Condemn:	"Castigate, Chide",
    Concord:	"Agreement, accord",
    Consolidate:	"Centralise, Fortify",
    Confident:	"Bold, Undaunted",
    Creation:	"Formation, foundation",
    Courtesy:	"Generosity, Reverence",
    Cunning:	"Acute, Smart",
    Decipher:	"interpret, reveal",
    Decay:	"Collapse, decompose",
    Deceit:	"Deception, artifice",
    Defray:	"Spend, pay",
    Defile:	"Contaminate, pollute",
    Demolish:	"Ruin, devastate",
    Deliberate:	"Cautious, intentional",
    Deride:	"Mock, taunt",
    Deprive:	"Despoil, divest",
    Dissuade:	"Remonstrate, Counsel",
    Disdain:	"Detest, despise",
    Dense:	"Opaque, piled",
    Denounce:	"Blame, boycott",
    Despair:	"Depression, misery",
    Derogatory:	"Sarcastic, critical",
    Docile:	"Pliable, pliant",
    Destructive:	"Catastrophic, pernicious",
    Dwarf:	"Diminutive, Petite",
    Eclipse:	"Diminution, Dimming",
    Eager:	"Keen, acquisitive",
    Ecstasy:	"Delight, exultation",
    Eccentric:	"Strange, abnormal",
    Encumbrance:	"Hindrance, obstacle",
    Efface:	"Destroy, obliterate",
    Eloquence:	"Expression, fluency",
    Enormous:	"Colossal, mammoth",
    Endeavour:	"Undertake, aspire",
    Equivocal:	"Uncertain, hazy",
    Epitome:	"Precise, example",
    Eradicate:	"Destroy, exterminate",
    Fallacy:	"Delusion, mistake",
    Fabricate:	"Construct, produce",
    Fanatical:	"Narrow-minded, biased",
    Falter:	"Stumble, demur",
    Ferocious:	"Cruel, fierce",
    Feeble:	"Weak, frail",
    Fluctuate:	"Deflect, vacillate",
    Feud:	"Strife, quarrel",
    Fragile:	"Weak, infirm",
    Forsake:	"Desert, renounce",
    Frivolous:	"Petty, worthless",
    Frantic:	"Violent, agitated",
    Frugality:	"Economy, providence",
    Gloom:	"Obscurity, darkness",
    Gather:	"Converge, huddle",
    Gorgeous:	"Magnificent, dazzling",
    Glut:	"Stuff, satiate",
    Grisly:	"Disgusting, atrocious",
    Gracious:	"Courteous, beneficent",
    Guile:	"Cunning, deceit",
    Grudge:	"Hatred, aversion",
    Genuine:	"Absolute, Factual",
    Generosity:	"Altruism, bounty",
    Glory:	"Dignity, renown",
    Gloomy:	"Bleak, cloudy",
    Harass:	"Irritate, molest", 
    Hazard:	"Peril, danger",
    Hapless:	"Unfortunate, ill-fated",
    Haughty:	"Arrogant, pompous",
    Hideous:	"Frightful, shocking",
    Heretic:	"Non-conformist, secularist",
    Harmony:	"Conformity, Amicability",
    Hamstrung:	"Cripple Debilitate",
    Honor:	"Adoration, Reverence",
    Hasty:	"Abrupt, Impetuous",
    Humility:	"Resignation, Fawning",
    Humble:	"Meek, Timid",
    Impenitent:	"Uncontrite, Obdurate",
    Hypocrisy:	"Deception, Pharisaism",
    Indifferent:	"Equitable, Haughty",
    Impulsive:	"Flaky, Impetuous",
    Infernal:	"Damned, Accursed",
    Indigent:	"Destitute, Impoverished",
    Interesting:	"Enchanting, Riveting",
    Insipid:	"Tedious, Prosaic",
    Immense:	"Huge, enormous",
    Immaculate:	"Unsullied, spotless",
    Imminent:	"Impending, brewing",
    Immerse:	"Submerge, involve",
    Impair:	"Diminish, deteriorate",
    Immunity:	"Prerogative, privilege",
    Impediment:	"Hurdle, obstruction",
    Impartial:	"Just, unbiased",
    Impute:	"Attribute, ascribe",
    Impious:	"Irreligious, unholy",
    Incompetent:	"Inefficient, unskilled",
    Inclination:	"Disposition, affection",
    Inevitable:	"Unavoidable, ascertained",
    Incongruous:	"Inappropriate, absurd",
    Ingenuous:	"Undisguised, naive",
    Infringe:	"Violate, encroach",
    Insipid:	"Tasteless, vapid",
    Insinuate:	"Allude, hint",
    Instill:	"Inculcate, inject",
    Insolvent:	"Indigent, destitute",
    Intrigue:	"Scheme, conspiracy",
    Intricate:	"Tangled, complicated",
    Invective:	"Accusation, censure",
    Intrinsic:	"Genuine, fundamental",
    Immaculate:	"Exquisite, Impeccable",
    Invincible:	"Unconquerable, impregnable",
    Irrepressible:	"Irresistible, unconfined",
    Jejune:	"Dull, boring",
    Jaded:	"Tired, exhausted",
    Jubilant:	"Rejoicing, triumphant",
    Jovial:	"Frolicsome, cheerful",
    Just:	"Honest, impartial",
    Judicious:	"Thoughtful, prudent",
    Juvenile:	"Young, tender",
    Justify:	"Defend, exculpate",
    Knave:	"Dishonest, scoundrel",
    Knotty:	"Complicated difficult",
    Kindred:	"Relation, species",
    Keen:	"Sharp, poignant",
    Knell:	"Death knell, last blow",
    Lax:	"Slack, careless",
    Lavish:	"Abundant, excessive",
    Liable:	"Accountable, bound",
    Lenient:	"Compassionate, merciful",
    Lucid:	"Sound, rational",
    Lure:	"Attract, entice",
    Linger:	"Loiter, prolong",
    Liberal:	"Magnanimous, generous",
    Lunacy:	"Delusion, insanity",
    Luxuriant:	"Profuse, abundant",
    Luscious:	"Palatable, delicious",
    Languid:	"Sluggish, apathetic",
    Mandatory:	"Imperative, requisite",
    Malice:	"Vengefulness, grudge",
    Merit:	"Stature, Asset",
    Masculine:	"Gallant, strapping",
    Mitigate:	"Alleviate, relieve",
    Miraculous:	"Marvelous, extraordinary",
    Molest:	"Harass, tease",
    Modest:	"Humble, courteous",
    Momentous:	"Notable, eventful",
    Mollify:	"Appease, assuage",
    Morbid:	"Nasty, Macabre",
    Monotonous:	"Irksome, tedious",
    Murky:	"Dusky, dreary",
    Munificent:	"Liberal, hospitable",
    Mutual:	"Joint, identical",
    Mutinous:	"Recalcitrant, insurgent",
    Nimble:	"Prompt, brisk",
    Niggardly:	"Miser, covetous",
    Noxious:	"Baneful, injurious",
    Notion:	"Conceit, Apprehension",
    Novice:	"Tyro, beginner",
    Nonchalant:	"Indifferent, negligent",
    Nullify:	"Cancel, annual",
    Numerous:	"Profuse, various",
    Obliging:	"Complaisant, Willing",
    Obstruct:	"Impede, prevent",
    Obstinate:	"Stubborn, Adamant",
    Obscure:	"Arcane, Vague",
    Obvious:	"Evident, apparent",
    Obtain:	"Access, Inherit",
    Offensive:	"Abhorrent, obnoxious",
    Odious:	"Malevolent, obnoxious",
    Offspring:	"Descendant, sibling",
    Occult:	"Latent, ambiguous",
    Opaque:	"Obscure, shady",
    Ominous:	"Menacing, Foreboding",
    Oracular:	"Cryptic, vague",
    Optimist:	"Idealist",
    Ornamental:	"Decorative, adorned",
    Ordain:	"Order, impose",
    Outrage:	"Offence, maltreatment",
    Outbreak:	"Eruption, insurrection",
    Persuade:	"Cajole, Impress",
    Pacify:	"Appease, Chasten",
    Propagate:	"Inseminate, fecundate",
    Perturbed:	"Flustered, anxious",
    Prompt:	"Precise, Punctual",
    Progress:	"Pace, Betterment",
    Pamper:	"Flatter, indulge",
    Prudence:	"Vigilance, Discretion",
    Peerless:	"Matchless, unrivalled",
    Paramount:	"Foremost, eminent",
    Pertness:	"Flippancy, impudence",
    Peevish:	"Perverse, sullen",
    Placid:	"Tranquil, calm",
    Perverse:	"Petulant, obstinate",
    Precarious:	"Doubtful, insecure",
    Pompous:	"Haughty, arrogant",
    Predicament:	"Plight, dilemma",
    Quaint:	"Queer, strange",
    Quack:	"Impostor, deceiver",
    Quell:	"Subdue, reduce",
    Quarantine:	"Seclude, screen",
    Quibble:	"Equivocate, prevaricate",
    Rapidity:	"Quickness, Velocity",
    Raid:	"Incursion, Foray",
    Rebellious:	"Restless, attacking",
    Reason:	"Acumen, Bounds",
    Reluctant:	"Cautious, Averse",
    Rectify:	"Amend, Remedy",
    Ravage:	"Destroy, ruin",
    Remnant:	"Residue, piece",
    Ratify:	"Consent, approve",
    Restrain:	"Detain, Confine",
    Redeem:	"Recover, liberate",
    Remorse:	"Regret, penitence",
    Remonstrate:	"Censure, protest",
    Resentment:	"Displeasure, wrath",
    Rescind:	"Annul, abrogate",
    Reverence:	"Respect, esteem",
    Retract:	"Recant, withdraw",
    Rustic:	"Rural, uncivilised",
    Rout:	"Vanquish, overthrow",
    Ruthless:	"Remorseless, inhumane",
    Savage:	"Wild, untamed",
    Sacred:	"Cherish, Divine",
    Steep:	"Course, lofty",
    Startled:	"Frightened, Shocked",
    Sublime:	"Magnificent, eminent",
    Stranger:	"Immigrant, guest",
    Sympathy:	"Tenderness, harmony",
    Succinct:	"Concise, Terse",
    Sarcastic:	"Ironical, derisive",
    System:	"Scheme, Entity",
    Shrewd:	"Cunning, craftly",
    Saucy:	"Impudent, insolent",
    Servile:	"Slavish, Docile",
    Scanty:	"Scarce, insufficient",
    Slander:	"Defame, malign",
    Shabby:	"Miserable, impoverished",
    Solicit:	"Entreat, implore",
    Sneer:	"Mock, scorn",
    Stain:	"Blemish, tarnish",
    Subterfuge:	"Deceit, Stratagem",
    Sporadic:	"Intermittent, scattered",
    Spurious:	"Fake, Counterfeit",
    Squalid:	"Dirty, filthy",
    Spry:	"Nimble, Brisk",
    Sterile:	"Barren, Impotent",
    Successful:	"Propitious, Felicitous",
    Subsequent:	"Consequent, following",
    Stupor:	"Lethargy, unconsciousness",
    Subvert:	"Demolish, sabotage",
    Substantial:	"Considerable, solid",
    Sycophant:	"Parasite, flatterer",
    Superficial:	"Partial, shallow",
    Taciturn:	"Reserved, silent",
    Taboo:	"Prohibit, ban",
    Temperate:	"Cool, moderate",
    Tedious:	"Wearisome. Irksome",
    Tenacious:	"Stubborn, Dodge",
    Tenement:	"Apartment, Digs",
    Timid:	"Diffident, coward",
    Throng:	"Assembly, crowd",
    Transient:	"Temporal, transitory",
    Tranquil:	"Peaceful, composed",
    Treacherous:	"Dishonest, duplicitous",
    Trenchant:	"Assertive, forceful",
    Tumultuous:	"Violent, riotous",
    Trivial:	"Trifling, insignificant",
    Tame:	"Compliant, Subdued",
    Tyro:	"Beginner, riotous",
    Thick:	"Chunky, massive",
    Terse:	"Incisive, Compact",
    Tranquil:	"Amicable, Calm",
    Thrifty:	"Frugal, prudent",
    Tremble:	"Vibrate",
    Transparent:	"Diaphanous",
    Utterly:	"Completely, entirely",
    Uncouth:	"Awkward, ungraceful",
    Uncouth:	"Boorish, Clownish",
    Umbrage:	"Chagrin, offense",
    Urge:	"Incite, Implore",
    Urchin:	"Foundling, Orphan",
    Vagrant:	"Wander, roaming",
    Vain:	"Arrogant, egoistic",
    Vanity:	"Conceit, pretension",
    Valor:	"Bravery, prowess",
    Venom:	"Poison, malevolence",
    Venerable:	"Esteemed, honored",
    Vicious:	"Corrupt, obnoxious",
    Veteran:	"Ingenious, experienced",
    Vivacious:	"Spirited, Energetic",
    Vigilant:	"Cautious, alert",
    Vouch:	"Confirm, consent",
    Vilify:	"Malign, Slur, Defame",
    Vivid:	"Eloquent, lucid",
    Virtue:	"Ethic, morality",
    Wan:	"Pale, faded",
    Waive:	"Relinquish, remove",
    Wary:	"Cautious, circumspect",
    Wane:	"Decline, Dwindle",
    Wicked:	"Vicious, immoral",
    Wed:	"Marry, combine",
    Wile:	"Trickery, Artifice",
    Wield:	"Exert, employ",
    Wilt:	"wither, perish",
    Winsome:	"Beautiful, Comely",
    Yield:	"Surrender abdicate",
    Yell:	"Shout, shriek",
    Yoke:	"Connect, harness",
    Yearn:	"Languish, crave",
    Zenith:	"Summit, apex",
    Zeal:	"Eagerness, fervor", 
    Zest:	"Delight, enthusiasm",
    Abrogate:	"Revoke formally",
    Acerbic:	"(especially of a comment or style of speaking) sharp and forthright.",
    Acrimony:	"Bitterness or ill feeling.",
    Adduce:	"Affirm",
    Admonish:	"Warn",
    Aesthetic:	"Concerned with beauty or the appreciation of beauty",
    Afflicting:	"Cause or become hurt",
    Allure:	"Appeal",
    Alms:	"Money or goods contributed to the poor",
    Altercation:	"Noisy quarrel, a loud argument or disagreement",
    Amiss:	"Away from the correct or expected course",
    Antagonise:	"Cause problem",
    Apostate:	"Traitor",
    Astound:	"Shock or greatly surprise",
    Atrocious:	"Shockingly brutal or cruel",
    Attenuate:	"Reduced in strength",
    Attuned:	"Adjust",
    Augur:	"Predictor",
    Avowedly:	"Allegedly",
    Banal:	"So lacking in originality as to be obvious and boring.",
    Banter:	"The playful and friendly exchange of teasing remarks.",
    Bemused:	"Absent minded",
    Bequest:	"Something given in will",
    Besotted:	"Very drunk",
    Bigotry:	"Intolerance",
    Blithe:	"Happy",
    Boisterous:	"Noisy and lacking in restraint or discipline",
    Brazenly:	"Honestly, in an obvious way, with no effort to hide something",
    Brouhaha:	"Uproar, a lot of noise or angry complaining about something",
    Buoyed:	"Make light",
    Cachet:	"An indication of approved or superior status",
    Captivate:	"Attract, enchant",
    Churlish:	"Crude",
    Cohort:	"Partner in activity",
    Colloquy:	"A conversation especially a formal one",
    Colossal:	"Very large",
    Convulse:	"Disturb",
    Covenant:	"A formal agreement between two or more parties to perform or not perform some action",
    Coveted:	"Desire strongly",
    Culminating:	"Bring to a head or to the highest point; end, especially to reach a final or cli- mactic stage",
    Deceit:	"Practice of misleading",
    Deference:	"A courteous expression (by word or deed) of esteem or regard",
    Detrimental:	"Tending to cause harm",
    Dialectic:	"Logical, rational",
    Dilapidate:	"Demolish, deface",
    Dilatory:	"Slow or wasting time",
    Diligent:	"Persevering, hardworking",
    Discerning:	"Discriminating",
    Dispensation:	"Allocation of supply",
    Dissident:	"Characterised by departure from accepted beliefs or standards",
    Edifice:	"Structure",
    Efficacy:	"Productiveness",
    Egregious:	"Outstandingly bad; shocking, remarkably good.",
    Elfish:	"Usually good-naturedly mischievous",
    Emblematic:	"Serving as a visible symbol for something abstract",
    Encomium:	"Compliment",
    Engulf:	"Absorb",
    Enormity:	"Horribleness",
    Entente:	"Agreement",
    Enunciation:	"The articulation of speech regarded from the point of view of its intelligibility to the audience",
    Epiphany:	"A moment of sudden understanding or revelation",
    Errant:	"Wrong , behaving wrongly in some way, especially by leaving home",
    Erudite:	"Well-educated",
    Espouse:	"Support",
    Exasperate:	"Provoke",
    Exigent:	"Urgent",
    Expats:	"A person who is voluntarily absent from home or country",
    Exuberance:	"Energy, enthusiasm",
    Fabrication:	"A deliberately false or improbable account; the act of making something (a product) from raw materials",
    Farcical:	"Absurd",
    fauxpas:	"A socially awkward or tactless act",
    Fidgety:	"Nervous and unable to relax",
    Fissure:	"A long, narrow opening",
    Gesticulate:	"Show, express or direct through movement",
    Gloom:	"Depression",
    Gory:	"Bloody",
    Grandeur:	"The quality of being magnificent, splendid or grand",
    Grim:	"Hopeless",
    Gruff:	"Bad tempered",
    Gullible:	"Trusting",
    Heckle:	"Jeer", 
    Hoodwink:	"Deceive or trick",
    Hurled:	"Throw forcefully",
    Hustings:	"The activities involved in political campaigning (especially speech making)", 
    Imbibe:	"Absorb or assimilate (ideas or knowledge).",
    Implacable:	"Merciless",
    Impounded:	"Kept",
    Inception:	"An event that is a beginning; a first part or stage of subsequent events",
    Incessant:	"Never ending",
    Inchoate:	"Only partly in existence; imperfectly formed",
    Inclement:	"Used of persons or behaviour; showing no clemency or mercy",
    Inclement:	"Bitter",
    Indefatigable:	"Showing sustained enthusiastic action with unflagging vitality",
    Inebriated:	"Make (someone) drunk; intoxicate.",
    Inflict:	"Make (someone) do something unpleasant",
    Insinuate:	"Hint, suggest, to suggest, without being direct, that something unpleasant is true",
    Intrepid:	"Invulnerable to fear or intimidation",
    Irritants:	"Annoyance",
    Implacable:	"Merciless",
    Jab:	"Poke violently",
    Jargon:	"Technical terminology",
    Jaunt:	"Short trip",
    Jeopardize:	"Put at risk",
    Jumble:	"Mix something up to cause confusion",
    Kingpin:	"A person or thing that is essential to the success of an organisation or operation.",
    Knack:	"Ability",
    Labyrinthine:	"Complex",
    Laconic:	"(of a person, speech, or style of writing) using very few words.",
    Legion:	"Numerous",
    Lenity:	"Mercifulness as a consequence of being lenient or tolerant",
    Maraud:	"Go about in search of things to steal or people to attack. raid and plunder (a place).",
    Martinet:	"Someone who demands exact conformity to rules and forms",
    Menage:	"Family",
    Meticulous:	"Very careful and precise",
    Myriad:	"A large indefinite number, a countless or extremely great number of people or things",
    Nigardly:	"Close",
    Nigh:	"Near",
    Nonplussed:	"Filled with bewilderment",
    Obnoxious:	"Causing disapproval or protest",
    Occult:	"Secret",
    Ossify:	"To become rigid",
    Panache:	"Distinctive and stylish elegance",
    Panoramic:	"(of a view or picture) with a wide view surrounding the observer; sweeping.",
    Paradox:	"Puzzle",
    Paradox:	"Contradiction",
    Paraphernalia:	"Miscellaneous articles, especially the equipment needed for a particular activity.",
    Parched:	"Dried out by heat or excessive exposure to sunlight",
    Parley:	"Negotiation",
    Pecuniary:	"Relating or involving money",
    Peddling:	"Sell door to door",
    Peg:	"Attach, a reason for discussing something further",
    Perceive:	"Notice, see",
    Percussion:	"Musical instruments played by striking with the hand or with a stick or beater, or by shaking, including drums, cymbals, xylophones, gongs, bells, and rattles.",
    Peril:	"Risk,danger",
    Pernicious:	"Hurtful",
    Perpetual:	"Continual, lasting",
    Perturbed:	"Trouble",
    Picket:	"A worker or group of workers who protest outside a building to prevent other workers from going inside, especially because they have a disagreement with their employers",
    Piffle:	"Nonsense",
    Pilfer:	"Steal (things of little value).",
    Piqued:	"Offend",
    Pitting:	"Oppose",
    Pliability:	"Adaptability of mind or character",
    Plight:	"A dangerous, difficult, or otherwise unfortunate situation",
    Polemic:	"Argumentative",
    Precinct:	"A district of a city or town marked out for administrative purposes",
    Pretence:	"Falsehood",
    Primordial:	"Earliest",
    Pristine:	"Clean, pure",
    Proliferate:	"Grow rapidly",
    Protagonist:	"Person who takes the lead",
    Prudent:	"Wise , sensible",
    Purport:	"To pretend to be or to do something, especially in a way that is not easy to be- lieve.",
    Quiver:	"Shaking",
    Quixotic:	"Idealistic",
    Remediation:	"Act of correcting an error or a fault or an evil",
    Reminiscent:	"Suggestive of something in the past",
    Resonate:	"Be received or understood",
    Resuscitate:	"Revive",
    Ripping:	"Marvelous",
    Rugged:	"Sturdy and strong in constitution or construction; enduring",
    Sacrament:	"An important religious ceremony in the christian church, such as baptism or communion",
    Saddle:	"A seat for the rider of a horse or camel; load or burden; encumber",
    Scathing:	"Marked by harshly abusive criticism",
    Scorn:	"To show contempt",
    Scourge:	"A whip used to inflict punishment; something causing misery or death",
    Semblance:	"An outward or token appearance or form that is deliberately misleading",
    Sinister:	"Nasty",
    Smear:	"Spread over",
    Sobriquet:	"A familiar name for a person",
    Spate:	"Continuation",
    Sporadic:	"On and off",
    Sprawled:	"Spread out",
    Spurious:	"Plausible but false; intended to deceive",
    Spurn:	"Refuse with contempt",
    Stout:	"Rather fat or of heavy build",
    Striving:	"To try very hard to do something or to make something happen, especially for a long time or against difficulties",
    Scourge:	"A whip used to inflict punishment; something causing misery or death",
    Stupor:	"The feeling of distress and disbelief that you have when something bad happens accidentally; marginal consciousness",
    Stuttering:	"Stammer",
    Stymie:	"Frustrate, hinder",
    Succinctly:	"Briefly",
    Succour:	"Help given to someone, especially someone who is suffering or in need",
    Succumb:	"Die or surrender",
    Swat:	"Hit",
    Syllogistic:	"Of or relating to or consisting of syllogism",
    Taciturnity:	"Reserve",
    Tandem:	"Alongside each other",
    Taradiddle:	"A petty lie., pretentious nonsense.",
    Tempest:	"A violent windy storm.",
    Tenor:	"Intent",
    Tenous:	"Very weak or slight.",
    Terrestrial:	"On or relating to the earth.",
    Timid:	"Showing fear and lack of confidence",
    Tirade:	"A speech of violent denunciation",
    Toil:	"Hard work",
    Traverse:	"Travel across or pass over; to cover or extend over an area or time period",
    Trudge:	"Walk heavily",
    Tumult:	"Uproar",
    Tyranny:	"Dictatorship, a situation in which someone or something controls how you are able to live, in an unfair way",
    Unabashed:	"Not embarrassed",
    Uncanny:	"Suggesting the operation of supernatural influences",
    Unctuous:	"Sycophantic",
    Unerrign:	"Accurate",
    Vaccilation:	"Fluctuation",
    Valiant:	"Having or showing valour",
    Veer:	"Change direction",
    Vendetta:	"A feud in which members of the opposing parties murder each other",
    Vicarious:	"Experienced in the imagination through the feelings or actions of another person.",
    Wading:	"Often through water",
    Wane:	"To become weaker in strength or influence",
    Weary:	"Tired",
    Wobbling:	"Shaking",
    Zenith:	"The time at which something is most powerful or successful.",
};

//Initial References
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);
let randomWord = "",
  randomHint = "";
let winCount = 0,
  lossCount = 0;

//Generate random value
const generateRandomValue = (array) => Math.floor(Math.random() * array.length);

//Block all the buttons
const blocker = () => {
  let lettersButtons = document.querySelectorAll(".letters");
  stopGame();
};

//Start Game
startBtn.addEventListener("click", () => {
  controls.classList.add("hide");
  init();
});

//Stop Game
const stopGame = () => {
  controls.classList.remove("hide");
};

//Generate Word Function
const generateWord = () => {
  letterContainer.classList.remove("hide");
  userInpSection.innerText = "";
  randomWord = words[generateRandomValue(words)];
  randomHint = options[randomWord];
  hintRef.innerHTML = `<div id="wordHint">
  <span>Synonyms and Meaning: </span>${randomHint}</div>`;
  let displayItem = "";
  randomWord.split("").forEach((value) => {
    displayItem += '<span class="inputSpace">_ </span>';
  });

  //Display each element as span
  userInpSection.innerHTML = displayItem;
  userInpSection.innerHTML += `<div id='chanceCount'>Chances Left: ${lossCount}</div>`;
};

//Initial Function
const init = () => {
  winCount = 0;
  lossCount = 10;
  randomWord = "";
  word.innerText = "";
  randomHint = "";
  message.innerText = "";
  userInpSection.innerHTML = "";
  letterContainer.classList.add("hide");
  letterContainer.innerHTML = "";
  generateWord();

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);

    //Character button onclick
    button.addEventListener("click", () => {
      message.innerText = `Correct Letter`;
      message.style.color = "#008000";
      let charArray = randomWord.toUpperCase().split("");
      let inputSpace = document.getElementsByClassName("inputSpace");

      //If array contains clicked value replace the matched Dash with Letter
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //If character in array is same as clicked button
          if (char === button.innerText) {
            button.classList.add("correct");
            //Replace dash with letter
            inputSpace[index].innerText = char;
            //increment counter
            winCount += 1;
            //If winCount equals word length
            if (winCount == charArray.length) {
              document.getElementById("logo").style.visibility = "hidden";
              resultText.innerHTML = "You Entered The Correct Letters";
              word.innerHTML = `The word was: <span>${randomWord}</span>`;
              startBtn.innerText = "Next Word";
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        button.classList.add("incorrect");
        lossCount -= 1;
        document.getElementById(
          "chanceCount"
        ).innerText = `Chances Left: ${lossCount}`;
        message.innerText = `Incorrect Letter`;
        message.style.color = "#ff0000";
        if (lossCount == 0) {
          document.getElementById("logo").style.visibility = "hidden";
          word.innerHTML = `The word was: <span>${randomWord}</span>`;
          resultText.innerHTML = "You Entered The Incorrect Letters";
          startBtn.innerText = "Next Word";
          blocker();
        }
      }

      //Disable clicked buttons
      button.disabled = true;
    });

    //Append generated buttons to the letters container
    letterContainer.appendChild(button);
  }
};

window.onload = () => {
  init();
};