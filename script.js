// Master Questions and Solutions Dataset
const DATASET = {
    "section-a": [
        {
            id: "q1",
            number: 1,
            type: "mcq",
            marks: 1,
            question: "Which of the following liquid pairs shows a negative deviation from Raoult's law?",
            options: [
                "Ethanol + Acetone",
                "Benzene + Toluene",
                "Acetone + Chloroform",
                "Nitromethane + Acetone"
            ],
            correctOption: "c",
            correctIndex: 2,
            solution: "In a mixture of acetone and chloroform, the intermolecular attractive forces between acetone (A) and chloroform (B) are stronger than the A-A (acetone-acetone) and B-B (chloroform-chloroform) attractions in the pure liquids. This occurs because the hydrogen atom of chloroform forms a strong hydrogen bond with the carbonyl oxygen of acetone:<br><br>$$\\text{Cl}_3\\text{C-H}\\cdots\\text{O}=\\text{C}(\\text{CH}_3)_2$$<br><br>As a result, the escaping tendency of both molecules decreases, lowering the overall vapor pressure of the solution compared to that predicted by Raoult's law. This represents a <strong>negative deviation</strong>."
        },
        {
            id: "q2",
            number: 2,
            type: "mcq",
            marks: 1,
            question: "The value of Henry's Law constant ($K_H$):",
            options: [
                "increases with increase in temperature.",
                "decreases with increase in temperature.",
                "remains constant with temperature.",
                "first increases then decreases."
            ],
            correctOption: "a",
            correctIndex: 0,
            solution: "According to Henry's Law: $p = K_H \\cdot x$. The solubility of a gas in a liquid is an exothermic process ($\\Delta H_{\\text{sol}} < 0$). According to Le Chatelier's Principle, as temperature increases, the solubility ($x$) of the gas decreases for a given partial pressure ($p$). Since $x = p / K_H$, a decrease in $x$ at a constant $p$ mathematically requires an <strong>increase in the Henry's law constant ($K_H$)</strong>."
        },
        {
            id: "q3",
            number: 3,
            type: "mcq",
            marks: 1,
            question: "An isotonic solution has the same:",
            options: [
                "Vapor pressure",
                "Osmotic pressure",
                "Boiling point elevation",
                "Freezing point depression"
            ],
            correctOption: "b",
            correctIndex: 1,
            solution: "Isotonic solutions are defined as solutions that possess the same osmotic pressure ($\\Pi$) at a given temperature. If two solutions are separated by a semipermeable membrane, no net osmosis (flow of solvent) occurs between them because their osmotic pressures are equal ($\\Pi_1 = \\Pi_2$)."
        },
        {
            id: "q4",
            number: 4,
            type: "mcq",
            marks: 1,
            question: "The SI unit of molar conductivity ($\\Lambda_m$) is:",
            options: [
                "$\\text{S cm}^2\\text{ mol}^{-1}$",
                "$\\text{S m}^2\\text{ mol}^{-1}$",
                "$\\text{S}^{-1}\\text{ m}^2\\text{ mol}^{-1}$",
                "$\\Omega^{-1}\\text{ cm}^{-1}$"
            ],
            correctOption: "b",
            correctIndex: 1,
            solution: "Molar conductivity is given by $\\Lambda_m = \\frac{\\kappa}{C}$. In SI units, conductivity ($\\kappa$) is expressed in Siemens per meter ($\\text{S m}^{-1}$) and concentration ($C$) is in moles per cubic meter ($\\text{mol m}^{-3}$). Substituting these in: $\\Lambda_m = \\frac{\\text{S m}^{-1}}{\\text{mol m}^{-3}} = \\text{S m}^2\\text{ mol}^{-1}$."
        },
        {
            id: "q5",
            number: 5,
            type: "mcq",
            marks: 1,
            question: "How many Coulombs of electricity are required for the reduction of 1 mole of $\\text{MnO}_4^-$ to $\\text{Mn}^{2+}$?",
            options: [
                "96,500 C",
                "1,93,000 C",
                "4,82,500 C",
                "5,79,000 C"
            ],
            correctOption: "c",
            correctIndex: 2,
            solution: "The balanced reduction half-reaction is: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. In this reaction, manganese is reduced from an oxidation state of $+7$ to $+2$, which requires 5 moles of electrons per mole of $\\text{MnO}_4^-$. Therefore: $Q = n \\cdot F = 5 \\times 96,500\\text{ C} = 4,82,500\\text{ C}$."
        },
        {
            id: "q6",
            number: 6,
            type: "mcq",
            marks: 1,
            question: "The cell constant of a conductivity cell:",
            options: [
                "changes with change of electrolyte.",
                "changes with change of concentration.",
                "changes with temperature.",
                "remains constant for a given cell."
            ],
            correctOption: "d",
            correctIndex: 3,
            solution: "The cell constant ($G^* = \\frac{l}{A}$) is determined solely by the physical dimensions of the cell—specifically, the distance between the electrodes ($l$) and their cross-sectional area ($A$). Therefore, it remains constant for a given cell, completely independent of the electrolyte type, concentration, or temperature."
        },
        {
            id: "q7",
            number: 7,
            type: "mcq",
            marks: 1,
            question: "The half-life period ($t_{1/2}$) of a first-order reaction is independent of:",
            options: [
                "Rate constant",
                "Initial concentration of reactant",
                "Temperature",
                "Activation energy"
            ],
            correctOption: "b",
            correctIndex: 1,
            solution: "For a first-order reaction, the half-life period is given by: $t_{1/2} = \\frac{0.693}{k}$, where $k$ is the rate constant. Since this equation contains no concentration terms, $t_{1/2}$ is completely independent of the initial concentration of the reactant ($[A]_0$)."
        },
        {
            id: "q8",
            number: 8,
            type: "mcq",
            marks: 1,
            question: "If the concentration of a reactant is increased by a factor of 4 and the rate of reaction increases by a factor of 2, the order of reaction is:",
            options: [
                "2",
                "1",
                "0.5",
                "0"
            ],
            correctOption: "c",
            correctIndex: 2,
            solution: "Let $\\text{Rate } R = k[A]^n$. When concentration is multiplied by 4: $R' = k(4[A])^n = 4^n \\cdot R$. We are given that the rate increases by a factor of 2 ($R' = 2R$). Therefore: $4^n = 2 \\Rightarrow (2^2)^n = 2^1 \\Rightarrow 2n = 1 \\Rightarrow n = 0.5$."
        },
        {
            id: "q9",
            number: 9,
            type: "mcq",
            marks: 1,
            question: "According to Arrhenius equation, the slope of the plot of $\\ln k$ vs $1/T$ is equal to:",
            options: [
                "$-E_a / R$",
                "$E_a / R$",
                "$-E_a / 2.303R$",
                "$A / R$"
            ],
            correctOption: "a",
            correctIndex: 0,
            solution: "The Arrhenius equation is $k = A \\cdot e^{-E_a / RT}$. Taking natural logarithm: $\\ln k = \\ln A - \\frac{E_a}{R}\\left(\\frac{1}{T}\\right)$. Comparing this to $y = mx + c$, where $y = \\ln k$ and $x = 1/T$, the slope ($m$) is equal to $-E_a / R$."
        },
        {
            id: "q10",
            number: 10,
            type: "mcq",
            marks: 1,
            question: "Which of the following alkyl halides undergoes $\\text{S}_N1$ reaction fastest?",
            options: [
                "$\\text{CH}_3\\text{-CH}_2\\text{-Cl}$",
                "$(\\text{CH}_3)_2\\text{CH-Cl}$",
                "$(\\text{CH}_3)_3\\text{C-Br}$",
                "$(\\text{CH}_3)_3\\text{C-Cl}$"
            ],
            correctOption: "c",
            correctIndex: 2,
            solution: "$\\text{S}_N1$ reactions proceed via a carbocation intermediate, and their rate depends on carbocation stability. Tertiary ($3^\\circ$) alkyl halides form highly stable tertiary carbocations ($(\\text{CH}_3)_3\\text{C}^+$) stabilized by hyperconjugation and $+I$ induction of three methyl groups. Between $(\\text{CH}_3)_3\\text{C-Br}$ and $(\\text{CH}_3)_3\\text{C-Cl}$, the $\\text{C-Br}$ bond is weaker and bromide is a better leaving group than chloride, making the bromide reaction faster."
        },
        {
            id: "q11",
            number: 11,
            type: "mcq",
            marks: 1,
            question: "Finkelstein reaction is used for the preparation of:",
            options: [
                "Alkyl fluorides",
                "Alkyl iodides",
                "Alkyl chlorides",
                "Aryl iodides"
            ],
            correctOption: "b",
            correctIndex: 1,
            solution: "The Finkelstein reaction is a halogen exchange reaction specifically used to prepare alkyl iodides by reacting alkyl chlorides or bromides with sodium iodide (\\text{NaI}) in dry acetone: $\\text{R-Cl} + \\text{NaI} \\xrightarrow{\\text{acetone}} \\text{R-I} + \\text{NaCl}\\downarrow$."
        },
        {
            id: "q12",
            number: 12,
            type: "mcq",
            marks: 1,
            question: "Chlorobenzene reacts with metallic sodium in dry ether to give diphenyl. This reaction is known as:",
            options: [
                "Wurtz reaction",
                "Fittig reaction",
                "Wurtz-Fittig reaction",
                "Kolbe's reaction"
            ],
            correctOption: "b",
            correctIndex: 1,
            solution: "The reaction of two molecules of aryl halides with metallic sodium in dry ether to yield a diaryl compound (diphenyl) is called the <strong>Fittig reaction</strong>: $2\\text{C}_6\\text{H}_5\\text{Cl} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\text{C}_6\\text{H}_5\\text{-C}_6\\text{H}_5 + 2\\text{NaCl}$."
        },
        {
            id: "q13",
            number: 13,
            type: "ar",
            marks: 1,
            question: "<strong>Assertion (A):</strong> Elevation in boiling point is a colligative property.<br><strong>Reason (R):</strong> Elevation in boiling point depends on the nature of the solute particles.",
            options: [
                "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
                "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
                "(A) is true, but (R) is false.",
                "(A) is false, but (R) is true."
            ],
            correctOption: "c",
            correctIndex: 2,
            solution: "The assertion is true: Elevation in boiling point is a colligative property because it depends on concentration of particles. However, the reason is false: by definition, colligative properties are completely independent of the chemical nature of solute particles."
        },
        {
            id: "q14",
            number: 14,
            type: "ar",
            marks: 1,
            question: "<strong>Assertion (A):</strong> Conductivity of an electrolytic solution decreases with decrease in concentration.<br><strong>Reason (R):</strong> The number of ions per unit volume decreases on dilution.",
            options: [
                "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
                "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
                "(A) is true, but (R) is false.",
                "(A) is false, but (R) is true."
            ],
            correctOption: "a",
            correctIndex: 0,
            solution: "Conductivity ($\\kappa$) is defined as the conductance of a unit volume of solution. On dilution (decrease in concentration), the total volume of solution increases, and therefore the number of current-carrying ions per unit volume decreases. Both statements are true, and (R) is the correct explanation of (A)."
        },
        {
            id: "q15",
            number: 15,
            type: "ar",
            marks: 1,
            question: "<strong>Assertion (A):</strong> Molecularity of a reaction can be zero or fractional.<br><strong>Reason (R):</strong> Molecularity is the number of reacting species taking part in an elementary step.",
            options: [
                "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
                "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
                "(A) is true, but (R) is false.",
                "(A) is false, but (R) is true."
            ],
            correctOption: "d",
            correctIndex: 3,
            solution: "Assertion is false: Molecularity represents the actual number of molecules or atoms colliding simultaneously in an elementary reaction. Because reacting entities exist as discrete units, molecularity must be a positive integer ($1, 2, 3$) and cannot be zero, negative, or fractional. Reason (R) is the correct definition of molecularity, so it is true."
        },
        {
            id: "q16",
            number: 16,
            type: "ar",
            marks: 1,
            question: "<strong>Assertion (A):</strong> Haloarenes are less reactive towards nucleophilic substitution than haloalkanes.<br><strong>Reason (R):</strong> In haloarenes, C-X bond acquires partial double bond character due to resonance.",
            options: [
                "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
                "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
                "(A) is true, but (R) is false.",
                "(A) is false, but (R) is true."
            ],
            correctOption: "a",
            correctIndex: 0,
            solution: "Haloarenes are highly unreactive to nucleophilic attack. This is primarily because the lone pair of electrons on halogen undergoes conjugation with the benzene ring, imparting a partial double bond character to the $\\text{C-X}$ bond. This makes the bond shorter, stronger, and much harder to cleave. Both statements are true, and (R) is the correct explanation of (A)."
        }
    ],
    "section-b": [
        {
            id: "q17",
            number: 17,
            marks: 2,
            question: "State Raoult's Law for a solution of non-volatile solute. How is the molecular mass of a solute determined using relative lowering of vapor pressure?",
            solution: "<strong>1. Raoult's Law Statement:</strong><br>At a given temperature, the relative lowering of vapor pressure of a dilute solution containing a non-volatile solute is equal to the mole fraction of the solute dissolved in it.<br>$$\\frac{p_1^\\circ - p_1}{p_1^\\circ} = x_2$$<br>where $p_1^\\circ$ is the vapor pressure of pure solvent, $p_1$ is the vapor pressure of solvent in solution, and $x_2$ is the mole fraction of solute.<br><br><strong>2. Molar Mass Determination ($M_2$):</strong><br>Let $w_2$ and $M_2$ be the mass and molar mass of solute, and $w_1$ and $M_1$ be the mass and molar mass of solvent. Solute mole fraction $x_2 = \\frac{n_2}{n_1 + n_2}$. For dilute solutions, $n_2 \\ll n_1$, so we can neglect $n_2$ in the denominator:<br>$$x_2 \\approx \\frac{n_2}{n_1} = \\frac{w_2 / M_2}{w_1 / M_1} = \\frac{w_2 \\cdot M_1}{w_1 \\cdot M_2}$$<br>Substituting this into the Raoult's Law equation:<br>$$\\frac{p_1^\\circ - p_1}{p_1^\\circ} = \\frac{w_2 \\cdot M_1}{w_1 \\cdot M_2}$$<br>Rearranging the equation to solve for $M_2$:<br>$$M_2 = \\frac{w_2 \\cdot M_1 \\cdot p_1^\\circ}{w_1 \\cdot (p_1^\\circ - p_1)}$$"
        },
        {
            id: "q18",
            number: 18,
            marks: 2,
            question: "Calculate the degree of dissociation ($\\alpha$) of $0.00241\\text{ M}$ acetic acid if its molar conductivity ($\\Lambda_m$) is $39.05\\text{ S cm}^2\\text{ mol}^{-1}$. Given: $\\Lambda^\\circ(\\text{H}^+) = 349.6\\text{ S cm}^2\\text{ mol}^{-1}$ and $\\Lambda^\\circ(\\text{CH}_3\\text{COO}^-) = 40.9\\text{ S cm}^2\\text{ mol}^{-1}$.",
            solution: "<strong>Step-by-step Solution:</strong><br>1. Calculate limiting molar conductivity ($\\Lambda^\\circ_m$) of acetic acid using Kohlrausch's law:<br>$$\\Lambda^\\circ_m(\\text{CH}_3\\text{COOH}) = \\Lambda^\\circ(\\text{H}^+) + \\Lambda^\\circ(\\text{CH}_3\\text{COO}^-)$$<br>$$\\Lambda^\\circ_m(\\text{CH}_3\\text{COOH}) = 349.6\\text{ S cm}^2\\text{ mol}^{-1} + 40.9\\text{ S cm}^2\\text{ mol}^{-1} = 390.5\\text{ S cm}^2\\text{ mol}^{-1}$$<br><br>2. Calculate degree of dissociation ($\\alpha$):<br>$$\\alpha = \\frac{\\Lambda_m}{\\Lambda^\\circ_m} = \\frac{39.05}{390.5} = 0.1$$<br><br><strong>Answer:</strong> The degree of dissociation of acetic acid is <strong>$0.1$</strong> (or **$10\\%$**)."
        },
        {
            id: "q19",
            number: 19,
            marks: 2,
            question: "A first-order reaction has a rate constant of $1.15 \\times 10^{-3}\\text{ s}^{-1}$. How long will $5.0\\text{ g}$ of this reactant take to reduce to $3.0\\text{ g}$?",
            solution: "<strong>Solution:</strong><br>The integrated rate equation for a first-order reaction is:<br>$$t = \\frac{2.303}{k} \\log_{10} \\left(\\frac{[A]_0}{[A]}\\right)$$<br>Given values:<br><ul><li>$k = 1.15 \\times 10^{-3}\\text{ s}^{-1}$</li><li>Initial mass $[A]_0 = 5.0\\text{ g}$</li><li>Final mass $[A] = 3.0\\text{ g}$</li></ul><br>Substitute values:<br>$$t = \\frac{2.303}{k} \\log_{10} \\left(\\frac{5.0}{3.0}\\right)$$<br>$$t = \\frac{2.303}{1.15 \\times 10^{-3}} \\log_{10}(1.6667)$$<br>Using $\\log_{10}(1.6667) \\approx 0.2218$:<br>$$t = \\frac{2.303 \\times 0.2218}{1.15 \\times 10^{-3}} = \\frac{0.5109}{1.15 \\times 10^{-3}} \\approx 444.3\\text{ seconds}$$<br><br><strong>Answer:</strong> It takes <strong>$444.3\\text{ seconds}$</strong> (or $\\approx 7.4\\text{ minutes}$)."
        },
        {
            id: "q20",
            number: 20,
            marks: 2,
            question: "Give chemical tests to distinguish between:<br><strong>(a) Chlorobenzene and Benzyl chloride</strong><br><strong>(b) Chloroform and Carbon tetrachloride</strong>",
            solution: "<strong>(a) Chlorobenzene and Benzyl chloride:</strong><br><ul><li><strong>Test:</strong> Heat each compound with aq. $\\text{NaOH}$, acidify with dilute $\\text{HNO}_3$, and add silver nitrate ($\\text{AgNO}_3$) solution.</li><li><strong>Benzyl chloride:</strong> Forms a <strong>curdy white precipitate of silver chloride ($\\text{AgCl}$),</strong> which is soluble in ammonium hydroxide ($\\text{NH}_4\\text{OH}$):<br>$$\\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl} + \\text{NaOH} \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH} + \\text{NaCl}$$<br>$$\\text{NaCl} + \\text{AgNO}_3 \\rightarrow \\text{AgCl}\\downarrow \\text{ (white ppt)} + \\text{NaNO}_3$$</li><li><strong>Chlorobenzene:</strong> No precipitate forms because chlorobenzene is unreactive under ordinary conditions due to partial double bond character of $\\text{C-Cl}$ bond.</li></ul><br><strong>(b) Chloroform and Carbon tetrachloride:</strong><br><ul><li><strong>Test:</strong> Warm each compound with aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$) and alcoholic potassium hydroxide ($\\text{KOH}$) (Carbylamine Test).</li><li><strong>Chloroform:</strong> Produces a highly offensive, <strong>extremely foul smell of phenyl isocyanide ($\\text{C}_6\\text{H}_5\\text{NC}$):</strong><br>$$\\text{CHCl}_3 + \\text{C}_6\\text{H}_5\\text{NH}_2 + 3\\text{KOH} \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_5\\text{NC} \\uparrow + 3\\text{KCl} + 3\\text{H}_2\\text{O}$$</li><li><strong>Carbon tetrachloride:</strong> Does not react. No foul smell is produced.</li></ul>"
        },
        {
            id: "q21",
            number: 21,
            marks: 2,
            isOrQuestion: true,
            optionA: {
                title: "Main Question",
                question: "What happens when:<br><strong>(a) n-butyl chloride is treated with alcoholic KOH?</strong><br><strong>(b) Methyl chloride is treated with KCN?</strong>",
                solution: "<strong>(a) n-butyl chloride with alcoholic KOH:</strong><br>Undergoes dehydrohalogenation ($\\beta$-elimination) to form 1-butene as the major product:<br>$$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Cl} + \\text{KOH(alc)} \\xrightarrow{\\Delta} \\text{CH}_3\\text{CH}_2\\text{CH}=\\text{CH}_2 + \\text{KCl} + \\text{H}_2\\text{O}$$<br><br><strong>(b) Methyl chloride with KCN:</strong><br>Undergoes $\\text{S}_N2$ nucleophilic substitution to yield methyl cyanide (acetonitrile):<br>$$\\text{CH}_3\\text{Cl} + \\text{KCN} \\xrightarrow{\\text{aq. ethanol}} \\text{CH}_3\\text{CN} + \\text{KCl}$$"
            },
            optionB: {
                title: "OR Option",
                question: "Explain why the dipole moment of chlorobenzene is lower than that of cyclohexyl chloride.",
                solution: "The dipole moment ($\\mu = q \\times d$) of chlorobenzene ($\\approx 1.69\\text{ D}$) is lower than that of cyclohexyl chloride ($\\approx 2.0\\text{ D}$) due to:<br><br>1. <strong>Difference in Hybridization:</strong> In chlorobenzene, chlorine is attached to an $sp^2$ carbon of the benzene ring (33% $s$-character), which is highly electronegative and holds the $\\text{C-Cl}$ bonding pair tightly, opposing chlorine's pull and reducing polarity ($q$). In cyclohexyl chloride, chlorine is bonded to an $sp^3$ carbon (25% $s$-character) which is less electronegative, leading to greater charge separation.<br><br>2. <strong>Resonance Effect:</strong> Resonance conjugating chlorine's lone pair into the aromatic ring imparts partial double bond character to the $\\text{C-Cl}$ bond in chlorobenzene. This significantly shortens the bond length ($d$). Since dipole moment depends on distance, a shorter bond decreases the dipole moment value."
            }
        }
    ],
    "section-c": [
        {
            id: "q22",
            number: 22,
            marks: 3,
            question: "A solution prepared by dissolving $1.25\\text{ g}$ of an unknown non-volatile solute in $99.0\\text{ g}$ of acetone has a boiling point of $56.38\\ ^\\circ\\text{C}$. The boiling point of pure acetone is $56.05\\ ^\\circ\\text{C}$. Calculate the molar mass of the solute. ($K_b$ for acetone = $1.72\\text{ K kg mol}^{-1}$).",
            solution: "<strong>Solution:</strong><br>1. Calculate boiling point elevation ($\\Delta T_b$):<br>$$\\Delta T_b = T_b - T_b^\\circ = 56.38 - 56.05 = 0.33\\ ^\\circ\\text{C} \\text{ (or } 0.33\\text{ K)}$$<br><br>2. Identify variables:<br><ul><li>Mass of solute ($w_2$) = $1.25\\text{ g}$</li><li>Mass of solvent ($w_1$) = $99.0\\text{ g}$</li><li>$K_b$ for acetone = $1.72\\text{ K kg mol}^{-1}$</li></ul><br>3. Apply boiling point elevation formula:<br>$$\\Delta T_b = K_b \\cdot \\frac{w_2 \\cdot 1000}{M_2 \\cdot w_1}$$<br>$$M_2 = \\frac{K_b \\cdot w_2 \\cdot 1000}{\\Delta T_b \\cdot w_1}$$<br>$$M_2 = \\frac{1.72 \\times 1.25 \\times 1000}{0.33 \\times 99.0} = \\frac{2150}{32.67} \\approx 65.81\\text{ g mol}^{-1}$$<br><br><strong>Answer:</strong> The molar mass of the unknown solute is <strong>$65.81\\text{ g mol}^{-1}$</strong>."
        },
        {
            id: "q23",
            number: 23,
            marks: 3,
            question: "Explain the following terms with suitable examples:<br><strong>(a) Abnormal molar mass</strong><br><strong>(b) Van't Hoff factor ($i$)</strong><br><strong>(c) Azeotropes</strong>",
            solution: "<strong>(a) Abnormal molar mass:</strong> When experimental molar mass of a solute determined from colligative properties is either higher or lower than its normal value, it is called abnormal molar mass. This happens due to solute dissociation or association in solution. E.g., $\\text{NaCl}$ dissociates to $\\text{Na}^+$ and $\\text{Cl}^-$ in water, yielding an experimental molar mass of $\\approx 29.25\\text{ g mol}^{-1}$ (half of its true $58.5\\text{ g mol}^{-1}$).<br><br><strong>(b) Van't Hoff factor ($i$):</strong> A factor representing the extent of dissociation or association of a solute: $$i = \\frac{\\text{Observed colligative property}}{\\text{Calculated colligative property}} = \\frac{\\text{Normal molar mass}}{\\text{Abnormal molar mass}}$$E.g., for complete dissociation of $\\text{NaCl}$, $i = 2$; for complete dimerization of acetic acid in benzene, $i = 0.5$.<br><br><strong>(c) Azeotropes:</strong> Binary mixtures of liquids having the exact same composition in liquid and vapor phases and boiling at a constant temperature. E.g., minimum boiling azeotrope: 95% ethanol + 5% water; maximum boiling azeotrope: 68% nitric acid + 32% water."
        },
        {
            id: "q24",
            number: 24,
            marks: 3,
            question: "The resistance of a conductivity cell filled with $0.1\\text{ mol L}^{-1}$ KCl solution is $100\\ \\Omega$. If the resistance of the same cell filled with $0.02\\text{ mol L}^{-1}$ KCl solution is $520\\ \\Omega$, calculate the conductivity and molar conductivity of $0.02\\text{ mol L}^{-1}$ KCl solution. (Conductivity of $0.1\\text{ mol L}^{-1}$ KCl solution is $1.29\\text{ S/m}$).",
            solution: "<strong>Step-by-step Solution:</strong><br>1. Find cell constant ($G^*$):<br>$$G^* = \\kappa_1 \\cdot R_1 = 1.29\\text{ S m}^{-1} \\times 100\\ \\Omega = 129\\text{ m}^{-1}$$<br><br>2. Calculate conductivity ($\\kappa_2$) for $0.02\\text{ M}$ KCl:<br>$$\\kappa_2 = \\frac{G^*}{R_2} = \\frac{129\\text{ m}^{-1}}{520\\ \\Omega} \\approx 0.248\\text{ S m}^{-1}$$<br>*(In common units, $\\kappa_2 = 2.48 \\times 10^{-3}\\text{ S cm}^{-1}$)*<br><br>3. Calculate molar conductivity ($\\Lambda_m$):<br>Concentration $C = 0.02\\text{ mol L}^{-1} = 20\\text{ mol m}^{-3}$ (since $1\\text{ L} = 10^{-3}\\text{ m}^3$).<br>$$\\Lambda_m = \\frac{\\kappa_2}{C} = \\frac{0.248\\text{ S m}^{-1}}{20\\text{ mol m}^{-3}} = 0.0124\\text{ S m}^2\\text{ mol}^{-1}$$<br>*(In common units, $\\Lambda_m = \\frac{1000 \\times 2.48 \\times 10^{-3}}{0.02} = 124\\text{ S cm}^2\\text{ mol}^{-1}$)*"
        },
        {
            id: "q25",
            number: 25,
            marks: 3,
            question: "State Kohlrausch's law of independent migration of ions. Write two applications of Kohlrausch's law in electrochemistry.",
            solution: "<strong>Kohlrausch's Law Statement:</strong><br>The limiting molar conductivity of an electrolyte ($\\Lambda^\\circ_m$) is equal to the sum of the individual contributions of the limiting molar conductivities of its constituent cations and anions at infinite dilution:<br>$$\\Lambda^\\circ_m = x \\lambda^\\circ_+ + y \\lambda^\\circ_-$$<br>where $\\lambda^\\circ_+$ and $\\lambda^\\circ_-$ are the limiting conductivities of cation and anion, and $x$ and $y$ are their stoichiometric numbers.<br><br><strong>Two Applications:</strong><br>1. <strong>Calculating $\\Lambda^\\circ_m$ for weak electrolytes:</strong> We can calculate $\\Lambda^\\circ_m$ for weak electrolytes using strong electrolytes, e.g.:<br>$$\\Lambda^\\circ_m(\\text{CH}_3\\text{COOH}) = \\Lambda^\\circ_m(\\text{CH}_3\\text{COONa}) + \\Lambda^\\circ_m(\\text{HCl}) - \\Lambda^\\circ_m(\\text{NaCl})$$<br>2. <strong>Determining degree of dissociation ($\\alpha$):</strong><br>$$\\alpha = \\frac{\\Lambda_m}{\\Lambda^\\circ_m}$$"
        },
        {
            id: "q26",
            number: 26,
            marks: 3,
            question: "The rate constants of a reaction are $2.0 \\times 10^{-2}\\text{ s}^{-1}$ at $300\\text{ K}$ and $8.0 \\times 10^{-2}\\text{ s}^{-1}$ at $320\\text{ K}$. Calculate the activation energy ($E_a$) of the reaction. [Given: $R = 8.314\\text{ J K}^{-1}\text{ mol}^{-1}$, $\\log 4 = 0.6021$]",
            solution: "<strong>Solution:</strong><br>Using Arrhenius rate equation:<br>$$\\log_{10} \\left(\\frac{k_2}{k_1}\right) = \\frac{E_a}{2.303 \\cdot R} \\left[ \\frac{T_2 - T_1}{T_1 \\cdot T_2} \\right]$$<br>Substitute values ($k_2/k_1 = 4$, $T_1 = 300\\text{ K}$, $T_2 = 320\\text{ K}$):<br>$$0.6021 = \\frac{E_a}{2.303 \\times 8.314} \\left[ \\frac{320 - 300}{300 \\times 320} \\right]$$<br>$$0.6021 = \\frac{E_a}{19.147} \\left[ \\frac{20}{96000} \\right]$$<br>$$E_a = \\frac{0.6021 \\times 19.147 \\times 96000}{20} \\approx 55336.8\\text{ J mol}^{-1} \\approx 55.34\\text{ kJ mol}^{-1}$$<br><br><strong>Answer:</strong> The activation energy ($E_a$) of the reaction is <strong>$55.34\\text{ kJ mol}^{-1}$</strong>."
        },
        {
            id: "q27",
            number: 27,
            marks: 3,
            question: "Differentiate between $\\text{S}_N1$ and $\text{S}_N2$ mechanisms of nucleophilic substitution reactions based on:<br>(a) Kinetics,<br>(b) Stereochemical outcome,<br>(c) Reactivity order of alkyl halides.",
            solution: "<div class='overflow-x-auto'><table class='w-full border-collapse border border-slate-200 dark:border-navy-700 text-sm'><thead class='bg-slate-100 dark:bg-navy-850'><tr><th class='border border-slate-200 dark:border-navy-700 p-2 text-left font-semibold'>Feature</th><th class='border border-slate-200 dark:border-navy-700 p-2 text-left font-semibold'>$\\text{S}_N1$ Mechanism</th><th class='border border-slate-200 dark:border-navy-700 p-2 text-left font-semibold'>$\\text{S}_N2$ Mechanism</th></tr></thead><tbody><tr><td class='border border-slate-200 dark:border-navy-700 p-2 font-medium'>(a) Kinetics</td><td class='border border-slate-200 dark:border-navy-700 p-2'>First-order kinetics. $\\text{Rate} = k[\\text{R-X}]$. Depends only on alkyl halide concentration.</td><td class='border border-slate-200 dark:border-navy-700 p-2'>Second-order kinetics. $\\text{Rate} = k[\\text{R-X}][\\text{Nu}^-]$. Depends on both concentrations.</td></tr><tr><td class='border border-slate-200 dark:border-navy-700 p-2 font-medium'>(b) Stereochemical Outcome</td><td class='border border-slate-200 dark:border-navy-700 p-2'><strong>Racemisation:</strong> Forms a 50:50 $d$ and $l$ mixture because nucleophile can attack the planar carbocation from either side.</td><td class='border border-slate-200 dark:border-navy-700 p-2'><strong>Walden Inversion:</strong> 100% inversion of configuration because nucleophile attacks strictly from the backside.</td></tr><tr><td class='border border-slate-200 dark:border-navy-700 p-2 font-medium'>(c) Reactivity Order</td><td class='border border-slate-200 dark:border-navy-700 p-2'>$$3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3\\text{X}$$ because rate depends on intermediate carbocation stability.</td><td class='border border-slate-200 dark:border-navy-700 p-2'>$$\\text{CH}_3\\text{X} > 1^\\circ > 2^\\circ > 3^\\circ$$ because rate depends on minimizing steric hindrance during backside attack.</td></tr></tbody></table></div>"
        },
        {
            id: "q28",
            number: 28,
            marks: 3,
            isOrQuestion: true,
            optionA: {
                title: "Complete Equations",
                question: "Complete the following chemical equations:<br><strong>(a) $\\text{CH}_3\\text{CH}_2\\text{CH}=\\text{CH}_2 + \\text{HBr} \\xrightarrow{\\text{in presence of peroxide}} \\dots$</strong><br><strong>(b) $\\text{C}_6\\text{H}_5\\text{OH} + \\text{Zn (dust)} \\xrightarrow{\\Delta} \\dots$</strong><br><strong>(c) $\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{AgCN} \\rightarrow \\dots$</strong>",
                solution: "<strong>(a) Hydrohalogenation with peroxide:</strong><br>Anti-Markovnikov addition of $\\text{HBr}$ yields 1-bromobutane:<br>$$\\text{CH}_3\\text{CH}_2\\text{CH}=\\text{CH}_2 + \\text{HBr} \\xrightarrow{\\text{peroxide}} \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}$$<br><br><strong>(b) Phenol reduction with Zinc dust:</strong><br>Phenol is reduced to Benzene on heating with Zinc:<br>$$\\text{C}_6\\text{H}_5\\text{OH} + \\text{Zn} \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_6 + \\text{ZnO}$$<br><br><strong>(c) Reaction with Silver cyanide:</strong><br>Because $\\text{AgCN}$ is covalent, nucleophilic attack occurs through nitrogen, forming ethyl isocyanide:<br>$$\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{AgCN} \\rightarrow \\text{CH}_3\\text{CH}_2\\text{NC} + \\text{AgBr}\\downarrow$$"
            },
            optionB: {
                title: "OR: Conversions",
                question: "How will you carry out the following conversions?<br><strong>(a) Propene to Propan-1-ol</strong><br><strong>(b) Benzene to 4-Bromonitrobenzene</strong><br><strong>(c) Ethanol to Ethyl fluoride</strong>",
                solution: "<strong>(a) Propene to Propan-1-ol:</strong><br>React with $\\text{HBr}$ in peroxide to get 1-bromopropane, then hydrolyze with aqueous $\\text{KOH}$:<br>$$\\text{CH}_3\\text{CH}=\\text{CH}_2 \\xrightarrow{\\text{HBr / peroxide}} \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Br} \\xrightarrow{\\text{aq. KOH / }\\Delta} \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}$$<br><br><strong>(b) Benzene to 4-Bromonitrobenzene:</strong><br>Brominate benzene using $\\text{Br}_2 / \\text{Fe}$ to get bromobenzene, then nitrate with concentrated $\\text{HNO}_3/\\text{H}_2\\text{SO}_4$. The ortho and para isomers are separated to yield the major 4-bromo product:<br>$$\\text{C}_6\\text{H}_6 \\xrightarrow{\\text{Br}_2 / \\text{Fe}} \\text{C}_6\\text{H}_5\\text{Br} \\xrightarrow{\\text{conc. HNO}_3 + \\text{conc. H}_2\\text{SO}_4} p\\text{-Br-C}_6\\text{H}_4\\text{-NO}_2$$<br><br><strong>(c) Ethanol to Ethyl fluoride:</strong><br>Convert ethanol to ethyl chloride using thionyl chloride ($\\text{SOCl}_2$), then react with silver fluoride ($\\text{AgF}$) (Swarts Reaction):<br>$$\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{SOCl}_2 / \\text{pyridine}} \\text{CH}_3\\text{CH}_2\\text{Cl} \\xrightarrow{\\text{AgF} / \\Delta} \\text{CH}_3\\text{CH}_2\\text{F}$$"
            }
        }
    ],
    "section-d": [
        {
            id: "q29",
            number: 29,
            marks: 4,
            question: "<strong>Case Study 1: Chemical Kinetics & Reaction Rates</strong><br><p class='text-sm italic mt-2 text-slate-500 dark:text-slate-400'>'The rate of a chemical reaction is defined as the change in concentration of reactants or products per unit time. Factors affecting reaction rates include concentration, temperature, catalyst, and surface area...'</p><br><strong>Questions:</strong><br>(a) Define pseudo-first-order reaction with a suitable example. [1]<br>(b) For a zero-order reaction, write the rate equation and its unit for rate constant ($k$). [1]<br>(c) A reaction is second order with respect to a reactant A. How is the rate of reaction affected if the concentration of A is: (i) doubled, (ii) reduced to half? [2]",
            solution: "<strong>(a) Pseudo-first-order reaction:</strong><br>A reaction that is bimolecular but behaves kinetically as a first-order reaction because one of the reactants is present in a massive excess. E.g., Acid-catalyzed hydrolysis of ethyl acetate:<br>$$\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O(excess)} \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH}$$<br>$$\\text{Rate} = k [\\text{CH}_3\\text{COOC}_2\\text{H}_5]$$<br><br><strong>(b) Zero-order reaction:</strong><br><ul><li><strong>Rate equation (Differential):</strong> $\\text{Rate} = -\\frac{d[A]}{dt} = k[A]^0 = k$</li><li><strong>Unit of $k$:</strong> $\\text{mol L}^{-1}\\text{ s}^{-1}$</li></ul><br><strong>(c) Second-order reaction with respect to A:</strong><br>$$\\text{Rate } R = k[A]^2$$<br><ul><li><strong>(i) If [A] is doubled ($[A'] = 2[A]$):</strong><br>$$R' = k(2[A])^2 = 4k[A]^2 = 4R \\quad \\text{(Rate increases by 4 times)}$$</li><li><strong>(ii) If [A] is reduced to half ($[A''] = 0.5[A]$):</strong><br>$$R'' = k(0.5[A])^2 = 0.25k[A]^2 = 0.25R \\quad \\text{(Rate becomes 1/4th)} $$</li></ul>"
        },
        {
            id: "q30",
            number: 30,
            marks: 4,
            question: "<strong>Case Study 2: Organometallic & Polyhalogen Compounds</strong><br><p class='text-sm italic mt-2 text-slate-500 dark:text-slate-400'>'Haloalkanes and haloarenes undergo various types of organic reactions including nucleophilic substitution, elimination, and reaction with metals. Grignard reagents (RMgX) are highly reactive and react with any source of proton...'</p><br><strong>Questions:</strong><br>(a) Why should Grignard reagents be prepared under strictly anhydrous conditions? [1]<br>(b) Write the IUPAC name and structure of the major product formed when chlorobenzene undergoes Friedel-Crafts acetylation. [1]<br>(c) Out of o-dichlorobenzene and p-dichlorobenzene, which one has a higher melting point and why? [2]",
            solution: "<strong>(a) Grignard reagents under anhydrous conditions:</strong><br>Grignard reagents ($R\\text{MgX}$) are highly polar, strongly basic, and react instantaneously with any source of proton (such as water or moisture) to decompose into alkanes:<br>$$\\text{R-MgX} + \\text{H}_2\\text{O} \\rightarrow \\text{R-H} + \\text{Mg(OH)X}$$<br>To prevent this decomposition and loss of reagent, dry conditions must be strictly maintained.<br><br><strong>(b) Friedel-Crafts acetylation of chlorobenzene:</strong><br>Chlorine is ortho/para-directing. The major product is the less-hindered para isomer:<br><ul><li><strong>IUPAC Name:</strong> 4-Chloroacetophenone</li><li><strong>Structure:</strong> $\\text{Cl-C}_6\\text{H}_4\\text{-COCH}_3$ (at positions 1 and 4 of benzene ring)</li></ul><br><strong>(c) Melting points of o-dichlorobenzene vs p-dichlorobenzene:</strong><br><strong>p-Dichlorobenzene</strong> has a significantly higher melting point. This is because the para isomer is highly symmetrical, allowing its molecules to fit closely and tightly in the crystal lattice of the solid state compared to the asymmetrical ortho-isomer. This tight, ordered packing leads to stronger intermolecular interactions, which require more thermal energy to break."
        }
    ],
    "section-e": [
        {
            id: "q31",
            number: 31,
            marks: 5,
            isOrQuestion: true,
            optionA: {
                title: "Osmotic Pressure",
                question: "<strong>(a) Define Osmotic Pressure. Why is osmotic pressure measurement preferred over other colligative properties for determining the molar mass of macromolecules like proteins and polymers? (Give 3 reasons)</strong> [3]<br><br><strong>(b) Calculate the osmotic pressure of a solution prepared by dissolving $25\\text{ mg}$ of $\text{K}_2\text{SO}_4$ in $2\\text{ L}$ of water at $25\\ ^\circ\\text{C}$, assuming it to be completely dissociated. ($R = 0.0821\\text{ L atm K}^{-1}\text{ mol}^{-1}$, Molar mass of $\\text{K}_2\\text{SO}_4 = 174\\text{ g mol}^{-1}$ )</strong> [2]",
                solution: "<strong>(a) Osmotic Pressure & Macromolecules:</strong><br><ul><li><strong>Definition:</strong> The excess hydrostatic pressure that must be applied to the solution side to completely prevent the osmotic flow of solvent through a semipermeable membrane.</li><li><strong>Preferences for Macromolecules:</strong><br>1. <strong>Easily Measurable Magnitude:</strong> Colligative properties like boiling point elevation are too small to measure precisely for macromolecules due to low concentrations. Osmotic pressure provides large, easily measurable values at room temperature.<br>2. <strong>Stability:</strong> Proteins denature and decompose at high temperatures, making boiling point measurements impossible. Osmotic pressure can be measured at room temperature ($25\\ ^\\circ\\text{C}$).<br>3. <strong>Molarity usage:</strong> Uses molarity, which is far simpler to prepare in labs than molality.</li></ul><br><strong>(b) Osmotic Pressure Calculation:</strong><br>Identify variables:<br><ul><li>Mass of solute ($w_2$) = $25\\text{ mg} = 0.025\\text{ g}$</li><li>Volume ($V$) = $2\\text{ L}$, Molar mass ($M_2$) = $174\\text{ g mol}^{-1}$</li><li>$T = 25\\ ^\\circ\\text{C} = 298\\text{ K}$</li><li>$R = 0.0821\\text{ L atm K}^{-1}\\text{ mol}^{-1}$</li><li>$\\text{K}_2\\text{SO}_4$ dissociates into 3 ions ($2\\text{K}^+ + \\text{SO}_4^{2-}$). Since it is completely dissociated, Van't Hoff factor $i = 3$.</li></ul><br>$$\\Pi = i \\cdot C \\cdot R \\cdot T = i \\cdot \\frac{w_2}{M_2 \\cdot V} \\cdot R \\cdot T$$<br>$$\\Pi = 3 \\times \\frac{0.025}{174 \\times 2} \\times 0.0821 \\times 298$$<br>$$\\Pi = \\frac{1.835}{348} \\approx 5.27 \\times 10^{-3}\\text{ atm}$$<br><br><strong>Answer:</strong> The osmotic pressure is <strong>$5.27 \\times 10^{-3}\\text{ atm}$</strong>."
            },
            optionB: {
                title: "OR: Solutions",
                question: "<strong>(a) What are ideal and non-ideal solutions? Draw neat vapor pressure-composition diagrams for non-ideal solutions showing positive and negative deviations from Raoult's law.</strong> [3]<br><br><strong>(b) Calculate the mass percentage of aspirin ($\\text{C}_9\\text{H}_8\\text{O}_4$) in acetonitrile ($\\text{CH}_3\\text{CN}$) when $6.5\\text{ g}$ of $\text{C}_9\text{H}_8\text{O}_4$ is dissolved in $450\\text{ g}$ of $\text{CH}_3\\text{CN}$.</strong> [2]",
                solution: "<strong>(a) Ideal and Non-Ideal Solutions:</strong><br><ul><li><strong>Ideal Solution:</strong> Obells Raoult's law strictly at all concentrations and temperatures. Molecular attractions between A-B are identical to pure component attractions (A-A and B-B). $\\Delta_{\\text{mix}}H = 0, \\Delta_{\\text{mix}}V = 0$.</li><li><strong>Non-Ideal Solution:</strong> Does not obey Raoult's law. In <strong>Positive deviation</strong>, A-B attractions are weaker than pure components ($\\Delta_{\\text{mix}}H > 0, \\Delta_{\\text{mix}}V > 0$). In <strong>Negative deviation</strong>, A-B attractions are stronger ($\\Delta_{\\text{mix}}H < 0, \\Delta_{\\text{mix}}V < 0$).</li></ul><br><strong>Vapor Pressure-Composition Diagrams:</strong><br><div class='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'><div class='border border-slate-200 dark:border-slate-800 p-2 rounded-xl bg-white dark:bg-slate-900'><p class='text-center text-xs font-bold mb-1'>Positive Deviation</p><img src='images/positive_deviation.png' class='w-full' alt='Positive Deviation Diagram'></div><div class='border border-slate-200 dark:border-slate-800 p-2 rounded-xl bg-white dark:bg-slate-900'><p class='text-center text-xs font-bold mb-1'>Negative Deviation</p><img src='images/negative_deviation.png' class='w-full' alt='Negative Deviation Diagram'></div></div><br><strong>(b) Mass Percentage of Aspirin:</strong><br><ul><li>Mass of solute (aspirin) = $6.5\\text{ g}$</li><li>Mass of solvent (acetonitrile) = $450\\text{ g}$</li><li>Total mass of solution = $6.5 + 450 = 456.5\\text{ g}$</li></ul><br>$$\\text{Mass Percentage} = \\frac{6.5}{456.5} \\times 100 \\approx 1.424\\%$$<br><br><strong>Answer:</strong> The mass percentage of aspirin is <strong>$1.42\\%$</strong>."
            }
        },
        {
            id: "q32",
            number: 32,
            marks: 5,
            isOrQuestion: true,
            optionA: {
                title: "Nernst & Fuel Cell",
                question: "<strong>(a) Represent the cell in which the following reaction takes place:<br>$$\\text{Mg(s)} + 2\\text{Ag}^+(0.0001\\text{ M}) \\rightarrow \\text{Mg}^{2+}(0.130\\text{ M}) + 2\\text{Ag(s)}$$<br>Calculate its cell potential ($E_{\\text{cell}}$) if $E^\\circ_{\\text{cell}} = 3.17\\text{ V}$.</strong> [3]<br><br><strong>(b) Define fuel cell. Write the cathode and anode reactions taking place in a Hydrogen-Oxygen fuel cell.</strong> [2]",
                solution: "<strong>(a) Cell Representation & Potential:</strong><br><ul><li><strong>Cell Representation:</strong> $\\text{Mg(s)} \\mid \\text{Mg}^{2+}(0.130\\text{ M}) \\parallel \\text{Ag}^+(0.0001\\text{ M}) \\mid \\text{Ag(s)}$</li><li><strong>Cell Potential Calculation (n = 2):</strong><br>Using Nernst Equation:<br>$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} \\left( \\frac{[\\text{Mg}^{2+}]}{[\\text{Ag}^+]^2} \\right)$$<br>Substitute concentrations ($[\\text{Mg}^{2+}] = 0.130\\text{ M}, [\\text{Ag}^+] = 10^{-4}\\text{ M}$):<br>$$E_{\\text{cell}} = 3.17 - \\frac{0.0591}{2} \\log_{10} \\left( \\frac{0.130}{(10^{-4})^2} \\right)$$<br>$$E_{\\text{cell}} = 3.17 - 0.02955 \\log_{10}(1.3 \\times 10^7)$$<br>Since $\\log_{10}(1.3 \\times 10^7) = 0.1139 + 7 = 7.1139$:<br>$$E_{\\text{cell}} = 3.17 - (0.02955 \\times 7.1139) = 3.17 - 0.210 = 2.96\\text{ V}$$</li></ul><br><strong>Answer:</strong> The cell potential is <strong>$2.96\\text{ V}$</strong>.<br><br><strong>(b) Fuel Cell Definition & Reactions:</strong><br>A fuel cell is a galvanic cell designed to directly convert the chemical energy of combustion of fuels (like $\\text{H}_2, \\text{CH}_4$) into electrical energy.<br><strong>Reactions in standard alkaline $\\text{H}_2\\text{-O}_2$ fuel cell:</strong><br><ul><li><strong>At Anode (Oxidation):</strong> $2\\text{H}_2\\text{(g)} + 4\\text{OH}^-\\text{(aq)} \\rightarrow 4\\text{H}_2\\text{O(l)} + 4e^-$</li><li><strong>At Cathode (Reduction):</strong> $\\text{O}_2\\text{(g)} + 2\\text{H}_2\\text{O(l)} + 4e^- \\rightarrow 4\\text{OH}^-\\text{(aq)}$</li><li><strong>Overall Reaction:</strong> $2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{H}_2\\text{O(l)}$</li></ul>"
            },
            optionB: {
                title: "OR: Faraday's Laws",
                question: "<strong>(a) State Faraday's First and Second Laws of Electrolysis.</strong> [2]<br><br><strong>(b) A solution of $\\text{Ni(NO}_3)_2$ is electrolysed between platinum electrodes using a current of $5.0\\text{ amperes}$ for $20\\text{ minutes}$. What mass of Nickel is deposited at the cathode? (Atomic mass of $\\text{Ni} = 58.7\\text{ g mol}^{-1}$, $1\\ F = 96500\\text{ C mol}^{-1}$ )</strong> [3]",
                solution: "<strong>(a) Faraday's Laws of Electrolysis:</strong><br><ul><li><strong>First Law:</strong> The mass ($w$) of a substance deposited or liberated at any electrode during electrolysis is directly proportional to the quantity of electricity (charge, $Q$) passed through the electrolyte: $w = z \\cdot I \\cdot t$.</li><li><strong>Second Law:</strong> When the same quantity of electricity is passed through different electrolytic cells connected in series, the masses of substances liberated are directly proportional to their chemical equivalent weights: $\\frac{w_1}{w_2} = \\frac{E_1}{E_2}$.</li></ul><br><strong>(b) Nickel Deposition Calculation:</strong><br>1. Calculate Charge passed ($Q$):<br><ul><li>Current ($I$) = $5.0\\text{ A}$</li><li>Time ($t$) = $20\\text{ min} = 1200\\text{ s}$</li></ul>$$Q = I \\cdot t = 5.0 \\times 1200 = 6000\\text{ C}$$<br>2. Apply the reduction half-reaction at the cathode:<br>$$\\text{Ni}^{2+} + 2e^- \\rightarrow \\text{Ni(s)}$$<br>To deposit 1 mole of Nickel ($58.7\\text{ g}$), we require 2 moles of electrons ($2\\ F = 2 \\times 96500\\text{ C} = 193000\\text{ C}$).<br>3. Calculate mass deposited ($w$):<br>$$w = \\frac{\\text{Atomic mass of Ni} \\times Q}{n \\cdot F}$$<br>$$w = \\frac{58.7 \\times 6000}{2 \\times 96,500} = \\frac{352,200}{193,000} \\approx 1.825\\text{ g}$$<br><br><strong>Answer:</strong> The mass of Nickel deposited at the cathode is <strong>$1.825\\text{ g}$</strong>."
            }
        },
        {
            id: "q33",
            number: 33,
            marks: 5,
            isOrQuestion: true,
            optionA: {
                title: "First Order Kinetics",
                question: "<strong>(a) Derive the integrated rate expression for a first-order reaction: $k = \\frac{2.303}{t} \\log_{10} \\left(\\frac{[A]_0}{[A]}\\right)$.</strong> [3]<br><br><strong>(b) Show that for a first-order reaction, time required for 99.9% completion is 10 times the half-life period ($t_{1/2}$) of the reaction.</strong> [2]",
                solution: "<strong>(a) First-Order Rate Equation Derivation:</strong><br>For a reaction $A \\rightarrow \\text{Products}$, the first-order rate law is:<br>$$\\text{Rate} = -\\frac{d[A]}{dt} = k[A]$$<br>Rearranging terms to separate variables:<br>$$\\frac{d[A]}{[A]} = -k \\, dt$$<br>Integrating both sides:<br>$$\\int \\frac{d[A]}{[A]} = -k \\int dt \\Rightarrow \\ln[A] = -kt + I \\quad \\text{(Equation 1)}$$<br>At $t = 0$, concentration $[A] = [A]_0$ (initial concentration). Substituting this into Equation 1:<br>$$\\ln[A]_0 = I$$<br>Substitute $I$ back into Equation 1:<br>$$\\ln[A] = -kt + \\ln[A]_0 \\Rightarrow kt = \\ln\\left(\\frac{[A]_0}{[A]}\\right)$$<br>Convert to base-10 logarithm ($\\ln(x) = 2.303 \\log_{10}(x)$):<br>$$kt = 2.303 \\log_{10}\\left(\\frac{[A]_0}{[A]}\\right) \\Rightarrow k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{[A]_0}{[A]}\\right)$$<br><strong>(b) Proof that $t_{99.9\\%} = 10 \\cdot t_{1/2}$:</strong><br>1. For 99.9% completion, the remaining reactant is $[A] = [A]_0 - 0.999[A]_0 = 0.001[A]_0 = 10^{-3}[A]_0$.<br>$$t_{99.9\\%} = \\frac{2.303}{k} \\log_{10}\\left(\\frac{[A]_0}{10^{-3}[A]_0}\\right) = \\frac{2.303}{k} \\log_{10}(10^3) = \\frac{3 \\times 2.303}{k} = \\frac{6.909}{k}$$<br>2. The half-life is: $t_{1/2} = \\frac{0.693}{k}$.<br>3. Comparing the two times:<br>$$\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} \\approx 10 \\Rightarrow t_{99.9\\%} = 10 \\times t_{1/2}$$<br>*(Hence proved)*"
            },
            optionB: {
                title: "OR: Collision Theory",
                question: "<strong>(a) What is collision theory of chemical reactions? Mention two main reasons why all molecular collisions do not lead to product formation.</strong> [3]<br><br><strong>(b) The rate of a reaction quadruples when temperature changes from $293\text{ K}$ to $313\text{ K}$. Calculate the activation energy ($E_a$) of the reaction assuming that it does not change with temperature.</strong> [2]",
                solution: "<strong>(a) Collision Theory:</strong><br><ul><li><strong>Core Concept:</strong> Reactions occur when reactant molecules collide. The rate depends on the collision frequency ($Z_{AB}$) and the fraction of effective collisions.</li><li><strong>Reasons for ineffective collisions:</strong><br>1. <strong>Energy Barrier:</strong> Molecules must collide with kinetic energy $\\ge$ threshold/activation energy ($E_a$). If kinetic energy is too low, they bounce apart without reacting.<br>2. <strong>Orientation Barrier:</strong> Reactants must collide with a specific spatial orientation to allow the correct atoms to form new bonds. Improper orientation results in ineffective collisions.</li></ul><br><strong>(b) Activation Energy Calculation ($k_2/k_1 = 4$, $T_1 = 293\\text{ K}$, $T_2 = 313\\text{ K}$):</strong><br>Using the Arrhenius relation:<br>$$\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 \\cdot R} \\left[ \\frac{T_2 - T_1}{T_1 \\cdot T_2} \\right]$$<br>$$0.6021 = \\frac{E_a}{2.303 \times 8.314} \\left[ \\frac{313 - 293}{293 \times 313} \\right]$$<br>$$0.6021 = \\frac{E_a}{19.147} \\left[ \\frac{20}{91709} \\right]$$<br>$$E_a = \\frac{0.6021 \\times 19.147 \\times 91709}{20} \\approx 52863\\text{ J mol}^{-1} \\approx 52.86\\text{ kJ mol}^{-1}$$<br><br><strong>Answer:</strong> The activation energy is <strong>$52.86\\text{ kJ mol}^{-1}$</strong>."
            }
        },
        {
            id: "q34",
            number: 34,
            marks: 5,
            question: "<strong>(a) Account for the following observations:</strong> [3]<br>(i) Haloarenes are extremely less reactive towards nucleophilic substitution reactions.<br>(ii) Alkyl halides, though polar, are immiscible with water.<br>(iii) Racemic mixture is optically inactive.<br><br><strong>(b) Primary alkyl halide $\\text{C}_4\\text{H}_9\\text{Br}$ (A) reacted with alcoholic KOH to give compound (B). Compound (B) is reacted with HBr to give (C) which is an isomer of (A). When (A) is reacted with sodium metal it gives compound (D), $\\text{C}_8\\text{H}_{18}$ which is different from the compound formed when n-butyl bromide is reacted with sodium. Write the structural formula of (A), (B), (C), and (D).</strong> [2]",
            solution: "<strong>(a) Conceptual Reasoning:</strong><br><ul><li><strong>(i) Haloarenes unreactivity:</strong> Resonance conjugation of halogen's lone pair into the ring gives the $\\text{C-X}$ bond partial double bond character (harder to break). Also, the $sp^2$ carbon is more electronegative than an $sp^3$ carbon, holding the halogen tightly. The phenyl cation is highly unstable and the electron-dense benzene ring repels incoming nucleophiles.</li><li><strong>(ii) Immiscibility in water:</strong> Alkyl halides are polar but cannot form hydrogen bonds with water. The dipole-dipole attractions formed between alkyl halides and water are weaker than pre-existing hydrogen bonds in water, releasing insufficient energy to break them.</li><li><strong>(iii) Racemic mixture optical inactivity:</strong> Contains equal amounts of $d$ and $l$ enantiomers. The optical rotation caused by one enantiomer is exactly equal and opposite to that of the other, cancelling out by <strong>external compensation</strong>.</li></ul><br><strong>(b) Organic Identification Analysis:</strong><br>1. Since primary halide A ($\\text{C}_4\\text{H}_9\\text{Br}$) gives Wurtz product D ($\\text{C}_8\\text{H}_{18}$) different from n-octane (which forms from n-butyl bromide), A must be **isobutyl bromide** (1-bromo-2-methylpropane):<br>$$\\text{(A): } \\text{CH}_3\\text{-CH(CH}_3)\\text{-CH}_2\\text{-Br}$$<br><br>2. Elimination of (A) with alcoholic $\\text{KOH}$ yields compound (B) (**2-methylpropene**):<br>$$\\text{CH}_3\\text{-CH(CH}_3)\\text{-CH}_2\\text{-Br} + \\text{KOH(alc)} \\xrightarrow{\\Delta} \\text{CH}_3\\text{-C(CH}_3)=\\text{CH}_2 + \\text{KBr} + \\text{H}_2\\text{O}$$<br>$$\\text{(B): } \\text{CH}_3\\text{-C(CH}_3)=\\text{CH}_2$$<br><br>3. Markovnikov addition of $\\text{HBr}$ to (B) yields compound (C) (**tert-butyl bromide**), which is indeed an isomer of (A):<br>$$\\text{CH}_3\\text{-C(CH}_3)=\\text{CH}_2 + \\text{HBr} \\rightarrow \\text{CH}_3\\text{-C(CH}_3)_2\\text{-Br}$$<br>$$\\text{(C): } \\text{CH}_3\\text{-C(CH}_3)_2\\text{-Br}$$<br><br>4. Wurtz coupling of (A) with sodium metal yields compound (D) (**2,5-dimethylhexane**):<br>$$2\\text{CH}_3\\text{-CH(CH}_3)\\text{-CH}_2\\text{-Br} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\text{CH}_3\\text{-CH(CH}_3)\\text{-CH}_2\\text{-CH}_2\\text{-CH(CH}_3)\\text{-CH}_3$$<br>$$\\text{(D): } \\text{CH}_3\\text{-CH(CH}_3)\\text{-CH}_2\\text{-CH}_2\\text{-CH(CH}_3)\\text{-CH}_3$$"
        },
        {
            id: "q35",
            number: 35,
            marks: 5,
            question: "<strong>(a) Explain the mechanism of $\\text{S}_N2$ substitution reaction of methyl bromide with aqueous NaOH solution with energy profile/transition state representation.</strong> [3]<br><br><strong>(b) Write the environmental effects and uses of:<br>(i) Freon-12 (Dichlorodifluoromethane)<br>(ii) DDT (p,p'-Dichlorodiphenyltrichloroethane)</strong> [2]",
            solution: "<strong>(a) $\\text{S}_N2$ Mechanism of Methyl Bromide + aq. NaOH:</strong><br>The reaction occurs in a single concerted step. The nucleophile ($\\text{OH}^-$) attacks the electrophilic carbon of methyl bromide from the backside, opposite to the leaving group ($\\text{Br}^-$). This forms an unstable pentacoordinated transition state where carbon is $sp^2$ hybridized and partially bonded to both groups. Departure of $\\text{Br}^-$ leads to a product with inverted configuration (Walden Inversion):<br>$$\\text{OH}^- + \\text{CH}_3\\text{-Br} \\rightarrow \\left[ \\text{HO}\\cdots\\text{C(H}_3)\\cdots\\text{Br} \\right]^{\\ddagger} \\rightarrow \\text{HO-CH}_3 + \\text{Br}^-$$<br>The potential energy curve shows a single high energy peak representing the transition state with no intermediates:<br><div class='border border-slate-200 dark:border-slate-800 p-2 rounded-xl bg-white dark:bg-slate-900 my-4 max-w-lg mx-auto'><img src='images/sn2_energy_profile.png' class='w-full' alt='SN2 Potential Energy Profile'></div><br><strong>(b) Uses and Environmental Effects:</strong><br><ul><li><strong>(i) Freon-12 ($\\text{CF}_2\\text{Cl}_2$):</strong><br><strong>Uses:</strong> Propellant in aerosol cans, refrigerant in refrigerators and ACs.<br><strong>Environmental Effects:</strong> Chemically stable in troposphere, but diffuses to stratospheric layer. Intense UV radiation splits it, releasing reactive chlorine free radicals ($\\text{Cl}^\\bullet$) which catalytically destroy the protective Ozone ($\\text{O}_3$) molecules, causing Ozone hole and allowing harmful UV-B radiation to reach Earth.</li><li><strong>(ii) DDT:</strong><br><strong>Uses:</strong> Powerful contact insecticide to control mosquitoes (malaria vector) and lice.<br><strong>Environmental Effects:</strong> Persistent organic pollutant. Highly non-biodegradable and lipid-soluble. It bioaccumulates in fatty tissue and undergoes biomagnification up the food chain. In birds, it disrupts calcium metabolism, causing thinning of eggshells and premature breaking, leading to population collapse.</li></ul>"
        }
    ]
};

// Periodic Table Syllabus Dataset
const PERIODIC_DATA = [
    { num: 1, sym: "H", name: "Hydrogen", mass: "1.008", block: "s", electroneg: "2.20", state: "+1, -1", pot: "-2.25V", relevance: "Constituent of acids, fuels, and standard hydrogen electrodes (SHE) in Electrochemistry." },
    { num: 3, sym: "Li", name: "Lithium", mass: "6.94", block: "s", electroneg: "0.98", state: "+1", pot: "-3.05V", relevance: "Strongest reducing agent in electrochemistry due to highest negative standard reduction potential." },
    { num: 6, sym: "C", name: "Carbon", mass: "12.011", block: "p", electroneg: "2.55", state: "+4, -4", pot: "N/A", relevance: "Core element of Organic chemistry; makes up alkyl chains, aromatic rings, and functional groups." },
    { num: 7, sym: "N", name: "Nitrogen", mass: "14.007", block: "p", electroneg: "3.04", state: "-3 to +5", pot: "N/A", relevance: "Key constituent of nitriles (methyl cyanide, ethanenitrile), nitro groups, and amino compounds." },
    { num: 8, sym: "O", name: "Oxygen", mass: "15.999", block: "p", electroneg: "3.44", state: "-2, -1", pot: "+1.23V", relevance: "Highly electronegative; present in carbonyl bonds (acetone), hydroxyls (alcohols), and fuel cells." },
    { num: 9, sym: "F", name: "Fluorine", mass: "18.998", block: "p", electroneg: "3.98", state: "-1", pot: "+2.87V", relevance: "Most electronegative element; forms alkyl fluorides via the Swarts Reaction." },
    { num: 12, sym: "Mg", name: "Magnesium", mass: "24.305", block: "s", electroneg: "1.31", state: "+2", pot: "-2.37V", relevance: "Used in Grignard reagents (R-Mg-X) and featured as the anode in the Mg/Ag Nernst cell." },
    { num: 17, sym: "Cl", name: "Chlorine", mass: "35.45", block: "p", electroneg: "3.16", state: "-1", pot: "+1.36V", relevance: "Reagent in nucleophilic substitution, chlorobenzene resonance, and Freon-12 (CF2Cl2)." },
    { num: 24, sym: "Cr", name: "Chromium", mass: "51.996", block: "d", electroneg: "1.66", state: "+2 to +6", pot: "-0.74V", relevance: "Standard d-block metal; key oxidation state catalyst (e.g. Chromic acid, CrO3, Jones Reagent)." },
    { num: 25, sym: "Mn", name: "Manganese", mass: "54.938", block: "d", electroneg: "1.55", state: "+2 to +7", pot: "-1.18V", relevance: "Reduced from +7 (KMnO4) to +2 in acidic titrations (MnO4- + 8H+ + 5e- -> Mn2+ + 4H2O)." },
    { num: 26, sym: "Fe", name: "Iron", mass: "55.845", block: "d", electroneg: "1.83", state: "+2, +3", pot: "-0.44V", relevance: "Acts as a Lewis acid catalyst in electrophilic bromination of benzene (Fe/FeBr3)." },
    { num: 28, sym: "Ni", name: "Nickel", mass: "58.693", block: "d", electroneg: "1.91", state: "+2", pot: "-0.25V", relevance: "Electrolysed in Ni(NO3)2 cells to deposit metallic Nickel at the cathode (2 faradays per mole)." },
    { num: 29, sym: "Cu", name: "Copper", mass: "63.546", block: "d", electroneg: "1.90", state: "+1, +2", pot: "+0.34V", relevance: "Key electrode in standard Daniell cells; widely used as a reduction catalyst." },
    { num: 30, sym: "Zn", name: "Zinc", mass: "65.38", block: "d", electroneg: "1.65", state: "+2", pot: "-0.76V", relevance: "Acts as a reducing agent to convert phenols to benzene upon heating with zinc dust (ZnO byproduct)." },
    { num: 35, sym: "Br", name: "Bromine", mass: "79.904", block: "p", electroneg: "2.96", state: "-1", pot: "+1.07V", relevance: "Common leaving group in S_N1/S_N2 substitution reactions (e.g., isobutyl bromide, tert-butyl bromide)." },
    { num: 47, sym: "Ag", name: "Silver", mass: "107.868", block: "d", electroneg: "1.93", state: "+1", pot: "+0.80V", relevance: "Featured as the cathode in Nernst cells (Ag+ + e- -> Ag) and featured in AgCN isocyanide synthesis." },
    { num: 53, sym: "I", name: "Iodine", mass: "126.904", block: "p", electroneg: "2.66", state: "-1", pot: "+0.54V", relevance: "Best leaving group among halogens. Synthesized from chlorides/bromides via the Finkelstein reaction." }
];

// LocalStorage State Management
let currentTab = 'dashboard';
let darkTheme = false;
let quizAnswers = {};
let bookmarks = JSON.parse(localStorage.getItem('chem_bookmarks')) || [];
let mastered = JSON.parse(localStorage.getItem('chem_mastered')) || [];

// On Load
document.addEventListener("DOMContentLoaded", () => {
    // Detect system dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleDarkMode();
    }
    updateBookmarkBadge();
    renderContent();
});

// Sync badge count
function updateBookmarkBadge() {
    const badge = document.getElementById('bookmark-badge');
    if (badge) {
        badge.innerText = bookmarks.length;
    }
}

// Toggle Bookmark
function toggleBookmark(id, event) {
    if (event) event.stopPropagation();
    const idx = bookmarks.indexOf(id);
    if (idx > -1) {
        bookmarks.splice(idx, 1);
    } else {
        bookmarks.push(id);
    }
    localStorage.setItem('chem_bookmarks', JSON.stringify(bookmarks));
    updateBookmarkBadge();
    
    // Rerender icons
    const icons = document.querySelectorAll(`.bmark-btn-${id}`);
    icons.forEach(icon => {
        if (bookmarks.includes(id)) {
            icon.className = `fa-solid fa-star text-yellow-500 bmark-btn-${id}`;
        } else {
            icon.className = `fa-regular fa-star text-slate-400 dark:text-slate-500 hover:text-yellow-500 bmark-btn-${id}`;
        }
    });
}

// Toggle Mastered Progress
function toggleMastered(id, event) {
    if (event) event.stopPropagation();
    const idx = mastered.indexOf(id);
    if (idx > -1) {
        mastered.splice(idx, 1);
    } else {
        mastered.push(id);
    }
    localStorage.setItem('chem_mastered', JSON.stringify(mastered));
    
    // Render status
    const btns = document.querySelectorAll(`.master-btn-${id}`);
    btns.forEach(btn => {
        if (mastered.includes(id)) {
            btn.className = `px-3 py-1 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 master-btn-${id}`;
            btn.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500"></i> <span>Mastered</span>`;
        } else {
            btn.className = `px-3 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 master-btn-${id}`;
            btn.innerHTML = `<i class="fa-regular fa-circle text-slate-400"></i> <span>Mark Mastered</span>`;
        }
    });
}

// Switch Sections/Tabs
function switchTab(tabId) {
    currentTab = tabId;
    
    // Reset active nav style
    const links = document.querySelectorAll('nav button');
    links.forEach(link => {
        link.className = "flex items-center w-full px-4 py-2.5 text-sm font-semibold rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-850/50 hover:text-slate-900 dark:hover:text-white transition-all";
    });
    
    // Set active link style
    const activeLink = document.getElementById(`nav-${tabId}`);
    if (activeLink) {
        activeLink.className = "flex items-center w-full px-4 py-3 text-sm font-semibold rounded-xl transition-all text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-200";
    }
    
    renderContent();
    closeSidebarOnMobile();
}

// Render Main Content
function renderContent() {
    const container = document.getElementById('content-area');
    container.innerHTML = '';
    
    if (currentTab === 'dashboard') {
        renderDashboard(container);
    } else if (currentTab === 'calculators') {
        renderCalculators(container);
    } else if (currentTab === 'quiz') {
        renderQuiz(container);
    } else if (currentTab === 'periodic-table') {
        renderPeriodicTable(container);
    } else if (currentTab === 'bookmarks') {
        renderBookmarks(container);
    } else {
        renderSectionQuestions(container, currentTab);
    }
    
    // Auto-render math formulas using KaTeX
    if (window.renderMathInElement) {
        renderMathInElement(container, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }
}

// 1. Dashboard View
function renderDashboard(container) {
    // Total questions calculation
    let totalQuestions = 0;
    Object.keys(DATASET).forEach(key => {
        totalQuestions += DATASET[key].length;
    });
    
    const masteredCount = mastered.length;
    const progressPercent = Math.round((masteredCount / totalQuestions) * 100);

    container.innerHTML = `
        <div class="space-y-6">
            <!-- Hero Banner -->
            <div class="p-6 lg:p-8 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 rounded-2xl text-white shadow-lg relative overflow-hidden">
                <div class="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
                    <i class="fa-solid fa-atom text-[15rem]"></i>
                </div>
                <div class="max-w-2xl">
                    <span class="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">BOARD PREPARATION PORTAL</span>
                    <h2 class="text-3xl lg:text-4xl font-black mt-3 leading-tight">Advanced Board Solved Database</h2>
                    <p class="mt-2 text-blue-100 text-sm leading-relaxed font-medium">Access complete step-by-step chemical equations, numerical solvers, and structured conceptual reasoning. Track your progress dynamically as you study.</p>
                    <div class="flex flex-wrap gap-3 mt-6">
                        <button onclick="switchTab('section-a')" class="px-4 py-2.5 bg-white text-blue-900 hover:bg-blue-50 rounded-xl text-xs font-black transition-all shadow-md">
                            <i class="fa-solid fa-circle-play mr-2"></i> Solve Questions
                        </button>
                        <button onclick="switchTab('periodic-table')" class="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl text-xs font-bold transition-all">
                            Syllabus Periodic Table
                        </button>
                    </div>
                </div>
            </div>

            <!-- Progress Card -->
            <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/85 dark:border-slate-800 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 space-y-3">
                    <h3 class="text-lg font-black text-slate-800 dark:text-white flex items-center">
                        <i class="fa-solid fa-chart-line mr-2.5 text-blue-500"></i> Course Syllabus Mastery Progress
                    </h3>
                    <p class="text-xs text-slate-400 dark:text-slate-500 font-medium">Mark questions as "Mastered" to populate your personal review status. Build confidence sequentially across the 5 standard paper sections.</p>
                    
                    <div class="pt-2">
                        <div class="flex justify-between text-xs font-extrabold text-slate-500 dark:text-slate-400 mb-1.5">
                            <span class="uppercase tracking-wider">QUESTIONS SYLLABUS COMPLETED</span>
                            <span>${masteredCount} / ${totalQuestions} (${progressPercent}%)</span>
                        </div>
                        <div class="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-blue-50/50 dark:bg-blue-950/20 p-5 rounded-xl border border-blue-100 dark:border-blue-900/30 text-center space-y-1">
                    <span class="text-3xl font-black text-blue-700 dark:text-blue-300 block">${progressPercent}%</span>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">Current Preparation Index</span>
                    <span class="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                        ${progressPercent >= 80 ? 'Excellent! Ready for the exam.' : progressPercent >= 50 ? 'Great progress. Keep solving!' : 'Select a section to start studying.'}
                    </span>
                </div>
            </div>

            <!-- Stats grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div onclick="switchTab('section-a')" class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm cursor-pointer hover:border-emerald-500 transition-all">
                    <div class="text-emerald-500 p-2.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl w-fit mb-3">
                        <i class="fa-solid fa-list-check text-lg"></i>
                    </div>
                    <span class="text-[10px] text-slate-400 dark:text-slate-500 block uppercase font-bold tracking-wider">Section A</span>
                    <span class="text-2xl font-black mt-1 block">16 <span class="text-xs font-semibold text-slate-400">Marks</span></span>
                    <span class="text-[10px] text-slate-400 mt-2 block font-medium">16 MCQs & Assertion-Reason</span>
                </div>

                <div onclick="switchTab('section-b')" class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm cursor-pointer hover:border-indigo-500 transition-all">
                    <div class="text-indigo-500 p-2.5 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl w-fit mb-3">
                        <i class="fa-solid fa-circle-info text-lg"></i>
                    </div>
                    <span class="text-[10px] text-slate-400 dark:text-slate-500 block uppercase font-bold tracking-wider">Section B</span>
                    <span class="text-2xl font-black mt-1 block">10 <span class="text-xs font-semibold text-slate-400">Marks</span></span>
                    <span class="text-[10px] text-slate-400 mt-2 block font-medium">5 Very Short Answers</span>
                </div>

                <div onclick="switchTab('section-c')" class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm cursor-pointer hover:border-purple-500 transition-all">
                    <div class="text-purple-500 p-2.5 bg-purple-50 dark:bg-purple-950/30 rounded-xl w-fit mb-3">
                        <i class="fa-solid fa-clipboard-question text-lg"></i>
                    </div>
                    <span class="text-[10px] text-slate-400 dark:text-slate-500 block uppercase font-bold tracking-wider">Section C</span>
                    <span class="text-2xl font-black mt-1 block">21 <span class="text-xs font-semibold text-slate-400">Marks</span></span>
                    <span class="text-[10px] text-slate-400 mt-2 block font-medium">7 Short Answer Questions</span>
                </div>

                <div onclick="switchTab('section-e')" class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm cursor-pointer hover:border-amber-500 transition-all">
                    <div class="text-amber-500 p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl w-fit mb-3">
                        <i class="fa-solid fa-file-invoice text-lg"></i>
                    </div>
                    <span class="text-[10px] text-slate-400 dark:text-slate-500 block uppercase font-bold tracking-wider">Section E</span>
                    <span class="text-2xl font-black mt-1 block">25 <span class="text-xs font-semibold text-slate-400">Marks</span></span>
                    <span class="text-[10px] text-slate-400 mt-2 block font-medium">5 Long Answer Questions</span>
                </div>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Solvers Link -->
                <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
                    <h3 class="text-base font-black"><i class="fa-solid fa-calculator mr-2 text-emerald-500"></i> Dynamic Calculators</h3>
                    <p class="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">Compute physical chemistry properties in real time. Great for verifying numeric board assignments:</p>
                    <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                        <li><i class="fa-solid fa-arrow-right text-[10px] text-emerald-500 mr-2"></i> First-order Kinetics & Half-life</li>
                        <li><i class="fa-solid fa-arrow-right text-[10px] text-emerald-500 mr-2"></i> Nernst Electrochemical Potential</li>
                        <li><i class="fa-solid fa-arrow-right text-[10px] text-emerald-500 mr-2"></i> Boiling & Freezing Solute Molar Mass</li>
                        <li><i class="fa-solid fa-arrow-right text-[10px] text-emerald-500 mr-2"></i> Arrhenius Activation Energy ($E_a$)</li>
                    </ul>
                    <button onclick="switchTab('calculators')" class="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/30 dark:text-emerald-300 rounded-xl text-xs font-bold transition-all">
                        Launch Solvers
                    </button>
                </div>

                <!-- Periodic Table Info -->
                <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
                    <h3 class="text-base font-black"><i class="fa-solid fa-table mr-2 text-cyan-500"></i> Board Periodic Table Widget</h3>
                    <p class="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">Fully custom interactive periodic widget focusing strictly on elements referenced in your Class XII organic and inorganic syllabus.</p>
                    <p class="text-xs text-slate-600 dark:text-slate-400 font-medium">Click and inspect elements to read configuration, standard reduction potentials ($E^\circ$), electronegativity, and specific exam chapter relevance.</p>
                    <button onclick="switchTab('periodic-table')" class="w-full py-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 dark:bg-cyan-950/20 dark:hover:bg-cyan-950/30 dark:text-cyan-300 rounded-xl text-xs font-bold transition-all">
                        Open Periodic Grid
                    </button>
                </div>

                <!-- Word doc download card -->
                <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 class="text-base font-black"><i class="fa-solid fa-file-word mr-2 text-blue-500"></i> Word Solved Guide</h3>
                        <p class="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium mt-1">Download your master reference study manual in Word .docx format complete with custom vectors, styled tables, and formatted latex steps.</p>
                        <div class="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl flex items-center space-x-3 mt-4">
                            <i class="fa-solid fa-folder-open text-blue-500 text-xl"></i>
                            <div>
                                <h4 class="text-xs font-bold">GR_Syllabus_Solved_Paper.docx</h4>
                                <p class="text-[9px] text-slate-400 font-semibold uppercase">Offline Reference • High-Res Graphics</p>
                            </div>
                        </div>
                    </div>
                    <a href="CBSE_Class_12_Chemistry_Solved_Paper.docx" download class="w-full mt-6 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950/20 dark:hover:bg-blue-950/30 dark:text-blue-300 rounded-xl text-xs font-bold text-center transition-all">
                        <i class="fa-solid fa-download mr-1"></i> Download Word Doc
                    </a>
                </div>
            </div>
        </div>
    `;
}

// 2. Section Questions Renderer (With Stars Bookmarking & Master checkboxes!)
function renderSectionQuestions(container, tabId) {
    const questions = DATASET[tabId];
    if (!questions) return;
    
    const sectionHeaders = {
        'section-a': 'SECTION A (16 Marks) - MCQs & Assertion-Reason',
        'section-b': 'SECTION B (10 Marks) - Very Short Answers',
        'section-c': 'SECTION C (21 Marks) - Short Answers',
        'section-d': 'SECTION D (8 Marks) - Case-Based Questions',
        'section-e': 'SECTION E (25 Marks) - Long Answers'
    };
    
    // Header
    const header = document.createElement('div');
    header.className = 'border-b border-slate-200 dark:border-slate-800 pb-4 mb-6 flex justify-between items-center';
    header.innerHTML = `
        <div>
            <h2 class="text-2xl font-extrabold text-blue-900 dark:text-white leading-tight">${sectionHeaders[tabId]}</h2>
            <p class="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">Click a card to reveal comprehensive explanations. Track mastery using checklists.</p>
        </div>
    `;
    container.appendChild(header);

    // List questions
    questions.forEach(q => {
        const card = document.createElement('div');
        card.id = `card-${q.id}`;
        card.className = 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm mb-4 overflow-hidden transition-all duration-200';
        
        const isBmarked = bookmarks.includes(q.id);
        const bmarkClass = isBmarked ? 'fa-solid fa-star text-yellow-500' : 'fa-regular fa-star text-slate-400 dark:text-slate-500 hover:text-yellow-500';
        
        const isMastered = mastered.includes(q.id);
        const masterBtnClass = isMastered ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300' : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400';
        const masterIcon = isMastered ? 'fa-solid fa-circle-check text-emerald-500' : 'fa-regular fa-circle text-slate-400';
        const masterText = isMastered ? 'Mastered' : 'Mark Mastered';

        if (q.isOrQuestion) {
            card.innerHTML = `
                <div class="px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <span class="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-xs font-black">Q${q.number}</span>
                        <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">${q.marks} Marks • Choice</span>
                    </div>
                    <!-- Controls -->
                    <div class="flex items-center space-x-3">
                        <button onclick="toggleMastered('${q.id}', event)" class="px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${masterBtnClass} master-btn-${q.id}">
                            <i class="${masterIcon}"></i> <span>${masterText}</span>
                        </button>
                        <button onclick="toggleBookmark('${q.id}', event)" class="p-1">
                            <i class="${bmarkClass} bmark-btn-${q.id} text-base transition-colors"></i>
                        </button>
                    </div>
                </div>
                
                <!-- OR Navigation Tabs -->
                <div class="flex border-b border-slate-100 dark:border-slate-800">
                    <button onclick="toggleOrTab('${q.id}', 'A')" id="btn-${q.id}-A" class="flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-blue-600 text-blue-600 dark:text-white dark:border-slate-400">
                        ${q.optionA.title}
                    </button>
                    <button onclick="toggleOrTab('${q.id}', 'B')" id="btn-${q.id}-B" class="flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        ${q.optionB.title}
                    </button>
                </div>
                
                <!-- Option A Content -->
                <div id="content-${q.id}-A" class="p-5 space-y-4">
                    <div class="text-base font-semibold leading-relaxed text-slate-800 dark:text-slate-100">${q.optionA.question}</div>
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span class="inline-block text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Step-by-step Solution:</span>
                        <div class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">${q.optionA.solution}</div>
                    </div>
                </div>
                <!-- Option B Content -->
                <div id="content-${q.id}-B" class="p-5 space-y-4 hidden">
                    <div class="text-base font-semibold leading-relaxed text-slate-800 dark:text-slate-100">${q.optionB.question}</div>
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span class="inline-block text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Step-by-step Solution:</span>
                        <div class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">${q.optionB.solution}</div>
                    </div>
                </div>
            `;
        } else {
            let mcqOptionsHtml = '';
            if (q.type === 'mcq' || q.type === 'ar') {
                mcqOptionsHtml = `
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                        ${q.options.map((opt, idx) => `
                            <div class="p-3 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-950 flex items-center space-x-2">
                                <span class="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-black flex items-center justify-center shrink-0">${String.fromCharCode(97 + idx)}</span>
                                <span class="text-slate-700 dark:text-slate-200">${opt}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            card.innerHTML = `
                <div onclick="toggleAccordion('${q.id}')" class="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-850/20 transition-colors">
                    <div class="flex items-center space-x-4">
                        <span class="h-8 w-8 bg-blue-600 text-white rounded-xl font-bold text-xs flex items-center justify-center shrink-0">Q${q.number}</span>
                        <div>
                            <h3 class="font-extrabold text-slate-800 dark:text-white text-sm line-clamp-1">${q.question.replace(/<[^>]*>/g, '').substring(0, 80)}...</h3>
                            <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">${q.marks} Mark${q.marks > 1 ? 's' : ''} • ${q.type === 'mcq' ? 'Multiple Choice' : q.type === 'ar' ? 'Assertion-Reason' : 'Subjective'}</span>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4 ml-2" onclick="event.stopPropagation()">
                        <button onclick="toggleMastered('${q.id}', event)" class="px-2.5 py-1 rounded-lg text-[10px] font-black transition-all flex items-center space-x-1.5 ${masterBtnClass} master-btn-${q.id}">
                            <i class="${masterIcon} text-xs"></i> <span>${masterText}</span>
                        </button>
                        <button onclick="toggleBookmark('${q.id}', event)" class="p-1">
                            <i class="${bmarkClass} bmark-btn-${q.id} text-base transition-colors"></i>
                        </button>
                        <i id="chevron-${q.id}" class="fa-solid fa-chevron-down text-slate-400 dark:text-slate-500 transform transition-transform duration-200"></i>
                    </div>
                </div>
                
                <div id="accordion-${q.id}" class="hidden p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/10 dark:bg-slate-900/10 space-y-4">
                    <div class="text-base font-semibold leading-relaxed text-slate-800 dark:text-slate-100">${q.question}</div>
                    ${mcqOptionsHtml}
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        ${(q.type === 'mcq' || q.type === 'ar') ? `
                            <div class="mb-3">
                                <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 rounded text-xs font-black uppercase tracking-wider">
                                    Correct Option: (${q.correctOption})
                                </span>
                            </div>
                        ` : ''}
                        <span class="inline-block text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Step-by-step Solution:</span>
                        <div class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">${q.solution}</div>
                    </div>
                </div>
            `;
        }
        
        container.appendChild(card);
    });
}

// Collapsible accordion logic
function toggleAccordion(id) {
    const acc = document.getElementById(`accordion-${id}`);
    const chevron = document.getElementById(`chevron-${id}`);
    if (acc) {
        acc.classList.toggle('hidden');
        if (acc.classList.contains('hidden')) {
            chevron.style.transform = 'rotate(0deg)';
        } else {
            chevron.style.transform = 'rotate(180deg)';
        }
    }
}

// Choice question logic
function toggleOrTab(id, choice) {
    const btnA = document.getElementById(`btn-${id}-A`);
    const btnB = document.getElementById(`btn-${id}-B`);
    const contentA = document.getElementById(`content-${id}-A`);
    const contentB = document.getElementById(`content-${id}-B`);
    
    if (choice === 'A') {
        btnA.className = "flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-blue-600 text-blue-600 dark:text-white dark:border-slate-400";
        btnB.className = "flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200";
        contentA.classList.remove('hidden');
        contentB.classList.add('hidden');
    } else {
        btnB.className = "flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-blue-600 text-blue-600 dark:text-white dark:border-slate-400";
        btnA.className = "flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200";
        contentB.classList.remove('hidden');
        contentA.classList.add('hidden');
    }
}

// 3. Render Bookmarked Questions View
function renderBookmarks(container) {
    container.innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 class="text-2xl font-extrabold text-blue-900 dark:text-white leading-tight">My Bookmarked Questions</h2>
                <p class="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">Review and practice questions that you have bookmarked during your sessions.</p>
            </div>
            <div id="bookmarks-container"></div>
        </div>
    `;

    const bmarkListContainer = document.getElementById('bookmarks-container');
    if (bookmarks.length === 0) {
        bmarkListContainer.innerHTML = `
            <div class="p-12 text-center text-slate-400 dark:text-slate-500 space-y-3 bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
                <i class="fa-regular fa-star text-5xl text-slate-300"></i>
                <p class="text-sm font-bold">No Bookmarked Questions</p>
                <p class="text-xs max-w-xs mx-auto">Click the star icon at the top right of any question card to save it here for quick review!</p>
            </div>
        `;
        return;
    }

    // Filter dataset
    let bookmarkedQs = [];
    Object.keys(DATASET).forEach(secKey => {
        DATASET[secKey].forEach(q => {
            if (bookmarks.includes(q.id)) {
                bookmarkedQs.push({ q, secKey });
            }
        });
    });

    // Render cards
    bookmarkedQs.forEach(({ q, secKey }) => {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm mb-4 overflow-hidden';
        
        const isMastered = mastered.includes(q.id);
        const masterBtnClass = isMastered ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300' : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400';
        const masterIcon = isMastered ? 'fa-solid fa-circle-check text-emerald-500' : 'fa-regular fa-circle text-slate-400';
        const masterText = isMastered ? 'Mastered' : 'Mark Mastered';

        if (q.isOrQuestion) {
            card.innerHTML = `
                <div class="px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <span class="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-xs font-black">Q${q.number}</span>
                        <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">${q.marks} Marks • Choice • ${secKey.toUpperCase()}</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button onclick="toggleMastered('${q.id}', event)" class="px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${masterBtnClass} master-btn-${q.id}">
                            <i class="${masterIcon}"></i> <span>${masterText}</span>
                        </button>
                        <button onclick="toggleBookmark('${q.id}', event); renderBookmarks(document.getElementById('content-area'))" class="p-1">
                            <i class="fa-solid fa-star text-yellow-500 text-base"></i>
                        </button>
                    </div>
                </div>
                <!-- OR Navigation Tabs -->
                <div class="flex border-b border-slate-100 dark:border-slate-800">
                    <button onclick="toggleOrTab('${q.id}', 'A')" id="btn-${q.id}-A" class="flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-blue-600 text-blue-600 dark:text-white">
                        ${q.optionA.title}
                    </button>
                    <button onclick="toggleOrTab('${q.id}', 'B')" id="btn-${q.id}-B" class="flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        ${q.optionB.title}
                    </button>
                </div>
                <!-- Content Option A -->
                <div id="content-${q.id}-A" class="p-5 space-y-4">
                    <div class="text-base font-semibold text-slate-800 dark:text-slate-100">${q.optionA.question}</div>
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span class="inline-block text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Step-by-step Solution:</span>
                        <div class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">${q.optionA.solution}</div>
                    </div>
                </div>
                <!-- Content Option B -->
                <div id="content-${q.id}-B" class="p-5 space-y-4 hidden">
                    <div class="text-base font-semibold text-slate-800 dark:text-slate-100">${q.optionB.question}</div>
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span class="inline-block text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Step-by-step Solution:</span>
                        <div class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">${q.optionB.solution}</div>
                    </div>
                </div>
            `;
        } else {
            let mcqOptionsHtml = '';
            if (q.type === 'mcq' || q.type === 'ar') {
                mcqOptionsHtml = `
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                        ${q.options.map((opt, idx) => `
                            <div class="p-3 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-950 flex items-center space-x-2">
                                <span class="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-black flex items-center justify-center shrink-0">${String.fromCharCode(97 + idx)}</span>
                                <span class="text-slate-700 dark:text-slate-200">${opt}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            card.innerHTML = `
                <div onclick="toggleAccordion('${q.id}')" class="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-850/20 transition-colors">
                    <div class="flex items-center space-x-4">
                        <span class="h-8 w-8 bg-blue-600 text-white rounded-xl font-bold text-xs flex items-center justify-center shrink-0">Q${q.number}</span>
                        <div>
                            <h3 class="font-extrabold text-slate-800 dark:text-white text-sm line-clamp-1">${q.question.replace(/<[^>]*>/g, '').substring(0, 80)}...</h3>
                            <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">${q.marks} Mark${q.marks > 1 ? 's' : ''} • ${q.type === 'mcq' ? 'Multiple Choice' : q.type === 'ar' ? 'Assertion-Reason' : 'Subjective'} • ${secKey.toUpperCase()}</span>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4 ml-2" onclick="event.stopPropagation()">
                        <button onclick="toggleMastered('${q.id}', event)" class="px-2.5 py-1 rounded-lg text-[10px] font-black transition-all flex items-center space-x-1.5 ${masterBtnClass} master-btn-${q.id}">
                            <i class="${masterIcon} text-xs"></i> <span>${masterText}</span>
                        </button>
                        <button onclick="toggleBookmark('${q.id}', event); renderBookmarks(document.getElementById('content-area'))" class="p-1">
                            <i class="fa-solid fa-star text-yellow-500 text-base"></i>
                        </button>
                        <i id="chevron-${q.id}" class="fa-solid fa-chevron-down text-slate-400 dark:text-slate-500 transform transition-transform duration-200"></i>
                    </div>
                </div>
                
                <div id="accordion-${q.id}" class="hidden p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/10 dark:bg-slate-900/10 space-y-4">
                    <div class="text-base font-semibold leading-relaxed text-slate-800 dark:text-slate-100">${q.question}</div>
                    ${mcqOptionsHtml}
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        ${(q.type === 'mcq' || q.type === 'ar') ? `
                            <div class="mb-3">
                                <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 rounded text-xs font-black uppercase tracking-wider">
                                    Correct Option: (${q.correctOption})
                                </span>
                            </div>
                        ` : ''}
                        <span class="inline-block text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Step-by-step Solution:</span>
                        <div class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">${q.solution}</div>
                    </div>
                </div>
            `;
        }
        bmarkListContainer.appendChild(card);
    });
}

// 4. Render Syllabus Interactive Periodic Table Widget
function renderPeriodicTable(container) {
    container.innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 class="text-2xl font-extrabold text-blue-900 dark:text-white leading-tight">Class XII Syllabus Periodic Table Widget</h2>
                <p class="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">Click on any high-frequency syllabus element below to inspect electronegativity, config, and chapter relevance!</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Grid of Elements -->
                <div class="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                    <div class="grid grid-cols-5 sm:grid-cols-6 gap-3">
                        ${PERIODIC_DATA.map(el => `
                            <div onclick="selectElement(${el.num})" id="el-card-${el.num}" class="element-card border border-slate-200/80 dark:border-slate-800 p-3 rounded-xl text-center cursor-pointer transition-all hover:shadow-md hover:border-blue-500 bg-slate-50 dark:bg-slate-950 relative overflow-hidden group">
                                <span class="absolute top-1 left-1.5 text-[9px] font-extrabold text-slate-400">${el.num}</span>
                                <span class="text-xl font-black block text-slate-800 dark:text-white group-hover:text-blue-500">${el.sym}</span>
                                <span class="text-[9px] text-slate-400 font-semibold block truncate">${el.name}</span>
                                <span class="absolute right-1 bottom-1 text-[8px] px-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 rounded font-black uppercase">${el.block}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Details panel -->
                <div class="lg:col-span-1">
                    <div id="element-detail-pane" class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4 min-h-[350px] flex flex-col justify-center text-center">
                        <i class="fa-solid fa-atom text-5xl text-blue-500/20 animate-spin" style="animation-duration: 10s"></i>
                        <h4 class="text-sm font-bold text-slate-400 uppercase tracking-wider">No Element Selected</h4>
                        <p class="text-xs text-slate-400 max-w-xs mx-auto">Select any element in the grid to review physical properties and its specific role in your board syllabus.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Auto-select Hydrogen
    selectElement(1);
}

function selectElement(atomicNum) {
    const el = PERIODIC_DATA.find(item => item.num === atomicNum);
    if (!el) return;
    
    // Toggle active border styles on card
    const cards = document.querySelectorAll('.element-card');
    cards.forEach(c => c.className = "element-card border border-slate-200/80 dark:border-slate-800 p-3 rounded-xl text-center cursor-pointer transition-all hover:shadow-md hover:border-blue-500 bg-slate-50 dark:bg-slate-950 relative overflow-hidden group");
    
    const activeCard = document.getElementById(`el-card-${atomicNum}`);
    if (activeCard) {
        activeCard.className = "element-card border border-blue-500 ring-2 ring-blue-500/20 p-3 rounded-xl text-center cursor-pointer transition-all shadow-md bg-white dark:bg-slate-900 relative overflow-hidden group";
    }
    
    const pane = document.getElementById('element-detail-pane');
    pane.className = "bg-white dark:bg-slate-900 border border-slate-200/85 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5 text-left transition-all";
    pane.innerHTML = `
        <div class="flex items-center space-x-3.5 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div class="h-14 w-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex flex-col items-center justify-center relative shadow-md">
                <span class="absolute top-1 left-1.5 text-[8px] font-black">${el.num}</span>
                <span class="text-2xl font-black">${el.sym}</span>
            </div>
            <div>
                <h3 class="text-lg font-black text-slate-800 dark:text-white">${el.name}</h3>
                <span class="text-[10px] font-extrabold uppercase bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-md tracking-wider">${el.block}-block Element</span>
            </div>
        </div>
        
        <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl">
                <span class="text-[9px] text-slate-400 font-extrabold block uppercase">Atomic Mass</span>
                <span class="font-bold text-slate-700 dark:text-slate-200">${el.mass} u</span>
            </div>
            <div class="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl">
                <span class="text-[9px] text-slate-400 font-extrabold block uppercase">Electronegativity</span>
                <span class="font-bold text-slate-700 dark:text-slate-200">${el.electroneg}</span>
            </div>
            <div class="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl">
                <span class="text-[9px] text-slate-400 font-extrabold block uppercase">Oxidation States</span>
                <span class="font-bold text-slate-700 dark:text-slate-200">${el.state}</span>
            </div>
            <div class="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl">
                <span class="text-[9px] text-slate-400 font-extrabold block uppercase">SRP Potential ($E^\\circ$)</span>
                <span class="font-bold text-slate-700 dark:text-slate-200">${el.pot}</span>
            </div>
        </div>
        
        <div class="p-4 bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl space-y-1">
            <span class="text-[10px] font-black uppercase text-blue-700 dark:text-blue-300 block tracking-wider">Exam Syllabus Relevance</span>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">${el.relevance}</p>
        </div>
    `;
    
    if (window.renderMathInElement) {
        renderMathInElement(pane, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }
}

// 5. Render Practice Quiz View
function renderQuiz(container) {
    const mcqs = DATASET['section-a'];
    container.innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 class="text-2xl font-extrabold text-blue-900 dark:text-white leading-tight">Interactive Practice Quiz (Section A)</h2>
                <p class="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">Complete all 16 multiple-choice & assertion-reason questions to test your skills and unlock full solutions.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Quiz List -->
                <div class="lg:col-span-2 space-y-4">
                    ${mcqs.map((q, idx) => `
                        <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                            <div class="flex items-center space-x-3">
                                <span class="h-6 w-6 rounded bg-blue-600 text-white text-xs font-bold flex items-center justify-center">${idx + 1}</span>
                                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Question ${idx+1} • 1 Mark</span>
                            </div>
                            <div class="text-base font-semibold leading-relaxed text-slate-800 dark:text-slate-100">${q.question}</div>
                            
                            <!-- Options -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                ${q.options.map((opt, optIdx) => `
                                    <button onclick="answerQuiz('${q.id}', ${optIdx}, ${q.correctIndex})" id="opt-${q.id}-${optIdx}" class="quiz-btn-option text-left p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-950 text-xs font-semibold flex items-center space-x-3 transition-all">
                                        <span class="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-black flex items-center justify-center shrink-0">${String.fromCharCode(65 + optIdx)}</span>
                                        <span>${opt}</span>
                                    </button>
                                `).join('')}
                            </div>
                            
                            <!-- Solution block, shown on selection -->
                            <div id="solution-quiz-${q.id}" class="hidden p-4 bg-emerald-50/20 dark:bg-emerald-950/10 border-t border-slate-100 dark:border-slate-800 text-sm leading-relaxed space-y-2">
                                <span class="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">Board Solution Explanation:</span>
                                <div>${q.solution}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Sticky Scoreboard -->
                <div class="lg:col-span-1">
                    <div class="sticky top-6 bg-white dark:bg-slate-900 border border-slate-200/85 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                        <h3 class="text-base font-black"><i class="fa-solid fa-award mr-2 text-indigo-500"></i> Scoreboard</h3>
                        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                            <div>
                                <span class="text-2xl font-black text-slate-800 dark:text-white" id="score-val">0</span>
                                <span class="text-sm font-semibold text-slate-400">/ 16</span>
                            </div>
                            <span class="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-300 rounded-full font-bold text-xs" id="grade-val">NOT STARTED</span>
                        </div>
                        
                        <div class="space-y-2">
                            <div class="flex justify-between text-[10px] font-black text-slate-400">
                                <span>PROGRESS</span>
                                <span id="progress-percent">0%</span>
                            </div>
                            <div class="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div id="progress-bar-val" class="h-full bg-indigo-500 rounded-full transition-all" style="width: 0%"></div>
                            </div>
                        </div>
                        
                        <button onclick="resetQuiz()" class="w-full py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-xl text-xs font-bold text-center transition-all">
                            Reset Practice Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function answerQuiz(qId, selectedIdx, correctIdx) {
    if (quizAnswers[qId] !== undefined) return; // Prevent re-answering
    
    quizAnswers[qId] = selectedIdx;
    
    // UI Feedback for options
    const btns = document.querySelectorAll(`[id^="opt-${qId}-"]`);
    btns.forEach((btn, idx) => {
        if (idx === correctIdx) {
            btn.className = "text-left p-3.5 rounded-xl border text-xs font-bold flex items-center space-x-3 transition-all bg-emerald-100 border-emerald-500 text-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-300";
        } else if (idx === selectedIdx) {
            btn.className = "text-left p-3.5 rounded-xl border text-xs font-bold flex items-center space-x-3 transition-all bg-red-100 border-red-500 text-red-800 dark:bg-red-950/20 dark:text-red-300";
        }
        btn.disabled = true;
    });
    
    // Expand solution explanation
    const sol = document.getElementById(`solution-quiz-${qId}`);
    if (sol) {
        sol.classList.remove('hidden');
        if (window.renderMathInElement) {
            renderMathInElement(sol, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError: false
            });
        }
    }
    
    updateScoreboard();
}

function updateScoreboard() {
    const mcqs = DATASET['section-a'];
    let score = 0;
    let answered = 0;
    
    mcqs.forEach(q => {
        if (quizAnswers[q.id] !== undefined) {
            answered++;
            if (quizAnswers[q.id] === q.correctIndex) {
                score++;
            }
        }
    });
    
    document.getElementById('score-val').innerText = score;
    const progress = Math.round((answered / 16) * 100);
    document.getElementById('progress-percent').innerText = `${progress}%`;
    document.getElementById('progress-bar-val').style.width = `${progress}%`;
    
    let grade = "NOT STARTED";
    if (progress > 0) {
        if (score >= 14) grade = "EXCELLENT (A1)";
        else if (score >= 12) grade = "VERY GOOD (A2)";
        else if (score >= 9) grade = "GOOD (B1)";
        else if (score >= 6) grade = "PASS (C)";
        else grade = "NEEDS REVISION";
    }
    document.getElementById('grade-val').innerText = grade;
}

function resetQuiz() {
    quizAnswers = {};
    renderContent();
}

// 6. Render Chemistry Solvers (Updated with Freezing Point Depression!)
function renderCalculators(container) {
    container.innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 class="text-2xl font-extrabold text-blue-900 dark:text-white leading-tight">Chemistry Interactive Solvers</h2>
                <p class="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">Interactively test physical calculations from the paper using your own customized parameters.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- 1. First-Order kinetics solver -->
                <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                    <h3 class="font-bold text-slate-800 dark:text-white flex items-center"><i class="fa-solid fa-stopwatch mr-2 text-indigo-500"></i> First-Order Kinetics Solver</h3>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500">Models Q19: $t = \\frac{2.303}{k} \\log_{10} \\left(\\frac{[A]_0}{[A]}\\right)$</p>
                    <div class="space-y-3">
                        <div>
                            <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Rate Constant $k$ ($s^{-1}$):</label>
                            <input type="number" id="kin-k" value="0.00115" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Initial $[A]_0$ (g):</label>
                                <input type="number" id="kin-a0" value="5.0" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Final $[A]$ (g):</label>
                                <input type="number" id="kin-a" value="3.0" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                        </div>
                        <button onclick="calculateKinetics()" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs transition-all shadow-sm">
                            Calculate Time
                        </button>
                        <div id="kin-result" class="hidden p-3 bg-indigo-50/50 dark:bg-indigo-950/20 text-xs font-bold rounded-xl text-indigo-700 dark:text-indigo-300 border-l-4 border-indigo-500">
                        </div>
                    </div>
                </div>

                <!-- 2. Nernst cell potential solver -->
                <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                    <h3 class="font-bold text-slate-800 dark:text-white flex items-center"><i class="fa-solid fa-car-battery mr-2 text-amber-500"></i> Nernst Potential Solver</h3>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500">Models Q32: $E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{2} \\log_{10} \\left( \\frac{[\\text{Mg}^{2+}]}{[\\text{Ag}^+]^2} \\right)$</p>
                    <div class="space-y-3">
                        <div>
                            <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Standard Potential $E^\\circ_{\\text{cell}}$ (V):</label>
                            <input type="number" id="ner-e0" value="3.17" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">$[\\text{Mg}^{2+}]$ Concentration (M):</label>
                                <input type="number" id="ner-mg" value="0.13" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">$[\\text{Ag}^+]$ Concentration (M):</label>
                                <input type="number" id="ner-ag" value="0.0001" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                        </div>
                        <button onclick="calculateNernst()" class="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs transition-all shadow-sm">
                            Calculate potential ($E_{\\text{cell}}$)
                        </button>
                        <div id="ner-result" class="hidden p-3 bg-amber-50/50 dark:bg-amber-950/20 text-xs font-bold rounded-xl text-amber-700 dark:text-amber-300 border-l-4 border-amber-500">
                        </div>
                    </div>
                </div>

                <!-- 3. Colligative Boiling Elevation solver -->
                <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                    <h3 class="font-bold text-slate-800 dark:text-white flex items-center"><i class="fa-solid fa-temperature-arrow-up mr-2 text-rose-500"></i> Molar Mass (Boiling Elevation)</h3>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500">Models Q22: $M_2 = \\frac{K_b \\cdot w_2 \\cdot 1000}{\\Delta T_b \\cdot w_1}$</p>
                    <div class="space-y-3">
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">$K_b$ Constant ($K \\text{ kg mol}^{-1}$):</label>
                                <input type="number" id="col-kb" value="1.72" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Boiling Temp Rise $\\Delta T_b$ (K):</label>
                                <input type="number" id="col-dtb" value="0.33" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Mass of Solute $w_2$ (g):</label>
                                <input type="number" id="col-w2" value="1.25" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Mass of Solvent $w_1$ (g):</label>
                                <input type="number" id="col-w1" value="99.0" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                        </div>
                        <button onclick="calculateMolarMass()" class="w-full py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-bold text-xs transition-all shadow-sm">
                            Calculate solute molar mass ($M_2$)
                        </button>
                        <div id="col-result" class="hidden p-3 bg-rose-50/50 dark:bg-rose-950/20 text-xs font-bold rounded-xl text-rose-700 dark:text-rose-300 border-l-4 border-rose-500">
                        </div>
                    </div>
                </div>

                <!-- NEW 4. Colligative Freezing point depression solver -->
                <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                    <h3 class="font-bold text-slate-800 dark:text-white flex items-center"><i class="fa-solid fa-temperature-arrow-down mr-2 text-cyan-500"></i> Freezing Point Depression Solver</h3>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500">Formula: $M_2 = \\frac{K_f \\cdot w_2 \\cdot 1000}{\\Delta T_f \\cdot w_1}$</p>
                    <div class="space-y-3">
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">$K_f$ Constant ($K \\text{ kg mol}^{-1}$):</label>
                                <input type="number" id="col-kf" value="1.86" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Freezing Temp Drop $\\Delta T_f$ (K):</label>
                                <input type="number" id="col-dtf" value="0.25" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Mass of Solute $w_2$ (g):</label>
                                <input type="number" id="col-w2-f" value="1.0" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Mass of Solvent $w_1$ (g):</label>
                                <input type="number" id="col-w1-f" value="50.0" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                        </div>
                        <button onclick="calculateFreezingDepression()" class="w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold text-xs transition-all shadow-sm">
                            Calculate solute molar mass ($M_2$)
                        </button>
                        <div id="col-result-f" class="hidden p-3 bg-cyan-50/50 dark:bg-cyan-950/20 text-xs font-bold rounded-xl text-cyan-700 dark:text-cyan-300 border-l-4 border-cyan-500">
                        </div>
                    </div>
                </div>

                <!-- 5. Activation Energy calculator -->
                <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 md:col-span-2">
                    <h3 class="font-bold text-slate-800 dark:text-white flex items-center"><i class="fa-solid fa-gauge-high mr-2 text-teal-500"></i> Arrhenius Activation Energy Solver</h3>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500">Models Q26 / Q33 OR: $E_a = \\frac{2.303 \\cdot R \\cdot T_1 \\cdot T_2}{T_2 - T_1} \\log_{10} \\left(\\frac{k_2}{k_1}\\right)$</p>
                    <div class="space-y-3">
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Temperature $T_1$ (K):</label>
                                <input type="number" id="act-t1" value="300" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Temperature $T_2$ (K):</label>
                                <input type="number" id="act-t2" value="320" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Rate Constant $k_1$:</label>
                                <input type="number" id="act-k1" value="0.02" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Rate Constant $k_2$:</label>
                                <input type="number" id="act-k2" value="0.08" step="any" class="w-full mt-1 p-2 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs focus:outline-none">
                            </div>
                        </div>
                        <button onclick="calculateActivationEnergy()" class="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold text-xs transition-all shadow-sm">
                            Calculate $E_a$
                        </button>
                        <div id="act-result" class="hidden p-3 bg-teal-50/50 dark:bg-teal-950/20 text-xs font-bold rounded-xl text-teal-700 dark:text-teal-300 border-l-4 border-teal-500">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Interactive Calculators Logic
function calculateKinetics() {
    const k = parseFloat(document.getElementById('kin-k').value);
    const a0 = parseFloat(document.getElementById('kin-a0').value);
    const a = parseFloat(document.getElementById('kin-a').value);
    const result = document.getElementById('kin-result');
    
    if (isNaN(k) || isNaN(a0) || isNaN(a) || k <= 0 || a0 <= 0 || a <= 0 || a > a0) {
        result.className = "p-3 bg-red-50/50 dark:bg-red-950/20 text-xs font-bold rounded-xl text-red-700 dark:text-red-300 border-l-4 border-red-500";
        result.innerText = "Error: Please check that values are positive and Final [A] <= Initial [A]0.";
        result.classList.remove('hidden');
        return;
    }
    
    const time = (2.303 / k) * Math.log10(a0 / a);
    const t_half = 0.693 / k;
    
    result.className = "p-3 bg-indigo-50/50 dark:bg-indigo-950/20 text-xs font-bold rounded-xl text-indigo-700 dark:text-indigo-300 border-l-4 border-indigo-500";
    result.innerHTML = `
        <strong>Result:</strong><br>
        • Time required ($t$): <strong>${time.toFixed(2)} seconds</strong><br>
        • Reaction Half-Life ($t_{1/2}$): <strong>${t_half.toFixed(2)} seconds</strong>
    `;
    result.classList.remove('hidden');
}

function calculateNernst() {
    const e0 = parseFloat(document.getElementById('ner-e0').value);
    const mg = parseFloat(document.getElementById('ner-mg').value);
    const ag = parseFloat(document.getElementById('ner-ag').value);
    const result = document.getElementById('ner-result');
    
    if (isNaN(e0) || isNaN(mg) || isNaN(ag) || mg <= 0 || ag <= 0) {
        result.className = "p-3 bg-red-50/50 dark:bg-red-950/20 text-xs font-bold rounded-xl text-red-700 dark:text-red-300 border-l-4 border-red-500";
        result.innerText = "Error: Concentrations and Standard potential must be valid positive numbers.";
        result.classList.remove('hidden');
        return;
    }
    
    const potential = e0 - (0.0591 / 2) * Math.log10(mg / (ag ** 2));
    
    result.className = "p-3 bg-amber-50/50 dark:bg-amber-950/20 text-xs font-bold rounded-xl text-amber-700 dark:text-amber-300 border-l-4 border-amber-500";
    result.innerHTML = `
        <strong>Result:</strong><br>
        • Reaction Cell Potential ($E_{\\text{cell}}$): <strong>${potential.toFixed(3)} V</strong><br>
        • Potential Drop (Loss): <strong>${(e0 - potential).toFixed(3)} V</strong>
    `;
    result.classList.remove('hidden');
}

function calculateMolarMass() {
    const kb = parseFloat(document.getElementById('col-kb').value);
    const dtb = parseFloat(document.getElementById('col-dtb').value);
    const w2 = parseFloat(document.getElementById('col-w2').value);
    const w1 = parseFloat(document.getElementById('col-w1').value);
    const result = document.getElementById('col-result');
    
    if (isNaN(kb) || isNaN(dtb) || isNaN(w2) || isNaN(w1) || kb <= 0 || dtb <= 0 || w2 <= 0 || w1 <= 0) {
        result.className = "p-3 bg-red-50/50 dark:bg-red-950/20 text-xs font-bold rounded-xl text-red-700 dark:text-red-300 border-l-4 border-red-500";
        result.innerText = "Error: Ensure all physical values are positive numbers.";
        result.classList.remove('hidden');
        return;
    }
    
    const m2 = (kb * w2 * 1000) / (dtb * w1);
    
    result.className = "p-3 bg-rose-50/50 dark:bg-rose-950/20 text-xs font-bold rounded-xl text-rose-700 dark:text-rose-300 border-l-4 border-rose-500";
    result.innerHTML = `
        <strong>Result:</strong><br>
        • Calculated Solute Molar Mass ($M_2$): <strong>${m2.toFixed(2)} g/mol</strong>
    `;
    result.classList.remove('hidden');
}

function calculateFreezingDepression() {
    const kf = parseFloat(document.getElementById('col-kf').value);
    const dtf = parseFloat(document.getElementById('col-dtf').value);
    const w2 = parseFloat(document.getElementById('col-w2-f').value);
    const w1 = parseFloat(document.getElementById('col-w1-f').value);
    const result = document.getElementById('col-result-f');
    
    if (isNaN(kf) || isNaN(dtf) || isNaN(w2) || isNaN(w1) || kf <= 0 || dtf <= 0 || w2 <= 0 || w1 <= 0) {
        result.className = "p-3 bg-red-50/50 dark:bg-red-950/20 text-xs font-bold rounded-xl text-red-700 dark:text-red-300 border-l-4 border-red-500";
        result.innerText = "Error: Ensure all physical values are positive numbers.";
        result.classList.remove('hidden');
        return;
    }
    
    const m2 = (kf * w2 * 1000) / (dtf * w1);
    
    result.className = "p-3 bg-cyan-50/50 dark:bg-cyan-950/20 text-xs font-bold rounded-xl text-cyan-700 dark:text-cyan-300 border-l-4 border-cyan-500";
    result.innerHTML = `
        <strong>Result:</strong><br>
        • Calculated Solute Molar Mass ($M_2$): <strong>${m2.toFixed(2)} g/mol</strong>
    `;
    result.classList.remove('hidden');
}

function calculateActivationEnergy() {
    const t1 = parseFloat(document.getElementById('act-t1').value);
    const t2 = parseFloat(document.getElementById('act-t2').value);
    const k1 = parseFloat(document.getElementById('act-k1').value);
    const k2 = parseFloat(document.getElementById('act-k2').value);
    const result = document.getElementById('act-result');
    
    if (isNaN(t1) || isNaN(t2) || isNaN(k1) || isNaN(k2) || t1 <= 0 || t2 <= 0 || k1 <= 0 || k2 <= 0 || t1 >= t2 || k1 >= k2) {
        result.className = "p-3 bg-red-50/50 dark:bg-red-950/20 text-xs font-bold rounded-xl text-red-700 dark:text-red-300 border-l-4 border-red-500";
        result.innerText = "Error: Verify that T2 > T1, k2 > k1, and all inputs are positive.";
        result.classList.remove('hidden');
        return;
    }
    
    const R = 8.314; // Gas constant
    const ea = (Math.log10(k2 / k1) * 2.303 * R * t1 * t2) / (t2 - t1);
    
    result.className = "p-3 bg-teal-50/50 dark:bg-teal-950/20 text-xs font-bold rounded-xl text-teal-700 dark:text-teal-300 border-l-4 border-teal-500";
    result.innerHTML = `
        <strong>Result:</strong><br>
        • Activation Energy ($E_a$): <strong>${(ea / 1000.0).toFixed(2)} kJ/mol</strong> (or ${(ea).toFixed(1)} J/mol)
    `;
    result.classList.remove('hidden');
}

// Live Keyword Search
function handleSearch() {
    const query = document.getElementById('search-bar').value.toLowerCase().trim();
    const container = document.getElementById('content-area');
    
    if (query === '') {
        renderContent();
        return;
    }
    
    container.innerHTML = `
        <div class="border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
            <h2 class="text-2xl font-extrabold text-blue-900 dark:text-white leading-tight">Search Results</h2>
            <p class="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium font-medium">Showing search matches for: "${query}"</p>
        </div>
    `;
    
    let matches = [];
    
    // Scan dataset
    Object.keys(DATASET).forEach(secKey => {
        DATASET[secKey].forEach(q => {
            let searchableText = '';
            if (q.isOrQuestion) {
                searchableText = (q.optionA.question + q.optionA.solution + q.optionB.question + q.optionB.solution).toLowerCase();
            } else {
                searchableText = (q.question + q.solution + (q.options ? q.options.join(' ') : '')).toLowerCase();
            }
            
            if (searchableText.includes(query)) {
                matches.push({ q, secKey });
            }
        });
    });
    
    if (matches.length === 0) {
        container.innerHTML += `
            <div class="p-12 text-center text-slate-400 dark:text-slate-500 space-y-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                <i class="fa-solid fa-magnifying-glass text-5xl text-slate-300"></i>
                <p class="text-sm font-bold">No results found for your search term.</p>
                <p class="text-xs max-w-xs mx-auto">Try searching for core concepts such as "Kinetics", "Nernst", "Grignard", "Colligative", or "DDT".</p>
            </div>
        `;
        return;
    }
    
    // Render cards
    matches.forEach(({ q, secKey }) => {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm mb-4 overflow-hidden';
        
        const isBmarked = bookmarks.includes(q.id);
        const bmarkClass = isBmarked ? 'fa-solid fa-star text-yellow-500' : 'fa-regular fa-star text-slate-400 dark:text-slate-500 hover:text-yellow-500';
        
        const isMastered = mastered.includes(q.id);
        const masterBtnClass = isMastered ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300' : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400';
        const masterIcon = isMastered ? 'fa-solid fa-circle-check text-emerald-500' : 'fa-regular fa-circle text-slate-400';
        const masterText = isMastered ? 'Mastered' : 'Mark Mastered';

        if (q.isOrQuestion) {
            card.innerHTML = `
                <div class="px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <span class="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-xs font-black">Q${q.number}</span>
                        <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">${q.marks} Marks • Choice • ${secKey.toUpperCase()}</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button onclick="toggleMastered('${q.id}', event)" class="px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${masterBtnClass} master-btn-${q.id}">
                            <i class="${masterIcon}"></i> <span>${masterText}</span>
                        </button>
                        <button onclick="toggleBookmark('${q.id}', event)" class="p-1">
                            <i class="${bmarkClass} bmark-btn-${q.id} text-base transition-colors"></i>
                        </button>
                    </div>
                </div>
                <!-- OR Tabs -->
                <div class="flex border-b border-slate-100 dark:border-slate-800">
                    <button onclick="toggleOrTab('${q.id}', 'A')" id="btn-${q.id}-A" class="flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-blue-600 text-blue-600 dark:text-white">
                        ${q.optionA.title}
                    </button>
                    <button onclick="toggleOrTab('${q.id}', 'B')" id="btn-${q.id}-B" class="flex-1 py-2.5 text-xs font-bold text-center border-b-2 border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        ${q.optionB.title}
                    </button>
                </div>
                <!-- Content A -->
                <div id="content-${q.id}-A" class="p-5 space-y-4">
                    <div class="text-base font-semibold text-slate-800 dark:text-slate-100">${q.optionA.question}</div>
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span class="inline-block text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Step-by-step Solution:</span>
                        <div class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">${q.optionA.solution}</div>
                    </div>
                </div>
                <!-- Content B -->
                <div id="content-${q.id}-B" class="p-5 space-y-4 hidden">
                    <div class="text-base font-semibold text-slate-800 dark:text-slate-100">${q.optionB.question}</div>
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span class="inline-block text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Step-by-step Solution:</span>
                        <div class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">${q.optionB.solution}</div>
                    </div>
                </div>
            `;
        } else {
            let mcqOptionsHtml = '';
            if (q.type === 'mcq' || q.type === 'ar') {
                mcqOptionsHtml = `
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                        ${q.options.map((opt, idx) => `
                            <div class="p-3 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-950 flex items-center space-x-2">
                                <span class="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-black flex items-center justify-center shrink-0">${String.fromCharCode(97 + idx)}</span>
                                <span class="text-slate-700 dark:text-slate-200">${opt}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            card.innerHTML = `
                <div onclick="toggleAccordion('${q.id}')" class="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-850/20 transition-colors">
                    <div class="flex items-center space-x-4">
                        <span class="h-8 w-8 bg-blue-600 text-white rounded-xl font-bold text-xs flex items-center justify-center shrink-0">Q${q.number}</span>
                        <div>
                            <h3 class="font-extrabold text-slate-800 dark:text-white text-sm line-clamp-1">${q.question.replace(/<[^>]*>/g, '').substring(0, 80)}...</h3>
                            <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">${q.marks} Mark${q.marks > 1 ? 's' : ''} • ${q.type === 'mcq' ? 'Multiple Choice' : q.type === 'ar' ? 'Assertion-Reason' : 'Subjective'} • ${secKey.toUpperCase()}</span>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4 ml-2" onclick="event.stopPropagation()">
                        <button onclick="toggleMastered('${q.id}', event)" class="px-2.5 py-1 rounded-lg text-[10px] font-black transition-all flex items-center space-x-1.5 ${masterBtnClass} master-btn-${q.id}">
                            <i class="${masterIcon} text-xs"></i> <span>${masterText}</span>
                        </button>
                        <button onclick="toggleBookmark('${q.id}', event)" class="p-1">
                            <i class="${bmarkClass} bmark-btn-${q.id} text-base transition-colors"></i>
                        </button>
                        <i id="chevron-${q.id}" class="fa-solid fa-chevron-down text-slate-400 dark:text-slate-500 transform transition-transform duration-200"></i>
                    </div>
                </div>
                
                <div id="accordion-${q.id}" class="hidden p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/10 dark:bg-slate-900/10 space-y-4">
                    <div class="text-base font-semibold text-slate-800 dark:text-slate-100">${q.question}</div>
                    ${mcqOptionsHtml}
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        ${(q.type === 'mcq' || q.type === 'ar') ? `
                            <div class="mb-3">
                                <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 rounded text-xs font-black uppercase tracking-wider">
                                    Correct Option: (${q.correctOption})
                                </span>
                            </div>
                        ` : ''}
                        <span class="inline-block text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Step-by-step Solution:</span>
                        <div class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-2">${q.solution}</div>
                    </div>
                </div>
            `;
        }
        
        container.appendChild(card);
    });

    if (window.renderMathInElement) {
        renderMathInElement(container, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }
}

// Sidebar Mobile drawer toggling
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
}

function closeSidebarOnMobile() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 1024) {
        sidebar.classList.add('-translate-x-full');
    }
}

// Dark/Light Theme toggling
function toggleDarkMode() {
    darkTheme = !darkTheme;
    const docHTML = document.documentElement;
    const icon = document.getElementById('theme-icon');
    
    if (darkTheme) {
        docHTML.classList.remove('light');
        docHTML.classList.add('dark');
        icon.className = "fa-regular fa-sun text-lg text-amber-400";
    } else {
        docHTML.classList.remove('dark');
        docHTML.classList.add('light');
        icon.className = "fa-regular fa-moon text-lg text-slate-500";
    }
}
