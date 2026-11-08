// Egna övningar till Matte 2a, ekvationer. Genererad från scripts/generate_questions.py.
window.BANK = {
  "course": "Matte 2a",
  "chapter": "Ekvationer",
  "blurb": "200 egna frågor till ekvationskapitlet. Upplägget följer Matteboken och Mattecentrum: reglerna som behövs vid ekvationslösning, andragradsekvationer, andragradsfunktioner, linjära ekvationssystem, potens- och exponentialekvationer, och tillämpningar.",
  "topics": [
    {
      "id": "linjar",
      "title": "Linjära ekvationer och formler",
      "lead": "Det kapitlet börjar med: lösa ut x, parenteser och formler."
    },
    {
      "id": "regler",
      "title": "Kvadrerings- och konjugatregeln",
      "lead": "Reglerna används när uttryck ska utvecklas eller ekvationer skrivas om."
    },
    {
      "id": "faktor",
      "title": "Faktorisering",
      "lead": "Skriv om uttrycket som en produkt, så att nollproduktmetoden kan användas."
    },
    {
      "id": "enkel",
      "title": "Enkla andragradsekvationer",
      "lead": "Kvadratrotsmetoden när ekvationen kan skrivas som en kvadrat lika med ett tal."
    },
    {
      "id": "noll",
      "title": "Nollproduktmetoden",
      "lead": "En produkt är noll bara om minst en faktor är noll."
    },
    {
      "id": "kvad",
      "title": "Kvadratkomplettering",
      "lead": "Gör om vänsterledet till en jämn kvadrat. Det är vägen fram till pq-formeln."
    },
    {
      "id": "pq",
      "title": "pq-formeln",
      "lead": "Den allmänna lösningen när ekvationen står på formen x² + px + q = 0."
    },
    {
      "id": "disk",
      "title": "Diskriminant och antal rötter",
      "lead": "Uttrycket under rottecknet avgör om det finns två, en eller ingen reell rot."
    },
    {
      "id": "funk",
      "title": "Andragradsfunktioner",
      "lead": "Nollställen, symmetrilinje och extrempunkt hör ihop med ekvationen f(x) = 0."
    },
    {
      "id": "subst",
      "title": "Substitutionsmetoden",
      "lead": "Lös ut en variabel ur ena ekvationen och sätt in den i den andra."
    },
    {
      "id": "add",
      "title": "Additionsmetoden",
      "lead": "Addera eller subtrahera ekvationerna så att en variabel försvinner."
    },
    {
      "id": "graf",
      "title": "Grafisk lösning och antal lösningar",
      "lead": "Skärningen mellan linjerna är lösningen. Lutningen avgör hur många det finns."
    },
    {
      "id": "potens",
      "title": "Potensekvationer",
      "lead": "Samma bas ger samma exponent. Jämna och udda rötter beter sig olika."
    },
    {
      "id": "expo",
      "title": "Exponentialekvationer",
      "lead": "När baserna inte kan göras lika löser du med lg. På nivå 2a räcker räknarens lg."
    },
    {
      "id": "till",
      "title": "Tillämpningar",
      "lead": "Ställ upp ekvationen ur texten och välj en metod som passar."
    }
  ],
  "questions": [
    {
      "id": "linjar-01",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "4x − 7 = 13",
      "choices": [
        "x = 6",
        "x = 5",
        "x = 4",
        "x = −5"
      ],
      "correct": "x = 5",
      "steps": [
        "4x − 7 = 13",
        "4x = 13 + 7",
        "4x = 20",
        "x = 5"
      ],
      "hint": "Flytta konstanten och byt tecken.",
      "level": "lätt"
    },
    {
      "id": "linjar-02",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "6x + 5 = 23",
      "choices": [
        "x = 2",
        "x = 3",
        "x = −3",
        "x = 4"
      ],
      "correct": "x = 3",
      "steps": [
        "6x + 5 = 23",
        "6x = 18",
        "x = 3"
      ],
      "hint": "Subtrahera 5 på båda sidor.",
      "level": "lätt"
    },
    {
      "id": "linjar-03",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "−3x + 4 = 19",
      "choices": [
        "x = −6",
        "x = −4",
        "x = 5",
        "x = −5"
      ],
      "correct": "x = −5",
      "steps": [
        "−3x + 4 = 19",
        "−3x = 15",
        "x = −5"
      ],
      "hint": "Dividera med koefficienten, och behåll tecknet.",
      "level": "lätt"
    },
    {
      "id": "linjar-04",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "5x − 9 = −4",
      "choices": [
        "x = 2",
        "x = 0",
        "x = 1",
        "x = −1"
      ],
      "correct": "x = 1",
      "steps": [
        "5x − 9 = −4",
        "5x = 5",
        "x = 1"
      ],
      "hint": "−9 flyttas och blir +9.",
      "level": "lätt"
    },
    {
      "id": "linjar-05",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "7x − 2 = 3x + 10",
      "choices": [
        "x = 4",
        "x = 3",
        "x = −3",
        "x = 2"
      ],
      "correct": "x = 3",
      "steps": [
        "7x − 2 = 3x + 10",
        "7x − 3x = 10 + 2",
        "4x = 12",
        "x = 3"
      ],
      "hint": "Samla x-termerna i ett led.",
      "level": "mellan"
    },
    {
      "id": "linjar-06",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "2x + 8 = 5x − 7",
      "choices": [
        "x = −5",
        "x = 6",
        "x = 5",
        "x = 4"
      ],
      "correct": "x = 5",
      "steps": [
        "2x + 8 = 5x − 7",
        "8 + 7 = 5x − 2x",
        "15 = 3x",
        "x = 5"
      ],
      "hint": "Flytta x-termerna åt ett håll och talen åt det andra.",
      "level": "mellan"
    },
    {
      "id": "linjar-07",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "8 − x = 2x + 2",
      "choices": [
        "x = 3",
        "x = 2",
        "x = 1",
        "x = −2"
      ],
      "correct": "x = 2",
      "steps": [
        "8 − x = 2x + 2",
        "8 − 2 = 2x + x",
        "6 = 3x",
        "x = 2"
      ],
      "hint": "En ensam −x byter tecken när den flyttas.",
      "level": "mellan"
    },
    {
      "id": "linjar-08",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "4(x − 1) = 12",
      "choices": [
        "x = 3",
        "x = 4",
        "x = 5",
        "x = −4"
      ],
      "correct": "x = 4",
      "steps": [
        "4(x − 1) = 12",
        "x − 1 = 3",
        "x = 4"
      ],
      "hint": "Dela med 4 innan du löser parentesen.",
      "level": "mellan"
    },
    {
      "id": "linjar-09",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "2(x + 5) = 3x + 4",
      "choices": [
        "x = 5",
        "x = 7",
        "x = 6",
        "x = −6"
      ],
      "correct": "x = 6",
      "steps": [
        "2(x + 5) = 3x + 4",
        "2x + 10 = 3x + 4",
        "10 − 4 = 3x − 2x",
        "x = 6"
      ],
      "hint": "Multiplicera in 2 i parentesen först.",
      "level": "knepig"
    },
    {
      "id": "linjar-10",
      "topic": "linjar",
      "prompt": "Lös ekvationen.",
      "equation": "5(x − 2) − x = 10",
      "choices": [
        "x = −5",
        "x = 5",
        "x = 4",
        "x = 6"
      ],
      "correct": "x = 5",
      "steps": [
        "5(x − 2) − x = 10",
        "5x − 10 − x = 10",
        "4x = 20",
        "x = 5"
      ],
      "hint": "Multiplicera in 5, och glöm inte minustecknet framför x.",
      "level": "knepig"
    },
    {
      "id": "linjar-11",
      "topic": "linjar",
      "prompt": "Lös ut y.",
      "equation": "3y − 6 = 2x",
      "choices": [
        "y = (2x + 6) / 2",
        "y = 2x + 6",
        "y = (2x + 6) / 3",
        "y = (2x − 6) / 3"
      ],
      "correct": "y = (2x + 6) / 3",
      "steps": [
        "3y − 6 = 2x",
        "3y = 2x + 6",
        "y = (2x + 6) / 3"
      ],
      "hint": "Flytta −6, och dela sedan med 3.",
      "level": "knepig"
    },
    {
      "id": "linjar-12",
      "topic": "linjar",
      "prompt": "Lös ut t ur formeln.",
      "equation": "s = v·t",
      "choices": [
        "t = s − v",
        "t = v / s",
        "t = s / v",
        "t = s·v"
      ],
      "correct": "t = s / v",
      "steps": [
        "s = v·t",
        "Dela båda led med v.",
        "t = s / v"
      ],
      "hint": "t står multiplicerad med v. Dividera.",
      "level": "knepig"
    },
    {
      "id": "regler-01",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(x + 4)²",
      "choices": [
        "x² + 8x + 16",
        "x² + 16",
        "x² − 8x + 16",
        "x² + 4x + 16"
      ],
      "correct": "x² + 8x + 16",
      "steps": [
        "(x + 4)²",
        "(a + b)² = a² + 2ab + b².",
        "Kvadraten av första termen är x².",
        "Dubbla produkten är 8x.",
        "Kvadraten av sista termen är 16.",
        "x² + 8x + 16"
      ],
      "hint": "Kvadrat betyder två faktorer, inte bara att kvadrera varje term.",
      "level": "lätt"
    },
    {
      "id": "regler-02",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(x − 7)²",
      "choices": [
        "x² + 14x + 49",
        "x² − 7x + 49",
        "x² − 14x + 49",
        "x² + 49"
      ],
      "correct": "x² − 14x + 49",
      "steps": [
        "(x − 7)²",
        "(a − b)² = a² − 2ab + b².",
        "Kvadraten av första termen är x².",
        "Dubbla produkten är −14x.",
        "Kvadraten av sista termen är 49.",
        "x² − 14x + 49"
      ],
      "hint": "Kvadrat betyder två faktorer, inte bara att kvadrera varje term.",
      "level": "lätt"
    },
    {
      "id": "regler-03",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(x + 1)²",
      "choices": [
        "x² − 2x + 1",
        "x² + 2x + 1",
        "x² + 1",
        "x² + x + 1"
      ],
      "correct": "x² + 2x + 1",
      "steps": [
        "(x + 1)²",
        "(a + b)² = a² + 2ab + b².",
        "Kvadraten av första termen är x².",
        "Dubbla produkten är 2x.",
        "Kvadraten av sista termen är 1.",
        "x² + 2x + 1"
      ],
      "hint": "Kvadrat betyder två faktorer, inte bara att kvadrera varje term.",
      "level": "lätt"
    },
    {
      "id": "regler-04",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(2x + 3)²",
      "choices": [
        "4x² + 9",
        "4x² − 12x + 9",
        "4x² + 6x + 9",
        "4x² + 12x + 9"
      ],
      "correct": "4x² + 12x + 9",
      "steps": [
        "(2x + 3)²",
        "(a + b)² = a² + 2ab + b².",
        "Kvadraten av första termen är 4x².",
        "Dubbla produkten är 12x.",
        "Kvadraten av sista termen är 9.",
        "4x² + 12x + 9"
      ],
      "hint": "Kvadrat betyder två faktorer, inte bara att kvadrera varje term.",
      "level": "lätt"
    },
    {
      "id": "regler-05",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(3x − 1)²",
      "choices": [
        "9x² + 6x + 1",
        "9x² − 6x + 1",
        "9x² + 1",
        "9x² − 3x + 1"
      ],
      "correct": "9x² − 6x + 1",
      "steps": [
        "(3x − 1)²",
        "(a − b)² = a² − 2ab + b².",
        "Kvadraten av första termen är 9x².",
        "Dubbla produkten är −6x.",
        "Kvadraten av sista termen är 1.",
        "9x² − 6x + 1"
      ],
      "hint": "Kvadrat betyder två faktorer, inte bara att kvadrera varje term.",
      "level": "lätt"
    },
    {
      "id": "regler-06",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(x − 5)²",
      "choices": [
        "x² + 10x + 25",
        "x² + 25",
        "x² − 10x + 25",
        "x² − 5x + 25"
      ],
      "correct": "x² − 10x + 25",
      "steps": [
        "(x − 5)²",
        "(a − b)² = a² − 2ab + b².",
        "Kvadraten av första termen är x².",
        "Dubbla produkten är −10x.",
        "Kvadraten av sista termen är 25.",
        "x² − 10x + 25"
      ],
      "hint": "Kvadrat betyder två faktorer, inte bara att kvadrera varje term.",
      "level": "lätt"
    },
    {
      "id": "regler-07",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(x + 6)(x − 6)",
      "choices": [
        "x² − 36",
        "x² + 12x − 36",
        "x² + 36",
        "x² + 12x + 36"
      ],
      "correct": "x² − 36",
      "steps": [
        "(x + 6)(x − 6)",
        "Konjugatregeln: (a + b)(a − b) = a² − b².",
        "a² = x² och b² = 36.",
        "x² − 36"
      ],
      "hint": "Mellantermerna tar ut varandra.",
      "level": "mellan"
    },
    {
      "id": "regler-08",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(2x + 1)(2x − 1)",
      "choices": [
        "4x² + 4x − 1",
        "4x² − 1",
        "4x² + 4x + 1",
        "4x² + 1"
      ],
      "correct": "4x² − 1",
      "steps": [
        "(2x + 1)(2x − 1)",
        "Konjugatregeln: (a + b)(a − b) = a² − b².",
        "a² = 4x² och b² = 1.",
        "4x² − 1"
      ],
      "hint": "Mellantermerna tar ut varandra.",
      "level": "mellan"
    },
    {
      "id": "regler-09",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(3x + 4)(3x − 4)",
      "choices": [
        "9x² + 24x + 16",
        "9x² + 16",
        "9x² + 24x − 16",
        "9x² − 16"
      ],
      "correct": "9x² − 16",
      "steps": [
        "(3x + 4)(3x − 4)",
        "Konjugatregeln: (a + b)(a − b) = a² − b².",
        "a² = 9x² och b² = 16.",
        "9x² − 16"
      ],
      "hint": "Mellantermerna tar ut varandra.",
      "level": "mellan"
    },
    {
      "id": "regler-10",
      "topic": "regler",
      "prompt": "Utveckla uttrycket.",
      "equation": "(x + 9)(x − 9)",
      "choices": [
        "x² + 18x + 81",
        "x² + 81",
        "x² − 81",
        "x² + 18x − 81"
      ],
      "correct": "x² − 81",
      "steps": [
        "(x + 9)(x − 9)",
        "Konjugatregeln: (a + b)(a − b) = a² − b².",
        "a² = x² och b² = 81.",
        "x² − 81"
      ],
      "hint": "Mellantermerna tar ut varandra.",
      "level": "mellan"
    },
    {
      "id": "regler-11",
      "topic": "regler",
      "prompt": "Vilken regel använder du direkt?",
      "equation": "(x + 8)(x − 8)",
      "choices": [
        "Första kvadreringsregeln",
        "pq-formeln",
        "Andra kvadreringsregeln",
        "Konjugatregeln"
      ],
      "correct": "Konjugatregeln",
      "steps": [
        "(x + 8)(x − 8)",
        "Samma termer, men olika tecken mellan dem. Det är ett konjugatpar.",
        "Svar: Konjugatregeln"
      ],
      "hint": "Titta om det är en kvadrat eller ett konjugatpar.",
      "level": "mellan"
    },
    {
      "id": "regler-12",
      "topic": "regler",
      "prompt": "Vilken regel använder du direkt?",
      "equation": "(x − 4)²",
      "choices": [
        "Första kvadreringsregeln",
        "Andra kvadreringsregeln",
        "Konjugatregeln",
        "pq-formeln"
      ],
      "correct": "Andra kvadreringsregeln",
      "steps": [
        "(x − 4)²",
        "En parentes i kvadrat med minustecken är andra kvadreringsregeln.",
        "Svar: Andra kvadreringsregeln"
      ],
      "hint": "Titta om det är en kvadrat eller ett konjugatpar.",
      "level": "knepig"
    },
    {
      "id": "regler-13",
      "topic": "regler",
      "prompt": "Vilken regel använder du direkt?",
      "equation": "(x + 2)²",
      "choices": [
        "Andra kvadreringsregeln",
        "Konjugatregeln",
        "Första kvadreringsregeln",
        "pq-formeln"
      ],
      "correct": "Första kvadreringsregeln",
      "steps": [
        "(x + 2)²",
        "En parentes i kvadrat med plustecken är första kvadreringsregeln.",
        "Svar: Första kvadreringsregeln"
      ],
      "hint": "Titta om det är en kvadrat eller ett konjugatpar.",
      "level": "knepig"
    },
    {
      "id": "regler-14",
      "topic": "regler",
      "prompt": "Vilken regel använder du direkt?",
      "equation": "(5 + x)(5 − x)",
      "choices": [
        "pq-formeln",
        "Första kvadreringsregeln",
        "Konjugatregeln",
        "Andra kvadreringsregeln"
      ],
      "correct": "Konjugatregeln",
      "steps": [
        "(5 + x)(5 − x)",
        "Faktorerna är likadana utom tecknet framför x.",
        "Svar: Konjugatregeln"
      ],
      "hint": "Titta om det är en kvadrat eller ett konjugatpar.",
      "level": "knepig"
    },
    {
      "id": "regler-15",
      "topic": "regler",
      "prompt": "Vilket tal ska stå i rutan?",
      "equation": "(x + 6)² = x² + 12x + □",
      "choices": [
        "6",
        "3",
        "12",
        "36"
      ],
      "correct": "36",
      "steps": [
        "(x + 6)²",
        "Sista termen är 6².",
        "6² = 36"
      ],
      "hint": "Sista termen i en kvadreringsregel är kvadraten på talet i parentesen.",
      "level": "knepig"
    },
    {
      "id": "regler-16",
      "topic": "regler",
      "prompt": "Vilket tal ska stå i rutan?",
      "equation": "(x − 3)² = x² − 6x + □",
      "choices": [
        "6",
        "1",
        "9",
        "3"
      ],
      "correct": "9",
      "steps": [
        "(x − 3)²",
        "Sista termen är 3², och minustecknet påverkar bara mittentermen.",
        "3² = 9"
      ],
      "hint": "Sista termen i en kvadreringsregel är kvadraten på talet i parentesen.",
      "level": "knepig"
    },
    {
      "id": "faktor-01",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "x² − 9",
      "choices": [
        "(x − 3)²",
        "(x − 4)(x + 3)",
        "(x + 3)²",
        "(x − 3)(x + 3)"
      ],
      "correct": "(x − 3)(x + 3)",
      "steps": [
        "x² − 9",
        "Ingen x-term: använd konjugatregeln baklänges, a² − b² = (a − b)(a + b).",
        "(x − 3)(x + 3)"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "lätt"
    },
    {
      "id": "faktor-02",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "x² − 49",
      "choices": [
        "(x − 7)²",
        "(x + 7)²",
        "(x − 7)(x + 7)",
        "(x − 8)(x + 7)"
      ],
      "correct": "(x − 7)(x + 7)",
      "steps": [
        "x² − 49",
        "Ingen x-term: använd konjugatregeln baklänges, a² − b² = (a − b)(a + b).",
        "(x − 7)(x + 7)"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "lätt"
    },
    {
      "id": "faktor-03",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "4x² − 25",
      "choices": [
        "(2x − 6)(2x + 5)",
        "(2x − 5)(2x + 5)",
        "(2x + 5)²",
        "(2x − 5)²"
      ],
      "correct": "(2x − 5)(2x + 5)",
      "steps": [
        "4x² − 25",
        "Ingen x-term: använd konjugatregeln baklänges, a² − b² = (a − b)(a + b).",
        "(2x − 5)(2x + 5)"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "lätt"
    },
    {
      "id": "faktor-04",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "x² + 8x + 16",
      "choices": [
        "(x + 4)(x + 5)",
        "(x + 1)(x − 1)",
        "(x + 4)²",
        "(x − 4)(x + 4)"
      ],
      "correct": "(x + 4)²",
      "steps": [
        "x² + 8x + 16",
        "Det är en fullständig kvadrat. Skriv parentesen en gång och sätt ut kvadraten.",
        "(x + 4)²"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "lätt"
    },
    {
      "id": "faktor-05",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "x² − 12x + 36",
      "choices": [
        "(x + 1)(x − 1)",
        "(x − 6)²",
        "(x − 6)(x + 6)",
        "(x − 7)(x − 6)"
      ],
      "correct": "(x − 6)²",
      "steps": [
        "x² − 12x + 36",
        "Det är en fullständig kvadrat. Skriv parentesen en gång och sätt ut kvadraten.",
        "(x − 6)²"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "mellan"
    },
    {
      "id": "faktor-06",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "x² + 6x + 8",
      "choices": [
        "(x − 2)(x + 4)",
        "(x + 3)(x + 4)",
        "(x − 4)(x + 2)",
        "(x + 2)(x + 4)"
      ],
      "correct": "(x + 2)(x + 4)",
      "steps": [
        "x² + 6x + 8",
        "Sök två tal med produkt 8 och summa 6.",
        "(x + 2)(x + 4)"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "mellan"
    },
    {
      "id": "faktor-07",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "x² − x − 6",
      "choices": [
        "(x + 2)(x + 3)",
        "(x − 3)(x + 2)",
        "(x − 3)(x − 2)",
        "(x − 4)(x + 2)"
      ],
      "correct": "(x − 3)(x + 2)",
      "steps": [
        "x² − x − 6",
        "Sök två tal med produkt −6 och summa −1.",
        "(x − 3)(x + 2)"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "mellan"
    },
    {
      "id": "faktor-08",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "x² + 5x + 6",
      "choices": [
        "(x − 2)(x + 3)",
        "(x − 3)(x + 2)",
        "(x + 2)(x + 3)",
        "(x + 3)²"
      ],
      "correct": "(x + 2)(x + 3)",
      "steps": [
        "x² + 5x + 6",
        "Sök två tal med produkt 6 och summa 5.",
        "(x + 2)(x + 3)"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "mellan"
    },
    {
      "id": "faktor-09",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "x² − 4x − 12",
      "choices": [
        "(x + 2)(x + 6)",
        "(x − 7)(x + 2)",
        "(x − 6)(x − 2)",
        "(x − 6)(x + 2)"
      ],
      "correct": "(x − 6)(x + 2)",
      "steps": [
        "x² − 4x − 12",
        "Sök två tal med produkt −12 och summa −4.",
        "(x − 6)(x + 2)"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "knepig"
    },
    {
      "id": "faktor-10",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "2x² + 6x",
      "choices": [
        "2x(x + 4)",
        "2x(x + 3)",
        "2x(x − 3)",
        "(x + 1)(x − 1)"
      ],
      "correct": "2x(x + 3)",
      "steps": [
        "2x² + 6x",
        "Bryt ut den gemensamma faktorn.",
        "2x(x + 3)"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "knepig"
    },
    {
      "id": "faktor-11",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "x² − 16x + 64",
      "choices": [
        "(x + 1)(x − 1)",
        "(x − 8)²",
        "(x − 9)(x − 8)",
        "(x − 8)(x + 8)"
      ],
      "correct": "(x − 8)²",
      "steps": [
        "x² − 16x + 64",
        "Det är en fullständig kvadrat. Skriv parentesen en gång och sätt ut kvadraten.",
        "(x − 8)²"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "knepig"
    },
    {
      "id": "faktor-12",
      "topic": "faktor",
      "prompt": "Faktorisera uttrycket.",
      "equation": "9x² − 4",
      "choices": [
        "(3x − 2)²",
        "(3x − 2)(3x + 2)",
        "(3x + 2)²",
        "(3x − 3)(3x + 2)"
      ],
      "correct": "(3x − 2)(3x + 2)",
      "steps": [
        "9x² − 4",
        "Ingen x-term: använd konjugatregeln baklänges, a² − b² = (a − b)(a + b).",
        "(3x − 2)(3x + 2)"
      ],
      "hint": "Börja med gemensam faktor, konjugat eller en jämn kvadrat.",
      "level": "knepig"
    },
    {
      "id": "enkel-01",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "x² = 49",
      "choices": [
        "x = −6 eller x = 8",
        "x = ±7",
        "x = ±8",
        "x = ±7√2"
      ],
      "correct": "x = ±7",
      "steps": [
        "x² = 49",
        "x = ±√49",
        "x = ±7"
      ],
      "hint": "Kom ihåg både plus och minus.",
      "level": "lätt"
    },
    {
      "id": "enkel-02",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "x² = 81",
      "choices": [
        "x = ±9",
        "x = −8 eller x = 10",
        "x = ±10",
        "x = ±9√2"
      ],
      "correct": "x = ±9",
      "steps": [
        "x² = 81",
        "x = ±9"
      ],
      "hint": "Kom ihåg både plus och minus.",
      "level": "lätt"
    },
    {
      "id": "enkel-03",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "x² − 36 = 0",
      "choices": [
        "x = ±6√2",
        "x = −5 eller x = 7",
        "x = ±6",
        "x = ±7"
      ],
      "correct": "x = ±6",
      "steps": [
        "x² − 36 = 0",
        "x² = 36",
        "x = ±6"
      ],
      "hint": "Kom ihåg både plus och minus.",
      "level": "lätt"
    },
    {
      "id": "enkel-04",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "x² = 8",
      "choices": [
        "x = ±3√2",
        "x = ±2√3",
        "x = 1 ± 2√2",
        "x = ±2√2"
      ],
      "correct": "x = ±2√2",
      "steps": [
        "x² = 8",
        "x = ±√8",
        "√8 = √(4·2) = 2√2",
        "x = ±2√2"
      ],
      "hint": "Kom ihåg både plus och minus.",
      "level": "lätt"
    },
    {
      "id": "enkel-05",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "x² = 18",
      "choices": [
        "x = ±3√2",
        "x = ±4√2",
        "x = 1 ± 3√2",
        "x = ±3√3"
      ],
      "correct": "x = ±3√2",
      "steps": [
        "x² = 18",
        "√18 = √(9·2) = 3√2",
        "x = ±3√2"
      ],
      "hint": "Kom ihåg både plus och minus.",
      "level": "lätt"
    },
    {
      "id": "enkel-06",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "x² + 9 = 0",
      "choices": [
        "x = ±3",
        "x = 0",
        "Inga reella lösningar",
        "x = ±9"
      ],
      "correct": "Inga reella lösningar",
      "steps": [
        "x² + 9 = 0",
        "x² = −9",
        "En kvadrat av ett reellt tal är aldrig negativ.",
        "Inga reella lösningar"
      ],
      "hint": "Flytta 9. Titta på tecknet framför talet som blir kvar.",
      "level": "lätt"
    },
    {
      "id": "enkel-07",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "x² + 16 = 25",
      "choices": [
        "x = ±4",
        "x = ±3",
        "x = ±3√2",
        "x = −2 eller x = 4"
      ],
      "correct": "x = ±3",
      "steps": [
        "x² + 16 = 25",
        "x² = 9",
        "x = ±3"
      ],
      "hint": "Flytta 16 innan du drar roten.",
      "level": "lätt"
    },
    {
      "id": "enkel-08",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "2x² = 32",
      "choices": [
        "x = −3 eller x = 5",
        "x = ±4√2",
        "x = ±5",
        "x = ±4"
      ],
      "correct": "x = ±4",
      "steps": [
        "2x² = 32",
        "x² = 16",
        "x = ±4"
      ],
      "hint": "Dela med 2 först.",
      "level": "mellan"
    },
    {
      "id": "enkel-09",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "3x² = 48",
      "choices": [
        "x = −3 eller x = 5",
        "x = ±4",
        "x = ±4√2",
        "x = ±5"
      ],
      "correct": "x = ±4",
      "steps": [
        "3x² = 48",
        "x² = 16",
        "x = ±4"
      ],
      "hint": "Dela med 3 först.",
      "level": "mellan"
    },
    {
      "id": "enkel-10",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "5x² − 45 = 0",
      "choices": [
        "x = −2 eller x = 4",
        "x = ±3√2",
        "x = ±4",
        "x = ±3"
      ],
      "correct": "x = ±3",
      "steps": [
        "5x² − 45 = 0",
        "5x² = 45",
        "x² = 9",
        "x = ±3"
      ],
      "hint": "Flytta termen och dela sedan.",
      "level": "mellan"
    },
    {
      "id": "enkel-11",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "(x − 2)² = 16",
      "choices": [
        "x = 2 eller x = 6",
        "x = −2",
        "x = −2 eller x = 6",
        "x = −6 eller x = 2"
      ],
      "correct": "x = −2 eller x = 6",
      "steps": [
        "(x − 2)² = 16",
        "x − 2 = ±4",
        "x = 2 + 4 = 6 eller x = 2 − 4 = −2",
        "Svar: x = −2 eller x = 6"
      ],
      "hint": "Ta ±roten först, och flytta sedan talet.",
      "level": "mellan"
    },
    {
      "id": "enkel-12",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "(x + 3)² = 25",
      "choices": [
        "x = −2 eller x = 8",
        "x = −8",
        "x = 2 eller x = 8",
        "x = −8 eller x = 2"
      ],
      "correct": "x = −8 eller x = 2",
      "steps": [
        "(x + 3)² = 25",
        "x + 3 = ±5",
        "x = −3 + 5 = 2 eller x = −3 − 5 = −8",
        "Svar: x = −8 eller x = 2"
      ],
      "hint": "Ta ±roten först, och flytta sedan talet.",
      "level": "mellan"
    },
    {
      "id": "enkel-13",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "(x − 5)² = 4",
      "choices": [
        "x = 3",
        "x = 3 eller x = 7",
        "x = −3 eller x = 7",
        "x = −7 eller x = −3"
      ],
      "correct": "x = 3 eller x = 7",
      "steps": [
        "(x − 5)² = 4",
        "x − 5 = ±2",
        "x = 7 eller x = 3",
        "Svar: x = 3 eller x = 7"
      ],
      "hint": "Ta ±roten först, och flytta sedan talet.",
      "level": "mellan"
    },
    {
      "id": "enkel-14",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "(x + 1)² = 9",
      "choices": [
        "x = −2 eller x = 4",
        "x = −4",
        "x = −4 eller x = 2",
        "x = 2 eller x = 4"
      ],
      "correct": "x = −4 eller x = 2",
      "steps": [
        "(x + 1)² = 9",
        "x + 1 = ±3",
        "x = 2 eller x = −4",
        "Svar: x = −4 eller x = 2"
      ],
      "hint": "Ta ±roten först, och flytta sedan talet.",
      "level": "mellan"
    },
    {
      "id": "enkel-15",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "2(x − 1)² = 18",
      "choices": [
        "x = 2 eller x = 4",
        "x = −2",
        "x = −2 eller x = 4",
        "x = −4 eller x = 2"
      ],
      "correct": "x = −2 eller x = 4",
      "steps": [
        "2(x − 1)² = 18",
        "(x − 1)² = 9",
        "x − 1 = ±3",
        "x = 4 eller x = −2",
        "Svar: x = −2 eller x = 4"
      ],
      "hint": "Ta ±roten först, och flytta sedan talet.",
      "level": "knepig"
    },
    {
      "id": "enkel-16",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "3(x + 2)² = 12",
      "choices": [
        "x = −4",
        "x = −4 eller x = 1",
        "x = −4 eller x = 0",
        "x = 0 eller x = 4"
      ],
      "correct": "x = −4 eller x = 0",
      "steps": [
        "3(x + 2)² = 12",
        "(x + 2)² = 4",
        "x + 2 = ±2",
        "x = 0 eller x = −4",
        "Svar: x = −4 eller x = 0"
      ],
      "hint": "Ta ±roten först, och flytta sedan talet.",
      "level": "knepig"
    },
    {
      "id": "enkel-17",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "(x − 4)² = 2",
      "choices": [
        "x = −4 ± √2",
        "x = ±√2",
        "x = 4 ± √2",
        "x = 4 ± √3"
      ],
      "correct": "x = 4 ± √2",
      "steps": [
        "(x − 4)² = 2",
        "x − 4 = ±√2",
        "x = 4 ± √2"
      ],
      "hint": "Roten ur 2 förenklas inte till ett heltal. Behåll ±.",
      "level": "knepig"
    },
    {
      "id": "enkel-18",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "x² − 5 = 0",
      "choices": [
        "x = 1 ± √5",
        "x = ±2√5",
        "x = ±√5",
        "x = ±√6"
      ],
      "correct": "x = ±√5",
      "steps": [
        "x² − 5 = 0",
        "x² = 5",
        "x = ±√5"
      ],
      "hint": "5 är inte en jämn kvadrat.",
      "level": "knepig"
    },
    {
      "id": "enkel-19",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "4x² = 12",
      "choices": [
        "x = 1 ± √3",
        "x = ±√3",
        "x = ±2√3",
        "x = ±√4"
      ],
      "correct": "x = ±√3",
      "steps": [
        "4x² = 12",
        "x² = 3",
        "x = ±√3"
      ],
      "hint": "Dela med 4 innan du drar roten.",
      "level": "knepig"
    },
    {
      "id": "enkel-20",
      "topic": "enkel",
      "prompt": "Lös ekvationen.",
      "equation": "x² + 7 = 3",
      "choices": [
        "x = ±√4",
        "x = 2",
        "x = ±2",
        "Inga reella lösningar"
      ],
      "correct": "Inga reella lösningar",
      "steps": [
        "x² + 7 = 3",
        "x² = 3 − 7",
        "x² = −4",
        "Inga reella lösningar"
      ],
      "hint": "Ett negativt tal under rottecknet ger ingen reell rot.",
      "level": "knepig"
    },
    {
      "id": "noll-01",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "(x − 3)(x + 2) = 0",
      "choices": [
        "x = 3",
        "x = −2 eller x = 3",
        "x = −3 eller x = −2",
        "x = −3 eller x = 2"
      ],
      "correct": "x = −2 eller x = 3",
      "steps": [
        "(x − 3)(x + 2) = 0",
        "x − 3 = 0 eller x + 2 = 0",
        "x = 3 eller x = −2",
        "Svar: x = −2 eller x = 3"
      ],
      "hint": "Sätt varje faktor lika med noll.",
      "level": "lätt"
    },
    {
      "id": "noll-02",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "(x + 5)(x − 1) = 0",
      "choices": [
        "x = −1 eller x = 5",
        "x = −5 eller x = −1",
        "x = −5 eller x = 1",
        "x = 1"
      ],
      "correct": "x = −5 eller x = 1",
      "steps": [
        "(x + 5)(x − 1) = 0",
        "x = −5 eller x = 1"
      ],
      "hint": "Varje parentes ger en rot.",
      "level": "lätt"
    },
    {
      "id": "noll-03",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "(x − 4)(x − 7) = 0",
      "choices": [
        "x = 7",
        "x = −7 eller x = −4",
        "x = −7 eller x = 4",
        "x = 4 eller x = 7"
      ],
      "correct": "x = 4 eller x = 7",
      "steps": [
        "(x − 4)(x − 7) = 0",
        "x = 4 eller x = 7"
      ],
      "hint": "Båda faktorerna innehåller minus. Rötterna blir positiva.",
      "level": "lätt"
    },
    {
      "id": "noll-04",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "(2x − 1)(x + 3) = 0",
      "choices": [
        "x = −3",
        "x = −1/2 eller x = 3",
        "x = 1/2 eller x = 3",
        "x = −3 eller x = 1/2"
      ],
      "correct": "x = −3 eller x = 1/2",
      "steps": [
        "(2x − 1)(x + 3) = 0",
        "2x − 1 = 0 ger x = 1/2",
        "x + 3 = 0 ger x = −3",
        "Svar: x = −3 eller x = 1/2"
      ],
      "hint": "I första faktorn delar du med 2.",
      "level": "lätt"
    },
    {
      "id": "noll-05",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "(x − 6)(x + 6) = 0",
      "choices": [
        "x = −5 eller x = 6",
        "x = 6",
        "x = −6 eller x = 6",
        "x = −7 eller x = 7"
      ],
      "correct": "x = −6 eller x = 6",
      "steps": [
        "(x − 6)(x + 6) = 0",
        "x = 6 eller x = −6",
        "Svar: x = −6 eller x = 6"
      ],
      "hint": "Konjugatparen ger två motsatta rötter.",
      "level": "lätt"
    },
    {
      "id": "noll-06",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "(3x + 6)(x − 2) = 0",
      "choices": [
        "x = 2",
        "x = −1 eller x = 2",
        "x = −3 eller x = 3",
        "x = −2 eller x = 2"
      ],
      "correct": "x = −2 eller x = 2",
      "steps": [
        "(3x + 6)(x − 2) = 0",
        "3x + 6 = 0 ger x = −2",
        "x − 2 = 0 ger x = 2",
        "Svar: x = −2 eller x = 2"
      ],
      "hint": "Dela 3x + 6 med 3 innan du läser av roten.",
      "level": "lätt"
    },
    {
      "id": "noll-07",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "(x + 4)² = 0",
      "choices": [
        "x = −4 (dubbelrot)",
        "x = 4",
        "x = −3",
        "x = 4 (dubbelrot)"
      ],
      "correct": "x = −4 (dubbelrot)",
      "steps": [
        "(x + 4)² = 0",
        "x + 4 = 0",
        "x = −4",
        "Samma rot kommer två gånger, alltså en dubbelrot.",
        "Svar: x = −4 (dubbelrot)"
      ],
      "hint": "En kvadrat som är noll har en dubbelrot.",
      "level": "lätt"
    },
    {
      "id": "noll-08",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "(2x + 8)(x − 5) = 0",
      "choices": [
        "x = 5",
        "x = −5 eller x = −4",
        "x = −5 eller x = 4",
        "x = −4 eller x = 5"
      ],
      "correct": "x = −4 eller x = 5",
      "steps": [
        "(2x + 8)(x − 5) = 0",
        "2x + 8 = 0 ger x = −4",
        "x = 5",
        "Svar: x = −4 eller x = 5"
      ],
      "hint": "Lös 2x + 8 = 0 genom att dela med 2.",
      "level": "mellan"
    },
    {
      "id": "noll-09",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "x² − 7x = 0",
      "choices": [
        "x = 7",
        "x = 1 eller x = 7",
        "x = −7 eller x = 0",
        "x = 0 eller x = 7"
      ],
      "correct": "x = 0 eller x = 7",
      "steps": [
        "x² − 7x = 0",
        "x(x − 7) = 0",
        "x = 0 eller x = 7"
      ],
      "hint": "Bryt ut gemensam faktor, och använd sedan nollprodukt.",
      "level": "mellan"
    },
    {
      "id": "noll-10",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "2x² + 10x = 0",
      "choices": [
        "x = −5 eller x = 0",
        "x = −5 eller x = 1",
        "x = 0 eller x = 5",
        "x = −5"
      ],
      "correct": "x = −5 eller x = 0",
      "steps": [
        "2x² + 10x = 0",
        "2x(x + 5) = 0",
        "x = 0 eller x = −5",
        "Svar: x = −5 eller x = 0"
      ],
      "hint": "Bryt ut gemensam faktor, och använd sedan nollprodukt.",
      "level": "mellan"
    },
    {
      "id": "noll-11",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "x² + 4x = 0",
      "choices": [
        "x = −4 eller x = 0",
        "x = −4 eller x = 1",
        "x = 0 eller x = 4",
        "x = −4"
      ],
      "correct": "x = −4 eller x = 0",
      "steps": [
        "x² + 4x = 0",
        "x(x + 4) = 0",
        "x = 0 eller x = −4",
        "Svar: x = −4 eller x = 0"
      ],
      "hint": "Bryt ut gemensam faktor, och använd sedan nollprodukt.",
      "level": "mellan"
    },
    {
      "id": "noll-12",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "3x² − 9x = 0",
      "choices": [
        "x = 0 eller x = 3",
        "x = −3 eller x = 0",
        "x = 1 eller x = 3",
        "x = 3"
      ],
      "correct": "x = 0 eller x = 3",
      "steps": [
        "3x² − 9x = 0",
        "3x(x − 3) = 0",
        "x = 0 eller x = 3"
      ],
      "hint": "Bryt ut gemensam faktor, och använd sedan nollprodukt.",
      "level": "mellan"
    },
    {
      "id": "noll-13",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "4x² + 8x = 0",
      "choices": [
        "x = −2",
        "x = 0 eller x = 2",
        "x = −2 eller x = 0",
        "x = −2 eller x = 1"
      ],
      "correct": "x = −2 eller x = 0",
      "steps": [
        "4x² + 8x = 0",
        "4x(x + 2) = 0",
        "x = 0 eller x = −2",
        "Svar: x = −2 eller x = 0"
      ],
      "hint": "Bryt ut gemensam faktor, och använd sedan nollprodukt.",
      "level": "mellan"
    },
    {
      "id": "noll-14",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "x² = 6x",
      "choices": [
        "x = 6",
        "x = 1 eller x = 6",
        "x = 0 eller x = 6",
        "x = −6 eller x = 0"
      ],
      "correct": "x = 0 eller x = 6",
      "steps": [
        "x² = 6x",
        "x² − 6x = 0",
        "x(x − 6) = 0",
        "x = 0 eller x = 6"
      ],
      "hint": "Bryt ut gemensam faktor, och använd sedan nollprodukt.",
      "level": "mellan"
    },
    {
      "id": "noll-15",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "x² − 5x = 6",
      "choices": [
        "x = 6",
        "x = −6 eller x = 1",
        "x = −1 eller x = 6",
        "x = −6 eller x = −1"
      ],
      "correct": "x = −1 eller x = 6",
      "steps": [
        "x² − 5x = 6",
        "x² − 5x − 6 = 0",
        "(x − 6)(x + 1) = 0",
        "x = 6 eller x = −1",
        "Svar: x = −1 eller x = 6"
      ],
      "hint": "Flytta 6 så att högerledet blir 0, och faktorisera sedan.",
      "level": "knepig"
    },
    {
      "id": "noll-16",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "x² + 2x = 15",
      "choices": [
        "x = −5 eller x = −3",
        "x = 3",
        "x = −5 eller x = 3",
        "x = −3 eller x = 5"
      ],
      "correct": "x = −5 eller x = 3",
      "steps": [
        "x² + 2x = 15",
        "x² + 2x − 15 = 0",
        "(x + 5)(x − 3) = 0",
        "x = −5 eller x = 3"
      ],
      "hint": "Högerledet måste vara 0 innan du faktoriserar.",
      "level": "knepig"
    },
    {
      "id": "noll-17",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "x² = 3x + 10",
      "choices": [
        "x = −5 eller x = 2",
        "x = 5",
        "x = −5 eller x = −2",
        "x = −2 eller x = 5"
      ],
      "correct": "x = −2 eller x = 5",
      "steps": [
        "x² = 3x + 10",
        "x² − 3x − 10 = 0",
        "(x − 5)(x + 2) = 0",
        "x = 5 eller x = −2",
        "Svar: x = −2 eller x = 5"
      ],
      "hint": "Flytta båda termerna från höger led.",
      "level": "knepig"
    },
    {
      "id": "noll-18",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "2x² + 6x = 20",
      "choices": [
        "x = −2 eller x = 5",
        "x = −5 eller x = −2",
        "x = −5 eller x = 2",
        "x = 2"
      ],
      "correct": "x = −5 eller x = 2",
      "steps": [
        "2x² + 6x = 20",
        "Dela med 2: x² + 3x = 10",
        "x² + 3x − 10 = 0",
        "(x + 5)(x − 2) = 0",
        "x = −5 eller x = 2"
      ],
      "hint": "En gemensam faktor 2 kan delas bort, eftersom högerledet också delas.",
      "level": "knepig"
    },
    {
      "id": "noll-19",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "(x − 1)(x + 2)(x − 5) = 0",
      "choices": [
        "x = −2, x = 1 eller x = 5",
        "x = −5, x = −1 eller x = 2",
        "x = −2 eller x = 1",
        "x = −1, x = 2 eller x = 5"
      ],
      "correct": "x = −2, x = 1 eller x = 5",
      "steps": [
        "(x − 1)(x + 2)(x − 5) = 0",
        "En produkt är noll när någon faktor är noll.",
        "x = 1, x = −2 eller x = 5",
        "Svar: x = −2, x = 1 eller x = 5"
      ],
      "hint": "Samma regel gäller för tre faktorer.",
      "level": "knepig"
    },
    {
      "id": "noll-20",
      "topic": "noll",
      "prompt": "Lös ekvationen.",
      "equation": "x(x − 3)(x + 4) = 0",
      "choices": [
        "x = −4 eller x = 0",
        "x = −4, x = 0 eller x = 3",
        "x = −3, x = 0 eller x = 4",
        "x = 0, x = 3 eller x = 4"
      ],
      "correct": "x = −4, x = 0 eller x = 3",
      "steps": [
        "x(x − 3)(x + 4) = 0",
        "x = 0, x − 3 = 0 eller x + 4 = 0",
        "x = −4, x = 0 eller x = 3"
      ],
      "hint": "x själv är en faktor och ger roten 0.",
      "level": "knepig"
    },
    {
      "id": "kvad-01",
      "topic": "kvad",
      "prompt": "Vilket tal adderas för att kvadratkomplettera?",
      "equation": "x² + 6x",
      "choices": [
        "36",
        "3",
        "9",
        "6"
      ],
      "correct": "9",
      "steps": [
        "x² + 6x",
        "Halvera koefficienten framför x: 6 / 2 = 3.",
        "Kvadrera: (3)² = 9."
      ],
      "hint": "Ta hälften av x-koefficienten och kvadrera.",
      "level": "lätt"
    },
    {
      "id": "kvad-02",
      "topic": "kvad",
      "prompt": "Vilket tal adderas för att kvadratkomplettera?",
      "equation": "x² − 10x",
      "choices": [
        "25",
        "100",
        "10",
        "5"
      ],
      "correct": "25",
      "steps": [
        "x² − 10x",
        "Halvera koefficienten framför x: −10 / 2 = −5.",
        "Kvadrera: (−5)² = 25."
      ],
      "hint": "Ta hälften av x-koefficienten och kvadrera.",
      "level": "lätt"
    },
    {
      "id": "kvad-03",
      "topic": "kvad",
      "prompt": "Vilket tal adderas för att kvadratkomplettera?",
      "equation": "x² + 8x",
      "choices": [
        "4",
        "64",
        "8",
        "16"
      ],
      "correct": "16",
      "steps": [
        "x² + 8x",
        "Halvera koefficienten framför x: 8 / 2 = 4.",
        "Kvadrera: (4)² = 16."
      ],
      "hint": "Ta hälften av x-koefficienten och kvadrera.",
      "level": "lätt"
    },
    {
      "id": "kvad-04",
      "topic": "kvad",
      "prompt": "Vilket tal adderas för att kvadratkomplettera?",
      "equation": "x² − 4x",
      "choices": [
        "2",
        "16",
        "8",
        "4"
      ],
      "correct": "4",
      "steps": [
        "x² − 4x",
        "Halvera koefficienten framför x: −4 / 2 = −2.",
        "Kvadrera: (−2)² = 4."
      ],
      "hint": "Ta hälften av x-koefficienten och kvadrera.",
      "level": "lätt"
    },
    {
      "id": "kvad-05",
      "topic": "kvad",
      "prompt": "Vilket tal adderas för att kvadratkomplettera?",
      "equation": "x² + 2x",
      "choices": [
        "2",
        "1",
        "4",
        "0"
      ],
      "correct": "1",
      "steps": [
        "x² + 2x",
        "Halvera koefficienten framför x: 2 / 2 = 1.",
        "Kvadrera: (1)² = 1."
      ],
      "hint": "Ta hälften av x-koefficienten och kvadrera.",
      "level": "lätt"
    },
    {
      "id": "kvad-06",
      "topic": "kvad",
      "prompt": "Lös med kvadratkomplettering.",
      "equation": "x² + 6x + 5 = 0",
      "choices": [
        "x = −5",
        "x = −1 eller x = 5",
        "x = 1 eller x = 5",
        "x = −5 eller x = −1"
      ],
      "correct": "x = −5 eller x = −1",
      "steps": [
        "x² + 6x + 5 = 0",
        "Flytta konstanttermen: x² + 6x = −5",
        "Addera (3)² = 9 på båda sidor.",
        "(x + 3)² = 4",
        "x + 3 = ±2",
        "x = −5 eller x = −1"
      ],
      "hint": "Halvera x-termen, kvadrera, och lägg till talet på båda sidor.",
      "level": "mellan"
    },
    {
      "id": "kvad-07",
      "topic": "kvad",
      "prompt": "Lös med kvadratkomplettering.",
      "equation": "x² − 4x − 5 = 0",
      "choices": [
        "x = −5 eller x = −1",
        "x = −5 eller x = 1",
        "x = 5",
        "x = −1 eller x = 5"
      ],
      "correct": "x = −1 eller x = 5",
      "steps": [
        "x² − 4x − 5 = 0",
        "Flytta konstanttermen: x² − 4x = 5",
        "Addera (−2)² = 4 på båda sidor.",
        "(x − 2)² = 9",
        "x − 2 = ±3",
        "x = −1 eller x = 5"
      ],
      "hint": "Halvera x-termen, kvadrera, och lägg till talet på båda sidor.",
      "level": "mellan"
    },
    {
      "id": "kvad-08",
      "topic": "kvad",
      "prompt": "Lös med kvadratkomplettering.",
      "equation": "x² + 8x + 12 = 0",
      "choices": [
        "x = 2 eller x = 6",
        "x = −6 eller x = −2",
        "x = −2",
        "x = −6 eller x = 2"
      ],
      "correct": "x = −6 eller x = −2",
      "steps": [
        "x² + 8x + 12 = 0",
        "Flytta konstanttermen: x² + 8x = −12",
        "Addera (4)² = 16 på båda sidor.",
        "(x + 4)² = 4",
        "x + 4 = ±2",
        "x = −6 eller x = −2"
      ],
      "hint": "Halvera x-termen, kvadrera, och lägg till talet på båda sidor.",
      "level": "mellan"
    },
    {
      "id": "kvad-09",
      "topic": "kvad",
      "prompt": "Lös med kvadratkomplettering.",
      "equation": "x² − 2x − 8 = 0",
      "choices": [
        "x = −2 eller x = 4",
        "x = −4 eller x = −2",
        "x = 4",
        "x = −4 eller x = 2"
      ],
      "correct": "x = −2 eller x = 4",
      "steps": [
        "x² − 2x − 8 = 0",
        "Flytta konstanttermen: x² − 2x = 8",
        "Addera (−1)² = 1 på båda sidor.",
        "(x − 1)² = 9",
        "x − 1 = ±3",
        "x = −2 eller x = 4"
      ],
      "hint": "Halvera x-termen, kvadrera, och lägg till talet på båda sidor.",
      "level": "mellan"
    },
    {
      "id": "kvad-10",
      "topic": "kvad",
      "prompt": "Lös med kvadratkomplettering.",
      "equation": "x² + 10x + 21 = 0",
      "choices": [
        "x = −7 eller x = −3",
        "x = −7 eller x = 3",
        "x = 3 eller x = 7",
        "x = −3"
      ],
      "correct": "x = −7 eller x = −3",
      "steps": [
        "x² + 10x + 21 = 0",
        "Flytta konstanttermen: x² + 10x = −21",
        "Addera (5)² = 25 på båda sidor.",
        "(x + 5)² = 4",
        "x + 5 = ±2",
        "x = −7 eller x = −3"
      ],
      "hint": "Halvera x-termen, kvadrera, och lägg till talet på båda sidor.",
      "level": "mellan"
    },
    {
      "id": "kvad-11",
      "topic": "kvad",
      "prompt": "Lös med kvadratkomplettering.",
      "equation": "x² − 6x + 7 = 0",
      "choices": [
        "x = −3 ± √2",
        "x = 3 ± √3",
        "x = 3 ± 2√2",
        "x = 3 ± √2"
      ],
      "correct": "x = 3 ± √2",
      "steps": [
        "x² − 6x + 7 = 0",
        "Flytta konstanttermen: x² − 6x = −7",
        "Addera 9 på båda sidor.",
        "(x − 3)² = 2",
        "x = 3 ± √2"
      ],
      "hint": "När högerledet inte är en jämn kvadrat lämnar du svaret med ± och rot.",
      "level": "knepig"
    },
    {
      "id": "kvad-12",
      "topic": "kvad",
      "prompt": "Lös med kvadratkomplettering.",
      "equation": "x² + 4x + 1 = 0",
      "choices": [
        "x = −2 ± √4",
        "x = 2 ± √3",
        "x = −2 ± √3",
        "x = −2 ± 2√3"
      ],
      "correct": "x = −2 ± √3",
      "steps": [
        "x² + 4x + 1 = 0",
        "Flytta konstanttermen: x² + 4x = −1",
        "Addera 4 på båda sidor.",
        "(x + 2)² = 3",
        "x = −2 ± √3"
      ],
      "hint": "När högerledet inte är en jämn kvadrat lämnar du svaret med ± och rot.",
      "level": "knepig"
    },
    {
      "id": "kvad-13",
      "topic": "kvad",
      "prompt": "Lös med kvadratkomplettering.",
      "equation": "x² − 8x + 13 = 0",
      "choices": [
        "x = −4 ± √3",
        "x = 4 ± √3",
        "x = 4 ± √4",
        "x = 4 ± 2√3"
      ],
      "correct": "x = 4 ± √3",
      "steps": [
        "x² − 8x + 13 = 0",
        "Flytta konstanttermen: x² − 8x = −13",
        "Addera 16 på båda sidor.",
        "(x − 4)² = 3",
        "x = 4 ± √3"
      ],
      "hint": "När högerledet inte är en jämn kvadrat lämnar du svaret med ± och rot.",
      "level": "knepig"
    },
    {
      "id": "kvad-14",
      "topic": "kvad",
      "prompt": "Lös med kvadratkomplettering.",
      "equation": "x² + 2x − 1 = 0",
      "choices": [
        "x = −1 ± √3",
        "x = −1 ± √2",
        "x = 1 ± √2",
        "x = −1 ± 2√2"
      ],
      "correct": "x = −1 ± √2",
      "steps": [
        "x² + 2x − 1 = 0",
        "Flytta konstanttermen: x² + 2x = 1",
        "Addera 1 på båda sidor.",
        "(x + 1)² = 2",
        "x = −1 ± √2"
      ],
      "hint": "När högerledet inte är en jämn kvadrat lämnar du svaret med ± och rot.",
      "level": "knepig"
    },
    {
      "id": "pq-01",
      "topic": "pq",
      "prompt": "Lös ekvationen med pq-formeln.",
      "equation": "x² − 4x + 3 = 0",
      "choices": [
        "x = 1",
        "x = 1 eller x = 3",
        "x = −1 eller x = 3",
        "x = −3 eller x = −1"
      ],
      "correct": "x = 1 eller x = 3",
      "steps": [
        "x² − 4x + 3 = 0",
        "p = −4 och q = 3.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−2)² − 3 = 4 − 3 = 1",
        "x = 2 ± 1",
        "x = 1 och x = 3",
        "Svar: x = 1 eller x = 3"
      ],
      "hint": "Läs av p och q när x²-termen har koefficient 1 och högerledet är 0.",
      "level": "lätt"
    },
    {
      "id": "pq-02",
      "topic": "pq",
      "prompt": "Lös ekvationen med pq-formeln.",
      "equation": "x² − 8x + 12 = 0",
      "choices": [
        "x = 2 eller x = 6",
        "x = −6 eller x = −2",
        "x = −2 eller x = 6",
        "x = 2"
      ],
      "correct": "x = 2 eller x = 6",
      "steps": [
        "x² − 8x + 12 = 0",
        "p = −8 och q = 12.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−4)² − 12 = 16 − 12 = 4",
        "x = 4 ± 2",
        "x = 2 och x = 6",
        "Svar: x = 2 eller x = 6"
      ],
      "hint": "Läs av p och q när x²-termen har koefficient 1 och högerledet är 0.",
      "level": "lätt"
    },
    {
      "id": "pq-03",
      "topic": "pq",
      "prompt": "Lös ekvationen med pq-formeln.",
      "equation": "x² − 4x − 5 = 0",
      "choices": [
        "x = 1 eller x = 5",
        "x = −5 eller x = 1",
        "x = −1",
        "x = −1 eller x = 5"
      ],
      "correct": "x = −1 eller x = 5",
      "steps": [
        "x² − 4x − 5 = 0",
        "p = −4 och q = −5.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−2)² − (−5) = 4 + 5 = 9",
        "x = 2 ± 3",
        "x = −1 och x = 5",
        "Svar: x = −1 eller x = 5"
      ],
      "hint": "Läs av p och q när x²-termen har koefficient 1 och högerledet är 0.",
      "level": "lätt"
    },
    {
      "id": "pq-04",
      "topic": "pq",
      "prompt": "Lös ekvationen med pq-formeln.",
      "equation": "x² + 4x + 3 = 0",
      "choices": [
        "x = 1 eller x = 3",
        "x = −3 eller x = −1",
        "x = −3",
        "x = −1 eller x = 3"
      ],
      "correct": "x = −3 eller x = −1",
      "steps": [
        "x² + 4x + 3 = 0",
        "p = 4 och q = 3.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (2)² − 3 = 4 − 3 = 1",
        "x = −2 ± 1",
        "x = −3 och x = −1",
        "Svar: x = −3 eller x = −1"
      ],
      "hint": "Läs av p och q när x²-termen har koefficient 1 och högerledet är 0.",
      "level": "lätt"
    },
    {
      "id": "pq-05",
      "topic": "pq",
      "prompt": "Lös ekvationen med pq-formeln.",
      "equation": "x² − 10x + 24 = 0",
      "choices": [
        "x = −6 eller x = −4",
        "x = −4 eller x = 6",
        "x = 4 eller x = 6",
        "x = 4"
      ],
      "correct": "x = 4 eller x = 6",
      "steps": [
        "x² − 10x + 24 = 0",
        "p = −10 och q = 24.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−5)² − 24 = 25 − 24 = 1",
        "x = 5 ± 1",
        "x = 4 och x = 6",
        "Svar: x = 4 eller x = 6"
      ],
      "hint": "Läs av p och q när x²-termen har koefficient 1 och högerledet är 0.",
      "level": "lätt"
    },
    {
      "id": "pq-06",
      "topic": "pq",
      "prompt": "Lös ekvationen med pq-formeln.",
      "equation": "x² + 2x − 15 = 0",
      "choices": [
        "x = −3 eller x = 5",
        "x = −5",
        "x = 3 eller x = 5",
        "x = −5 eller x = 3"
      ],
      "correct": "x = −5 eller x = 3",
      "steps": [
        "x² + 2x − 15 = 0",
        "p = 2 och q = −15.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (1)² − (−15) = 1 + 15 = 16",
        "x = −1 ± 4",
        "x = −5 och x = 3",
        "Svar: x = −5 eller x = 3"
      ],
      "hint": "Läs av p och q när x²-termen har koefficient 1 och högerledet är 0.",
      "level": "lätt"
    },
    {
      "id": "pq-07",
      "topic": "pq",
      "prompt": "Lös ekvationen med pq-formeln.",
      "equation": "x² − 4x − 12 = 0",
      "choices": [
        "x = 2 eller x = 6",
        "x = −6 eller x = 2",
        "x = −2",
        "x = −2 eller x = 6"
      ],
      "correct": "x = −2 eller x = 6",
      "steps": [
        "x² − 4x − 12 = 0",
        "p = −4 och q = −12.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−2)² − (−12) = 4 + 12 = 16",
        "x = 2 ± 4",
        "x = −2 och x = 6",
        "Svar: x = −2 eller x = 6"
      ],
      "hint": "Läs av p och q när x²-termen har koefficient 1 och högerledet är 0.",
      "level": "lätt"
    },
    {
      "id": "pq-08",
      "topic": "pq",
      "prompt": "Skriv om ekvationen och lös den.",
      "equation": "x² + 3x = 4",
      "choices": [
        "x = 1 eller x = 4",
        "x = −4",
        "x = −4 eller x = 1",
        "x = −1 eller x = 4"
      ],
      "correct": "x = −4 eller x = 1",
      "steps": [
        "x² + 3x = 4",
        "Flytta 4: x² + 3x − 4 = 0",
        "p = 3 och q = −4.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (3/2)² − (−4) = 9/4 + 4 = 9/4 + 16/4 = 25/4",
        "x = −3/2 ± 5/2",
        "x = −4 och x = 1",
        "Svar: x = −4 eller x = 1"
      ],
      "hint": "pq-formeln kräver att högerledet är 0.",
      "level": "lätt"
    },
    {
      "id": "pq-09",
      "topic": "pq",
      "prompt": "Skriv om ekvationen och lös den.",
      "equation": "x² + 5 = 6x",
      "choices": [
        "x = −1 eller x = 5",
        "x = 1",
        "x = 1 eller x = 5",
        "x = −5 eller x = −1"
      ],
      "correct": "x = 1 eller x = 5",
      "steps": [
        "x² + 5 = 6x",
        "Flytta 6x: x² − 6x + 5 = 0",
        "p = −6 och q = 5.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−3)² − 5 = 9 − 5 = 4",
        "x = 3 ± 2",
        "x = 1 och x = 5",
        "Svar: x = 1 eller x = 5"
      ],
      "hint": "pq-formeln kräver att högerledet är 0.",
      "level": "mellan"
    },
    {
      "id": "pq-10",
      "topic": "pq",
      "prompt": "Skriv om ekvationen och lös den.",
      "equation": "2x² = 8x + 10",
      "choices": [
        "x = −1 eller x = 5",
        "x = −5 eller x = 1",
        "x = 1 eller x = 5",
        "x = −1"
      ],
      "correct": "x = −1 eller x = 5",
      "steps": [
        "2x² = 8x + 10",
        "Flytta alla termer: 2x² − 8x − 10 = 0",
        "Dividera varje term med 2.",
        "x² − 4x − 5 = 0",
        "p = −4 och q = −5.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−2)² − (−5) = 4 + 5 = 9",
        "x = 2 ± 3",
        "x = −1 och x = 5",
        "Svar: x = −1 eller x = 5"
      ],
      "hint": "pq-formeln kräver att högerledet är 0.",
      "level": "mellan"
    },
    {
      "id": "pq-11",
      "topic": "pq",
      "prompt": "Lös ekvationen.",
      "equation": "x² − 6x + 9 = 0",
      "choices": [
        "x = −3",
        "x = −3 (dubbelrot)",
        "x = 4",
        "x = 3 (dubbelrot)"
      ],
      "correct": "x = 3 (dubbelrot)",
      "steps": [
        "x² − 6x + 9 = 0",
        "p = −6 och q = 9.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−3)² − 9 = 9 − 9 = 0",
        "Roten ur 0 är 0, så det finns en enda lösning: x = 3.",
        "Det kallas en dubbelrot.",
        "Svar: x = 3 (dubbelrot)"
      ],
      "hint": "Om uttrycket under rottecknet blir 0 finns en dubbelrot.",
      "level": "mellan"
    },
    {
      "id": "pq-12",
      "topic": "pq",
      "prompt": "Lös ekvationen.",
      "equation": "x² + 4x + 4 = 0",
      "choices": [
        "x = −1",
        "x = 2",
        "x = 2 (dubbelrot)",
        "x = −2 (dubbelrot)"
      ],
      "correct": "x = −2 (dubbelrot)",
      "steps": [
        "x² + 4x + 4 = 0",
        "p = 4 och q = 4.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (2)² − 4 = 4 − 4 = 0",
        "Roten ur 0 är 0, så det finns en enda lösning: x = −2.",
        "Det kallas en dubbelrot.",
        "Svar: x = −2 (dubbelrot)"
      ],
      "hint": "Om uttrycket under rottecknet blir 0 finns en dubbelrot.",
      "level": "mellan"
    },
    {
      "id": "pq-13",
      "topic": "pq",
      "prompt": "Lös ekvationen.",
      "equation": "x² − 10x + 25 = 0",
      "choices": [
        "x = −5",
        "x = 6",
        "x = −5 (dubbelrot)",
        "x = 5 (dubbelrot)"
      ],
      "correct": "x = 5 (dubbelrot)",
      "steps": [
        "x² − 10x + 25 = 0",
        "p = −10 och q = 25.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−5)² − 25 = 25 − 25 = 0",
        "Roten ur 0 är 0, så det finns en enda lösning: x = 5.",
        "Det kallas en dubbelrot.",
        "Svar: x = 5 (dubbelrot)"
      ],
      "hint": "Om uttrycket under rottecknet blir 0 finns en dubbelrot.",
      "level": "mellan"
    },
    {
      "id": "pq-14",
      "topic": "pq",
      "prompt": "Lös ekvationen.",
      "equation": "x² + 2x + 8 = 0",
      "choices": [
        "x = 1 ± √2",
        "Inga reella lösningar",
        "x = ±√3",
        "x = ±2√2"
      ],
      "correct": "Inga reella lösningar",
      "steps": [
        "x² + 2x + 8 = 0",
        "p = 2 och q = 8.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (1)² − 8 = 1 − 8 = −7",
        "Talet under rottecknet är negativt. Ekvationen saknar reella lösningar.",
        "Svar: Inga reella lösningar"
      ],
      "hint": "Negativt tal under rottecknet betyder inga reella rötter.",
      "level": "mellan"
    },
    {
      "id": "pq-15",
      "topic": "pq",
      "prompt": "Lös ekvationen.",
      "equation": "x² − 4x + 13 = 0",
      "choices": [
        "Inga reella lösningar",
        "x = 1 ± √2",
        "x = ±2√2",
        "x = ±√3"
      ],
      "correct": "Inga reella lösningar",
      "steps": [
        "x² − 4x + 13 = 0",
        "p = −4 och q = 13.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−2)² − 13 = 4 − 13 = −9",
        "Talet under rottecknet är negativt. Ekvationen saknar reella lösningar.",
        "Svar: Inga reella lösningar"
      ],
      "hint": "Negativt tal under rottecknet betyder inga reella rötter.",
      "level": "mellan"
    },
    {
      "id": "pq-16",
      "topic": "pq",
      "prompt": "Lös ekvationen.",
      "equation": "2x² − 8x + 6 = 0",
      "choices": [
        "x = −3 eller x = −1",
        "x = 1",
        "x = 1 eller x = 3",
        "x = −1 eller x = 3"
      ],
      "correct": "x = 1 eller x = 3",
      "steps": [
        "2x² − 8x + 6 = 0",
        "Dividera varje term med 2.",
        "x² − 4x + 3 = 0",
        "p = −4 och q = 3.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−2)² − 3 = 4 − 3 = 1",
        "x = 2 ± 1",
        "x = 1 och x = 3",
        "Svar: x = 1 eller x = 3"
      ],
      "hint": "Gör koefficienten framför x² till 1 innan du läser av p och q.",
      "level": "mellan"
    },
    {
      "id": "pq-17",
      "topic": "pq",
      "prompt": "Lös ekvationen.",
      "equation": "3x² + 6x − 24 = 0",
      "choices": [
        "x = −4 eller x = 2",
        "x = −4",
        "x = −2 eller x = 4",
        "x = 2 eller x = 4"
      ],
      "correct": "x = −4 eller x = 2",
      "steps": [
        "3x² + 6x − 24 = 0",
        "Dividera varje term med 3.",
        "x² + 2x − 8 = 0",
        "p = 2 och q = −8.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (1)² − (−8) = 1 + 8 = 9",
        "x = −1 ± 3",
        "x = −4 och x = 2",
        "Svar: x = −4 eller x = 2"
      ],
      "hint": "Gör koefficienten framför x² till 1 innan du läser av p och q.",
      "level": "knepig"
    },
    {
      "id": "pq-18",
      "topic": "pq",
      "prompt": "Lös ekvationen.",
      "equation": "−x² + 6x − 8 = 0",
      "choices": [
        "x = −2 eller x = 4",
        "x = 2 eller x = 4",
        "x = 2",
        "x = −4 eller x = −2"
      ],
      "correct": "x = 2 eller x = 4",
      "steps": [
        "−x² + 6x − 8 = 0",
        "Multiplicera båda led med −1 så att x² får positiv koefficient.",
        "x² − 6x + 8 = 0",
        "p = −6 och q = 8.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−3)² − 8 = 9 − 8 = 1",
        "x = 3 ± 1",
        "x = 2 och x = 4",
        "Svar: x = 2 eller x = 4"
      ],
      "hint": "Gör koefficienten framför x² till 1 innan du läser av p och q.",
      "level": "knepig"
    },
    {
      "id": "pq-19",
      "topic": "pq",
      "prompt": "Lös ekvationen.",
      "equation": "2x² − 12x + 10 = 0",
      "choices": [
        "x = −5 eller x = −1",
        "x = 1",
        "x = −1 eller x = 5",
        "x = 1 eller x = 5"
      ],
      "correct": "x = 1 eller x = 5",
      "steps": [
        "2x² − 12x + 10 = 0",
        "Dividera varje term med 2.",
        "x² − 6x + 5 = 0",
        "p = −6 och q = 5.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−3)² − 5 = 9 − 5 = 4",
        "x = 3 ± 2",
        "x = 1 och x = 5",
        "Svar: x = 1 eller x = 5"
      ],
      "hint": "Gör koefficienten framför x² till 1 innan du läser av p och q.",
      "level": "knepig"
    },
    {
      "id": "pq-20",
      "topic": "pq",
      "prompt": "Lös ekvationen exakt.",
      "equation": "x² − 2x − 1 = 0",
      "choices": [
        "x = 1 ± √3",
        "x = 1 ± √2",
        "x = 1 ± 2√2",
        "x = −1 ± √2"
      ],
      "correct": "x = 1 ± √2",
      "steps": [
        "x² − 2x − 1 = 0",
        "p = −2 och q = −1.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−1)² − (−1) = 1 + 1 = 2",
        "x = 1 ± √2"
      ],
      "hint": "Förenkla inte roten om talet under rottecknet inte är en jämn kvadrat.",
      "level": "knepig"
    },
    {
      "id": "pq-21",
      "topic": "pq",
      "prompt": "Lös ekvationen exakt.",
      "equation": "x² − 6x + 6 = 0",
      "choices": [
        "x = 3 ± √3",
        "x = 3 ± 2√3",
        "x = −3 ± √3",
        "x = 3 ± √4"
      ],
      "correct": "x = 3 ± √3",
      "steps": [
        "x² − 6x + 6 = 0",
        "p = −6 och q = 6.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (−3)² − 6 = 9 − 6 = 3",
        "x = 3 ± √3"
      ],
      "hint": "Förenkla inte roten om talet under rottecknet inte är en jämn kvadrat.",
      "level": "knepig"
    },
    {
      "id": "pq-22",
      "topic": "pq",
      "prompt": "Lös ekvationen exakt.",
      "equation": "x² + 2x − 4 = 0",
      "choices": [
        "x = 1 ± √5",
        "x = −1 ± √6",
        "x = −1 ± 2√5",
        "x = −1 ± √5"
      ],
      "correct": "x = −1 ± √5",
      "steps": [
        "x² + 2x − 4 = 0",
        "p = 2 och q = −4.",
        "x = −p/2 ± √((p/2)² − q)",
        "(p/2)² − q = (1)² − (−4) = 1 + 4 = 5",
        "x = −1 ± √5"
      ],
      "hint": "Förenkla inte roten om talet under rottecknet inte är en jämn kvadrat.",
      "level": "knepig"
    },
    {
      "id": "pq-23",
      "topic": "pq",
      "prompt": "Vilka värden har p och q när ekvationen står på pq-form?",
      "equation": "2x² + 8x − 10 = 0",
      "choices": [
        "p = 8 och q = −10",
        "p = 4 och q = 5",
        "p = −4 och q = −5",
        "p = 4 och q = −5"
      ],
      "correct": "p = 4 och q = −5",
      "steps": [
        "2x² + 8x − 10 = 0",
        "Dividera med 2.",
        "x² + 4x − 5 = 0",
        "p är talet framför x och q är konstanttermen.",
        "p = 4 och q = −5"
      ],
      "hint": "Dela så att x² är ensam, utan koefficient.",
      "level": "knepig"
    },
    {
      "id": "pq-24",
      "topic": "pq",
      "prompt": "Vilka värden har p och q när ekvationen står på pq-form?",
      "equation": "3x² − 12x + 9 = 0",
      "choices": [
        "p = −12 och q = 9",
        "p = 4 och q = 3",
        "p = −4 och q = −3",
        "p = −4 och q = 3"
      ],
      "correct": "p = −4 och q = 3",
      "steps": [
        "3x² − 12x + 9 = 0",
        "Dividera med 3.",
        "x² − 4x + 3 = 0",
        "p är talet framför x och q är konstanttermen.",
        "p = −4 och q = 3"
      ],
      "hint": "Dela så att x² är ensam, utan koefficient.",
      "level": "knepig"
    },
    {
      "id": "disk-01",
      "topic": "disk",
      "prompt": "Hur många reella lösningar har ekvationen?",
      "equation": "x² − 4x + 3 = 0",
      "choices": [
        "En reell rot (dubbelrot)",
        "Två olika reella rötter",
        "Inga reella rötter",
        "Oändligt många rötter"
      ],
      "correct": "Två olika reella rötter",
      "steps": [
        "x² − 4x + 3 = 0",
        "p = −4 och q = 3.",
        "(p/2)² − q = 4 − 3 = 1.",
        "1 är större än 0, alltså två olika reella rötter.",
        "Svar: Två olika reella rötter"
      ],
      "hint": "Räkna (p/2)² − q, eller b² − 4ac.",
      "level": "lätt"
    },
    {
      "id": "disk-02",
      "topic": "disk",
      "prompt": "Hur många reella lösningar har ekvationen?",
      "equation": "x² + 6x + 9 = 0",
      "choices": [
        "Två olika reella rötter",
        "Inga reella rötter",
        "En reell rot (dubbelrot)",
        "Oändligt många rötter"
      ],
      "correct": "En reell rot (dubbelrot)",
      "steps": [
        "x² + 6x + 9 = 0",
        "(p/2)² − q = 9 − 9 = 0.",
        "När diskriminanten är 0 finns en dubbelrot.",
        "Svar: En reell rot (dubbelrot)"
      ],
      "hint": "Räkna (p/2)² − q, eller b² − 4ac.",
      "level": "lätt"
    },
    {
      "id": "disk-03",
      "topic": "disk",
      "prompt": "Hur många reella lösningar har ekvationen?",
      "equation": "x² + 1 = 0",
      "choices": [
        "En reell rot (dubbelrot)",
        "Två olika reella rötter",
        "Oändligt många rötter",
        "Inga reella rötter"
      ],
      "correct": "Inga reella rötter",
      "steps": [
        "x² + 1 = 0",
        "p = 0 och q = 1.",
        "(p/2)² − q = −1.",
        "Negativ diskriminant ger inga reella rötter.",
        "Svar: Inga reella rötter"
      ],
      "hint": "Räkna (p/2)² − q, eller b² − 4ac.",
      "level": "lätt"
    },
    {
      "id": "disk-04",
      "topic": "disk",
      "prompt": "Hur många reella lösningar har ekvationen?",
      "equation": "x² − 9 = 0",
      "choices": [
        "Två olika reella rötter",
        "Inga reella rötter",
        "Oändligt många rötter",
        "En reell rot (dubbelrot)"
      ],
      "correct": "Två olika reella rötter",
      "steps": [
        "x² − 9 = 0",
        "q = −9.",
        "0 − (−9) = 9 > 0, alltså två reella rötter.",
        "Svar: Två olika reella rötter"
      ],
      "hint": "Räkna (p/2)² − q, eller b² − 4ac.",
      "level": "lätt"
    },
    {
      "id": "disk-05",
      "topic": "disk",
      "prompt": "Hur många reella lösningar har ekvationen?",
      "equation": "2x² + 2x + 5 = 0",
      "choices": [
        "En reell rot (dubbelrot)",
        "Två olika reella rötter",
        "Inga reella rötter",
        "Oändligt många rötter"
      ],
      "correct": "Inga reella rötter",
      "steps": [
        "2x² + 2x + 5 = 0",
        "b² − 4ac = 4 − 4·2·5 = 4 − 40 = −36.",
        "Diskriminanten är negativ.",
        "Svar: Inga reella rötter"
      ],
      "hint": "Räkna (p/2)² − q, eller b² − 4ac.",
      "level": "mellan"
    },
    {
      "id": "disk-06",
      "topic": "disk",
      "prompt": "Hur många reella lösningar har ekvationen?",
      "equation": "x² − 8x + 16 = 0",
      "choices": [
        "En reell rot (dubbelrot)",
        "Två olika reella rötter",
        "Oändligt många rötter",
        "Inga reella rötter"
      ],
      "correct": "En reell rot (dubbelrot)",
      "steps": [
        "x² − 8x + 16 = 0",
        "(−4)² − 16 = 16 − 16 = 0.",
        "En reell rot (dubbelrot)."
      ],
      "hint": "Räkna (p/2)² − q, eller b² − 4ac.",
      "level": "mellan"
    },
    {
      "id": "disk-07",
      "topic": "disk",
      "prompt": "Beräkna diskriminanten (p/2)² − q.",
      "equation": "x² − 6x + 5 = 0",
      "choices": [
        "14",
        "4",
        "31",
        "−4"
      ],
      "correct": "4",
      "steps": [
        "x² − 6x + 5 = 0",
        "p = −6 och q = 5.",
        "(−3)² − 5 = 9 − 5 = 4."
      ],
      "hint": "Halvera p innan du kvadrerar.",
      "level": "mellan"
    },
    {
      "id": "disk-08",
      "topic": "disk",
      "prompt": "Beräkna diskriminanten (p/2)² − q.",
      "equation": "x² + 4x + 4 = 0",
      "choices": [
        "4",
        "0",
        "8",
        "16"
      ],
      "correct": "0",
      "steps": [
        "p = 4 och q = 4.",
        "2² − 4 = 0."
      ],
      "hint": "Halvera p innan du kvadrerar.",
      "level": "knepig"
    },
    {
      "id": "disk-09",
      "topic": "disk",
      "prompt": "Beräkna diskriminanten (p/2)² − q.",
      "equation": "x² + 2x + 5 = 0",
      "choices": [
        "1",
        "4",
        "−4",
        "−6"
      ],
      "correct": "−4",
      "steps": [
        "p = 2 och q = 5.",
        "1² − 5 = −4."
      ],
      "hint": "Halvera p innan du kvadrerar.",
      "level": "knepig"
    },
    {
      "id": "disk-10",
      "topic": "disk",
      "prompt": "Beräkna diskriminanten (p/2)² − q.",
      "equation": "x² − 2x − 3 = 0",
      "choices": [
        "−2",
        "4",
        "1",
        "−4"
      ],
      "correct": "4",
      "steps": [
        "p = −2 och q = −3.",
        "1 − (−3) = 4."
      ],
      "hint": "Halvera p innan du kvadrerar.",
      "level": "knepig"
    },
    {
      "id": "funk-01",
      "topic": "funk",
      "prompt": "Bestäm symmetrilinjen.",
      "equation": "f(x) = x² − 6x + 5",
      "choices": [
        "x = −3",
        "x = 1",
        "x = 6",
        "x = 3"
      ],
      "correct": "x = 3",
      "steps": [
        "f(x) = x² − 6x + 5",
        "Symmetrilinjen är x = −b / (2a).",
        "a = 1 och b = −6.",
        "x = −(−6) / (2·1) = 3.",
        "x = 3"
      ],
      "hint": "x-koordinaten för extrempunkten är −b/(2a).",
      "level": "lätt"
    },
    {
      "id": "funk-02",
      "topic": "funk",
      "prompt": "Bestäm extrempunkten.",
      "equation": "f(x) = x² − 2x − 3",
      "choices": [
        "(−4, 1), minimipunkt",
        "(1, −4), minimipunkt",
        "(1, −4), maximipunkt",
        "(1, 4), minimipunkt"
      ],
      "correct": "(1, −4), minimipunkt",
      "steps": [
        "f(x) = x² − 2x − 3",
        "x = −b/(2a) = 1.",
        "y = f(1) = −4.",
        "Eftersom a > 0 är punkten en minimipunkt.",
        "(1, −4), minimipunkt"
      ],
      "hint": "Extrempunkten ligger på symmetrilinjen.",
      "level": "lätt"
    },
    {
      "id": "funk-03",
      "topic": "funk",
      "prompt": "Vilka är funktionens nollställen?",
      "equation": "f(x) = x² − 2x − 8",
      "choices": [
        "x = −4 eller x = 2",
        "x = −4 eller x = −2",
        "x = −2 eller x = 4",
        "x = 4"
      ],
      "correct": "x = −2 eller x = 4",
      "steps": [
        "f(x) = x² − 2x − 8",
        "Nollställena är lösningarna till f(x) = 0.",
        "x² − 2x − 8 = 0",
        "(x − 4)(x + 2) = 0",
        "x = −2 eller x = 4"
      ],
      "hint": "Sätt f(x) = 0 och lös andragradsekvationen.",
      "level": "lätt"
    },
    {
      "id": "funk-04",
      "topic": "funk",
      "prompt": "Vilket är funktionens största värde?",
      "equation": "f(x) = −x² + 4x",
      "choices": [
        "2",
        "0",
        "−4",
        "4"
      ],
      "correct": "4",
      "steps": [
        "f(x) = −x² + 4x",
        "a = −1 är negativt, så grafen har ett största värde.",
        "Värdet antas när x = 2.",
        "f(2) = 4."
      ],
      "hint": "Räkna ut y-värdet på symmetrilinjen.",
      "level": "lätt"
    },
    {
      "id": "funk-05",
      "topic": "funk",
      "prompt": "Bestäm symmetrilinjen.",
      "equation": "f(x) = x² + 4x + 3",
      "choices": [
        "x = −3",
        "x = 2",
        "x = −2",
        "x = −4"
      ],
      "correct": "x = −2",
      "steps": [
        "f(x) = x² + 4x + 3",
        "Symmetrilinjen är x = −b / (2a).",
        "a = 1 och b = 4.",
        "x = −(4) / (2·1) = −2.",
        "x = −2"
      ],
      "hint": "x-koordinaten för extrempunkten är −b/(2a).",
      "level": "lätt"
    },
    {
      "id": "funk-06",
      "topic": "funk",
      "prompt": "Bestäm extrempunkten.",
      "equation": "f(x) = 2x² − 8x + 6",
      "choices": [
        "(−2, 2), minimipunkt",
        "(2, −2), minimipunkt",
        "(2, 2), minimipunkt",
        "(2, −2), maximipunkt"
      ],
      "correct": "(2, −2), minimipunkt",
      "steps": [
        "f(x) = 2x² − 8x + 6",
        "x = −b/(2a) = 2.",
        "y = f(2) = −2.",
        "Eftersom a > 0 är punkten en minimipunkt.",
        "(2, −2), minimipunkt"
      ],
      "hint": "Extrempunkten ligger på symmetrilinjen.",
      "level": "lätt"
    },
    {
      "id": "funk-07",
      "topic": "funk",
      "prompt": "Vilka är funktionens nollställen?",
      "equation": "f(x) = −2x² + 4x + 6",
      "choices": [
        "x = −3 eller x = 1",
        "x = 3",
        "x = −1 eller x = 3",
        "x = −3 eller x = −1"
      ],
      "correct": "x = −1 eller x = 3",
      "steps": [
        "f(x) = −2x² + 4x + 6",
        "Nollställena är lösningarna till f(x) = 0.",
        "−2x² + 4x + 6 = 0",
        "Dividera med −2. Nollställena ändras inte: x² − 2x − 3 = 0",
        "(x − 3)(x + 1) = 0",
        "x = −1 eller x = 3"
      ],
      "hint": "Sätt f(x) = 0 och lös andragradsekvationen.",
      "level": "mellan"
    },
    {
      "id": "funk-08",
      "topic": "funk",
      "prompt": "Vilket är funktionens minsta värde?",
      "equation": "f(x) = x² − 10x + 16",
      "choices": [
        "−9",
        "9",
        "0",
        "5"
      ],
      "correct": "−9",
      "steps": [
        "f(x) = x² − 10x + 16",
        "a = 1 är positivt, så grafen har ett minsta värde.",
        "Värdet antas när x = 5.",
        "f(5) = −9."
      ],
      "hint": "Räkna ut y-värdet på symmetrilinjen.",
      "level": "mellan"
    },
    {
      "id": "funk-09",
      "topic": "funk",
      "prompt": "Bestäm symmetrilinjen.",
      "equation": "f(x) = x² + 2x − 8",
      "choices": [
        "x = −4",
        "x = −1",
        "x = −2",
        "x = 1"
      ],
      "correct": "x = −1",
      "steps": [
        "f(x) = x² + 2x − 8",
        "Symmetrilinjen är x = −b / (2a).",
        "a = 1 och b = 2.",
        "x = −(2) / (2·1) = −1.",
        "x = −1"
      ],
      "hint": "x-koordinaten för extrempunkten är −b/(2a).",
      "level": "mellan"
    },
    {
      "id": "funk-10",
      "topic": "funk",
      "prompt": "Bestäm extrempunkten.",
      "equation": "f(x) = −x² + 6x − 5",
      "choices": [
        "(3, 4), maximipunkt",
        "(3, −4), maximipunkt",
        "(3, 4), minimipunkt",
        "(4, 3), maximipunkt"
      ],
      "correct": "(3, 4), maximipunkt",
      "steps": [
        "f(x) = −x² + 6x − 5",
        "x = −b/(2a) = 3.",
        "y = f(3) = 4.",
        "Eftersom a \u003c 0 är punkten en maximipunkt.",
        "(3, 4), maximipunkt"
      ],
      "hint": "Extrempunkten ligger på symmetrilinjen.",
      "level": "mellan"
    },
    {
      "id": "funk-11",
      "topic": "funk",
      "prompt": "Vilka är funktionens nollställen?",
      "equation": "f(x) = x² − 6x",
      "choices": [
        "x = 0 eller x = 6",
        "x = 6",
        "x = 1 eller x = 6",
        "x = −6 eller x = 0"
      ],
      "correct": "x = 0 eller x = 6",
      "steps": [
        "f(x) = x² − 6x",
        "Nollställena är lösningarna till f(x) = 0.",
        "x² − 6x = 0",
        "x(x − 6) = 0",
        "x = 0 eller x = 6"
      ],
      "hint": "Sätt f(x) = 0 och lös andragradsekvationen.",
      "level": "mellan"
    },
    {
      "id": "funk-12",
      "topic": "funk",
      "prompt": "Vilket är funktionens minsta värde?",
      "equation": "f(x) = x² + 4x − 5",
      "choices": [
        "−9",
        "0",
        "9",
        "−2"
      ],
      "correct": "−9",
      "steps": [
        "f(x) = x² + 4x − 5",
        "a = 1 är positivt, så grafen har ett minsta värde.",
        "Värdet antas när x = −2.",
        "f(−2) = −9."
      ],
      "hint": "Räkna ut y-värdet på symmetrilinjen.",
      "level": "knepig"
    },
    {
      "id": "funk-13",
      "topic": "funk",
      "prompt": "Bestäm symmetrilinjen.",
      "equation": "f(x) = −x² + 4",
      "choices": [
        "x = 1",
        "x = 2",
        "x = −2",
        "x = 0"
      ],
      "correct": "x = 0",
      "steps": [
        "f(x) = −x² + 4",
        "Symmetrilinjen är x = −b / (2a).",
        "a = −1 och b = 0.",
        "x = −(0) / (2·−1) = 0.",
        "x = 0"
      ],
      "hint": "x-koordinaten för extrempunkten är −b/(2a).",
      "level": "knepig"
    },
    {
      "id": "funk-14",
      "topic": "funk",
      "prompt": "Bestäm extrempunkten.",
      "equation": "f(x) = 2x² − 8",
      "choices": [
        "(0, 8), minimipunkt",
        "(0, −8), maximipunkt",
        "(−8, 0), minimipunkt",
        "(0, −8), minimipunkt"
      ],
      "correct": "(0, −8), minimipunkt",
      "steps": [
        "f(x) = 2x² − 8",
        "x = −b/(2a) = 0.",
        "y = f(0) = −8.",
        "Eftersom a > 0 är punkten en minimipunkt.",
        "(0, −8), minimipunkt"
      ],
      "hint": "Extrempunkten ligger på symmetrilinjen.",
      "level": "knepig"
    },
    {
      "id": "funk-15",
      "topic": "funk",
      "prompt": "Vilka är funktionens nollställen?",
      "equation": "f(x) = x² − 10x + 24",
      "choices": [
        "x = 4 eller x = 6",
        "x = 6",
        "x = −6 eller x = −4",
        "x = −6 eller x = 4"
      ],
      "correct": "x = 4 eller x = 6",
      "steps": [
        "f(x) = x² − 10x + 24",
        "Nollställena är lösningarna till f(x) = 0.",
        "x² − 10x + 24 = 0",
        "(x − 6)(x − 4) = 0",
        "x = 4 eller x = 6"
      ],
      "hint": "Sätt f(x) = 0 och lös andragradsekvationen.",
      "level": "knepig"
    },
    {
      "id": "funk-16",
      "topic": "funk",
      "prompt": "Vilket är funktionens största värde?",
      "equation": "f(x) = −x² + 8x − 12",
      "choices": [
        "5",
        "4",
        "−4",
        "0"
      ],
      "correct": "4",
      "steps": [
        "f(x) = −x² + 8x − 12",
        "a = −1 är negativt, så grafen har ett största värde.",
        "Värdet antas när x = 4.",
        "f(4) = 4."
      ],
      "hint": "Räkna ut y-värdet på symmetrilinjen.",
      "level": "knepig"
    },
    {
      "id": "subst-01",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "y = 2x + 1\nx + y = 7",
      "choices": [
        "x = −2 och y = 5",
        "x = 2 och y = −5",
        "x = 2 och y = 5",
        "x = 5 och y = 2"
      ],
      "correct": "x = 2 och y = 5",
      "steps": [
        "y = 2x + 1",
        "x + y = 7",
        "Sätt in y = 2x + 1 i x + y = 7.",
        "x + (2x + 1) = 7",
        "3x + 1 = 7",
        "3x = 6",
        "x = 2",
        "Sätt tillbaka x i y = 2x + 1.",
        "y = 2·2 + 1 = 5",
        "Lösningen är x = 2 och y = 5."
      ],
      "hint": "Ersätt y i den andra ekvationen.",
      "level": "lätt"
    },
    {
      "id": "subst-02",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "y = x + 3\n2x + y = 6",
      "choices": [
        "x = 4 och y = 1",
        "x = −1 och y = 4",
        "x = 1 och y = 4",
        "x = 1 och y = −4"
      ],
      "correct": "x = 1 och y = 4",
      "steps": [
        "y = x + 3",
        "2x + y = 6",
        "Sätt in y = x + 3 i 2x + y = 6.",
        "2x + (x + 3) = 6",
        "3x + 3 = 6",
        "3x = 3",
        "x = 1",
        "Sätt tillbaka x i y = x + 3.",
        "y = 1 + 3 = 4",
        "Lösningen är x = 1 och y = 4."
      ],
      "hint": "Ersätt y i den andra ekvationen.",
      "level": "lätt"
    },
    {
      "id": "subst-03",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "y = −x + 4\nx + 2y = 5",
      "choices": [
        "x = 3 och y = −1",
        "x = 1 och y = 3",
        "x = 3 och y = 1",
        "x = −3 och y = 1"
      ],
      "correct": "x = 3 och y = 1",
      "steps": [
        "y = −x + 4",
        "x + 2y = 5",
        "Sätt in y = −x + 4 i x + 2y = 5.",
        "x + 2·(−x + 4) = 5",
        "−x + 8 = 5",
        "−x = −3",
        "x = 3",
        "Sätt tillbaka x i y = −x + 4.",
        "y = −3 + 4 = 1",
        "Lösningen är x = 3 och y = 1."
      ],
      "hint": "Ersätt y i den andra ekvationen.",
      "level": "lätt"
    },
    {
      "id": "subst-04",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "y = 2x + 3\n4x + y = 3",
      "choices": [
        "x = 0 och y = 3",
        "x = 1 och y = 3",
        "x = 3 och y = 0",
        "x = 0 och y = −3"
      ],
      "correct": "x = 0 och y = 3",
      "steps": [
        "y = 2x + 3",
        "4x + y = 3",
        "Sätt in y = 2x + 3 i 4x + y = 3.",
        "4x + (2x + 3) = 3",
        "6x + 3 = 3",
        "6x = 0",
        "x = 0",
        "Sätt tillbaka x i y = 2x + 3.",
        "y = 2·0 + 3 = 3",
        "Lösningen är x = 0 och y = 3."
      ],
      "hint": "Ersätt y i den andra ekvationen.",
      "level": "lätt"
    },
    {
      "id": "subst-05",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "y = x + 5\n3x + y = −3",
      "choices": [
        "x = 2 och y = 3",
        "x = −2 och y = 3",
        "x = −2 och y = −3",
        "x = 3 och y = −2"
      ],
      "correct": "x = −2 och y = 3",
      "steps": [
        "y = x + 5",
        "3x + y = −3",
        "Sätt in y = x + 5 i 3x + y = −3.",
        "3x + (x + 5) = −3",
        "4x + 5 = −3",
        "4x = −8",
        "x = −2",
        "Sätt tillbaka x i y = x + 5.",
        "y = −2 + 5 = 3",
        "Lösningen är x = −2 och y = 3."
      ],
      "hint": "Ersätt y i den andra ekvationen.",
      "level": "mellan"
    },
    {
      "id": "subst-06",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "y = 2\nx + y = 6",
      "choices": [
        "x = 4 och y = −2",
        "x = 2 och y = 4",
        "x = 4 och y = 2",
        "x = −4 och y = 2"
      ],
      "correct": "x = 4 och y = 2",
      "steps": [
        "y = 2",
        "x + y = 6",
        "Sätt in y = 2 i x + y = 6.",
        "x + (2) = 6",
        "x + 2 = 6",
        "x = 4",
        "Sätt tillbaka x i y = 2.",
        "y = 2",
        "Lösningen är x = 4 och y = 2."
      ],
      "hint": "Ersätt y i den andra ekvationen.",
      "level": "mellan"
    },
    {
      "id": "subst-07",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "y = x − 6\n2x + 3y = 7",
      "choices": [
        "x = −5 och y = −1",
        "x = 5 och y = 1",
        "x = −1 och y = 5",
        "x = 5 och y = −1"
      ],
      "correct": "x = 5 och y = −1",
      "steps": [
        "y = x − 6",
        "2x + 3y = 7",
        "Sätt in y = x − 6 i 2x + 3y = 7.",
        "2x + 3·(x − 6) = 7",
        "5x − 18 = 7",
        "5x = 25",
        "x = 5",
        "Sätt tillbaka x i y = x − 6.",
        "y = 5 − 6 = −1",
        "Lösningen är x = 5 och y = −1."
      ],
      "hint": "Ersätt y i den andra ekvationen.",
      "level": "mellan"
    },
    {
      "id": "subst-08",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "y = 2x\nx + y = −3",
      "choices": [
        "x = −1 och y = −2",
        "x = −2 och y = −1",
        "x = 1 och y = −2",
        "x = −1 och y = 2"
      ],
      "correct": "x = −1 och y = −2",
      "steps": [
        "y = 2x",
        "x + y = −3",
        "Sätt in y = 2x i x + y = −3.",
        "x + (2x) = −3",
        "3x = −3",
        "x = −1",
        "Sätt tillbaka x i y = 2x.",
        "y = 2·(−1) = −2",
        "Lösningen är x = −1 och y = −2."
      ],
      "hint": "Ersätt y i den andra ekvationen.",
      "level": "mellan"
    },
    {
      "id": "subst-09",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "x + y = 7\n2x − y = 2",
      "choices": [
        "x = 3 och y = 4",
        "x = 3 och y = −4",
        "x = −3 och y = 4",
        "x = 4 och y = 3"
      ],
      "correct": "x = 3 och y = 4",
      "steps": [
        "x + y = 7",
        "2x − y = 2",
        "Lös ut y ur x + y = 7.",
        "y = −x + 7",
        "Sätt in y = −x + 7 i 2x − y = 2.",
        "2x − (−x + 7) = 2",
        "3x − 7 = 2",
        "3x = 9",
        "x = 3",
        "Sätt tillbaka x i y = −x + 7.",
        "y = −3 + 7 = 4",
        "Lösningen är x = 3 och y = 4."
      ],
      "hint": "Välj den ekvation där y har koefficient 1 eller −1.",
      "level": "knepig"
    },
    {
      "id": "subst-10",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "x − y = 1\n2x + y = 11",
      "choices": [
        "x = 4 och y = −3",
        "x = 3 och y = 4",
        "x = 4 och y = 3",
        "x = −4 och y = 3"
      ],
      "correct": "x = 4 och y = 3",
      "steps": [
        "x − y = 1",
        "2x + y = 11",
        "Lös ut y ur x − y = 1.",
        "y = x − 1",
        "Sätt in y = x − 1 i 2x + y = 11.",
        "2x + (x − 1) = 11",
        "3x − 1 = 11",
        "3x = 12",
        "x = 4",
        "Sätt tillbaka x i y = x − 1.",
        "y = 4 − 1 = 3",
        "Lösningen är x = 4 och y = 3."
      ],
      "hint": "Välj den ekvation där y har koefficient 1 eller −1.",
      "level": "knepig"
    },
    {
      "id": "subst-11",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "x + y = 5\n2x + y = 9",
      "choices": [
        "x = 4 och y = 1",
        "x = 4 och y = −1",
        "x = −4 och y = 1",
        "x = 1 och y = 4"
      ],
      "correct": "x = 4 och y = 1",
      "steps": [
        "x + y = 5",
        "2x + y = 9",
        "Lös ut y ur x + y = 5.",
        "y = −x + 5",
        "Sätt in y = −x + 5 i 2x + y = 9.",
        "2x + (−x + 5) = 9",
        "x + 5 = 9",
        "x = 4",
        "Sätt tillbaka x i y = −x + 5.",
        "y = −4 + 5 = 1",
        "Lösningen är x = 4 och y = 1."
      ],
      "hint": "Välj den ekvation där y har koefficient 1 eller −1.",
      "level": "knepig"
    },
    {
      "id": "subst-12",
      "topic": "subst",
      "prompt": "Lös systemet med substitutionsmetoden.",
      "equation": "x + y = 2\n4x + y = −4",
      "choices": [
        "x = −2 och y = 4",
        "x = 4 och y = −2",
        "x = −2 och y = −4",
        "x = 2 och y = 4"
      ],
      "correct": "x = −2 och y = 4",
      "steps": [
        "x + y = 2",
        "4x + y = −4",
        "Lös ut y ur x + y = 2.",
        "y = −x + 2",
        "Sätt in y = −x + 2 i 4x + y = −4.",
        "4x + (−x + 2) = −4",
        "3x + 2 = −4",
        "3x = −6",
        "x = −2",
        "Sätt tillbaka x i y = −x + 2.",
        "y = −(−2) + 2 = 4",
        "Lösningen är x = −2 och y = 4."
      ],
      "hint": "Välj den ekvation där y har koefficient 1 eller −1.",
      "level": "knepig"
    },
    {
      "id": "add-01",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "2x + y = 8\n2x − y = 4",
      "choices": [
        "x = −3 och y = 2",
        "x = 3 och y = −2",
        "x = 3 och y = 2",
        "x = 2 och y = 3"
      ],
      "correct": "x = 3 och y = 2",
      "steps": [
        "2x + y = 8",
        "2x − y = 4",
        "Koefficienterna för y är motsatta. Addera ekvationerna ledvis.",
        "4x = 12",
        "x = 3",
        "Sätt in x = 3 i 2x + y = 8.",
        "2·3 + y = 8",
        "6 + y = 8",
        "y = 2",
        "Lösningen är x = 3 och y = 2."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "lätt"
    },
    {
      "id": "add-02",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "3x + 2y = 12\nx + 2y = 8",
      "choices": [
        "x = 2 och y = 3",
        "x = 2 och y = −3",
        "x = −2 och y = 3",
        "x = 3 och y = 2"
      ],
      "correct": "x = 2 och y = 3",
      "steps": [
        "3x + 2y = 12",
        "x + 2y = 8",
        "Koefficienterna för y är lika. Subtrahera den andra ekvationen från den första.",
        "2x = 4",
        "x = 2",
        "Sätt in x = 2 i 3x + 2y = 12.",
        "3·2 + 2y = 12",
        "6 + 2y = 12",
        "2y = 6",
        "y = 3",
        "Lösningen är x = 2 och y = 3."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "lätt"
    },
    {
      "id": "add-03",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "4x + y = 11\nx − y = 4",
      "choices": [
        "x = 3 och y = −1",
        "x = −1 och y = 3",
        "x = −3 och y = −1",
        "x = 3 och y = 1"
      ],
      "correct": "x = 3 och y = −1",
      "steps": [
        "4x + y = 11",
        "x − y = 4",
        "Koefficienterna för y är motsatta. Addera ekvationerna ledvis.",
        "5x = 15",
        "x = 3",
        "Sätt in x = 3 i 4x + y = 11.",
        "4·3 + y = 11",
        "12 + y = 11",
        "y = −1",
        "Lösningen är x = 3 och y = −1."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "lätt"
    },
    {
      "id": "add-04",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "−x + 2y = 8\nx + y = 7",
      "choices": [
        "x = 5 och y = 2",
        "x = 2 och y = 5",
        "x = −2 och y = 5",
        "x = 2 och y = −5"
      ],
      "correct": "x = 2 och y = 5",
      "steps": [
        "−x + 2y = 8",
        "x + y = 7",
        "Koefficienterna för x är motsatta. Addera ekvationerna ledvis.",
        "3y = 15",
        "y = 5",
        "Sätt in y = 5 i −x + 2y = 8.",
        "−x + 2·5 = 8",
        "−x + 10 = 8",
        "−x = −2",
        "x = 2",
        "Lösningen är x = 2 och y = 5."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "lätt"
    },
    {
      "id": "add-05",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "3x + y = 10\n2x + y = 7",
      "choices": [
        "x = 3 och y = −1",
        "x = 3 och y = 1",
        "x = −3 och y = 1",
        "x = 1 och y = 3"
      ],
      "correct": "x = 3 och y = 1",
      "steps": [
        "3x + y = 10",
        "2x + y = 7",
        "Koefficienterna för y är lika. Subtrahera den andra ekvationen från den första.",
        "x = 3",
        "Sätt in x = 3 i 3x + y = 10.",
        "3·3 + y = 10",
        "9 + y = 10",
        "y = 1",
        "Lösningen är x = 3 och y = 1."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "mellan"
    },
    {
      "id": "add-06",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "6x + 2y = 14\n3x + 2y = 11",
      "choices": [
        "x = 4 och y = 1",
        "x = 1 och y = −4",
        "x = 1 och y = 4",
        "x = −1 och y = 4"
      ],
      "correct": "x = 1 och y = 4",
      "steps": [
        "6x + 2y = 14",
        "3x + 2y = 11",
        "Koefficienterna för y är lika. Subtrahera den andra ekvationen från den första.",
        "3x = 3",
        "x = 1",
        "Sätt in x = 1 i 6x + 2y = 14.",
        "6·1 + 2y = 14",
        "6 + 2y = 14",
        "2y = 8",
        "y = 4",
        "Lösningen är x = 1 och y = 4."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "mellan"
    },
    {
      "id": "add-07",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "x + 4y = 18\nx + y = 6",
      "choices": [
        "x = 2 och y = −4",
        "x = 4 och y = 2",
        "x = 2 och y = 4",
        "x = −2 och y = 4"
      ],
      "correct": "x = 2 och y = 4",
      "steps": [
        "x + 4y = 18",
        "x + y = 6",
        "Koefficienterna för x är lika. Subtrahera den andra ekvationen från den första.",
        "3y = 12",
        "y = 4",
        "Sätt in y = 4 i x + 4y = 18.",
        "x + 4·4 = 18",
        "x + 16 = 18",
        "x = 2",
        "Lösningen är x = 2 och y = 4."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "mellan"
    },
    {
      "id": "add-08",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "3x + 4y = 24\n5x − 4y = 8",
      "choices": [
        "x = 4 och y = −3",
        "x = −4 och y = 3",
        "x = 4 och y = 3",
        "x = 3 och y = 4"
      ],
      "correct": "x = 4 och y = 3",
      "steps": [
        "3x + 4y = 24",
        "5x − 4y = 8",
        "Koefficienterna för y är motsatta. Addera ekvationerna ledvis.",
        "8x = 32",
        "x = 4",
        "Sätt in x = 4 i 3x + 4y = 24.",
        "3·4 + 4y = 24",
        "12 + 4y = 24",
        "4y = 12",
        "y = 3",
        "Lösningen är x = 4 och y = 3."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "knepig"
    },
    {
      "id": "add-09",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "2x + y = 11\nx − y = 4",
      "choices": [
        "x = −5 och y = 1",
        "x = 5 och y = 1",
        "x = 1 och y = 5",
        "x = 5 och y = −1"
      ],
      "correct": "x = 5 och y = 1",
      "steps": [
        "2x + y = 11",
        "x − y = 4",
        "Koefficienterna för y är motsatta. Addera ekvationerna ledvis.",
        "3x = 15",
        "x = 5",
        "Sätt in x = 5 i 2x + y = 11.",
        "2·5 + y = 11",
        "10 + y = 11",
        "y = 1",
        "Lösningen är x = 5 och y = 1."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "knepig"
    },
    {
      "id": "add-10",
      "topic": "add",
      "prompt": "Lös systemet med additionsmetoden.",
      "equation": "2x + y = 1\n−2x + 3y = 11",
      "choices": [
        "x = 3 och y = −1",
        "x = −1 och y = 3",
        "x = 1 och y = 3",
        "x = −1 och y = −3"
      ],
      "correct": "x = −1 och y = 3",
      "steps": [
        "2x + y = 1",
        "−2x + 3y = 11",
        "Koefficienterna för x är motsatta. Addera ekvationerna ledvis.",
        "4y = 12",
        "y = 3",
        "Sätt in y = 3 i 2x + y = 1.",
        "2x + 3 = 1",
        "2x = −2",
        "x = −1",
        "Lösningen är x = −1 och y = 3."
      ],
      "hint": "Gör koefficienterna för en variabel lika eller motsatta.",
      "level": "knepig"
    },
    {
      "id": "graf-01",
      "topic": "graf",
      "prompt": "Vilken är skärningspunkten?",
      "equation": "y = x + 1\ny = −x + 5",
      "choices": [
        "x = 2 och y = −3",
        "x = −2 och y = 3",
        "x = 3 och y = 2",
        "x = 2 och y = 3"
      ],
      "correct": "x = 2 och y = 3",
      "steps": [
        "y = x + 1",
        "y = −x + 5",
        "Grafiskt är lösningen den punkt där linjerna skär varandra.",
        "Algebraiskt sätter du högerleden lika.",
        "x + 1 = −x + 5",
        "2x = 4",
        "x = 2",
        "y = 3",
        "x = 2 och y = 3"
      ],
      "hint": "Läs av punkten där linjerna korsas, eller sätt y-värdena lika.",
      "graph": {
        "xmin": -1,
        "xmax": 6,
        "ymin": -1,
        "ymax": 6,
        "lines": [
          {
            "k": 1,
            "m": 1,
            "label": "y = x + 1"
          },
          {
            "k": -1,
            "m": 5,
            "label": "y = −x + 5"
          }
        ]
      },
      "level": "lätt"
    },
    {
      "id": "graf-02",
      "topic": "graf",
      "prompt": "Vilken är skärningspunkten?",
      "equation": "y = 2x + 1\ny = −x + 7",
      "choices": [
        "x = 2 och y = −5",
        "x = 5 och y = 2",
        "x = 2 och y = 5",
        "x = −2 och y = 5"
      ],
      "correct": "x = 2 och y = 5",
      "steps": [
        "y = 2x + 1",
        "y = −x + 7",
        "Grafiskt är lösningen den punkt där linjerna skär varandra.",
        "Algebraiskt sätter du högerleden lika.",
        "2x + 1 = −x + 7",
        "3x = 6",
        "x = 2",
        "y = 5",
        "x = 2 och y = 5"
      ],
      "hint": "Läs av punkten där linjerna korsas, eller sätt y-värdena lika.",
      "graph": {
        "xmin": -1,
        "xmax": 6,
        "ymin": -1,
        "ymax": 7,
        "lines": [
          {
            "k": 2,
            "m": 1,
            "label": "y = 2x + 1"
          },
          {
            "k": -1,
            "m": 7,
            "label": "y = −x + 7"
          }
        ]
      },
      "level": "lätt"
    },
    {
      "id": "graf-03",
      "topic": "graf",
      "prompt": "Vilken är skärningspunkten?",
      "equation": "y = x − 2\ny = 2",
      "choices": [
        "x = 4 och y = 2",
        "x = 4 och y = −2",
        "x = 2 och y = 4",
        "x = −4 och y = 2"
      ],
      "correct": "x = 4 och y = 2",
      "steps": [
        "y = x − 2",
        "y = 2",
        "Grafiskt är lösningen den punkt där linjerna skär varandra.",
        "Algebraiskt sätter du högerleden lika.",
        "x − 2 = 2",
        "x = 4",
        "y = 2",
        "x = 4 och y = 2"
      ],
      "hint": "Läs av punkten där linjerna korsas, eller sätt y-värdena lika.",
      "graph": {
        "xmin": -1,
        "xmax": 6,
        "ymin": -1,
        "ymax": 6,
        "lines": [
          {
            "k": 1,
            "m": -2,
            "label": "y = x − 2"
          },
          {
            "k": 0,
            "m": 2,
            "label": "y = 2"
          }
        ]
      },
      "level": "lätt"
    },
    {
      "id": "graf-04",
      "topic": "graf",
      "prompt": "Vilken är skärningspunkten?",
      "equation": "y = −2x + 4\ny = x + 1",
      "choices": [
        "x = −1 och y = 2",
        "x = 1 och y = −2",
        "x = 2 och y = 1",
        "x = 1 och y = 2"
      ],
      "correct": "x = 1 och y = 2",
      "steps": [
        "y = −2x + 4",
        "y = x + 1",
        "Grafiskt är lösningen den punkt där linjerna skär varandra.",
        "Algebraiskt sätter du högerleden lika.",
        "−2x + 4 = x + 1",
        "−3x = −3",
        "x = 1",
        "y = 2",
        "x = 1 och y = 2"
      ],
      "hint": "Läs av punkten där linjerna korsas, eller sätt y-värdena lika.",
      "graph": {
        "xmin": -1,
        "xmax": 5,
        "ymin": -1,
        "ymax": 6,
        "lines": [
          {
            "k": -2,
            "m": 4,
            "label": "y = −2x + 4"
          },
          {
            "k": 1,
            "m": 1,
            "label": "y = x + 1"
          }
        ]
      },
      "level": "mellan"
    },
    {
      "id": "graf-05",
      "topic": "graf",
      "prompt": "Hur många lösningar har systemet?",
      "equation": "y = 3x + 1\ny = 3x − 4",
      "choices": [
        "En lösning",
        "Oändligt många lösningar",
        "Ingen lösning",
        "Två lösningar"
      ],
      "correct": "Ingen lösning",
      "steps": [
        "y = 3x + 1",
        "y = 3x − 4",
        "Båda har k = 3, men m är 1 respektive −4.",
        "Parallella linjer som inte sammanfaller saknar skärning.",
        "Ingen lösning"
      ],
      "hint": "Jämför k-värde och m-värde.",
      "level": "mellan"
    },
    {
      "id": "graf-06",
      "topic": "graf",
      "prompt": "Hur många lösningar har systemet?",
      "equation": "y = −2x + 5\ny = x − 1",
      "choices": [
        "Oändligt många lösningar",
        "Ingen lösning",
        "Två lösningar",
        "En lösning"
      ],
      "correct": "En lösning",
      "steps": [
        "y = −2x + 5",
        "y = x − 1",
        "k-värdena är −2 och 1. Olika lutning ger precis en skärning.",
        "En lösning"
      ],
      "hint": "Jämför k-värde och m-värde.",
      "level": "mellan"
    },
    {
      "id": "graf-07",
      "topic": "graf",
      "prompt": "Hur många lösningar har systemet?",
      "equation": "y = x/2 + 2\n2y = x + 4",
      "choices": [
        "Två lösningar",
        "Ingen lösning",
        "En lösning",
        "Oändligt många lösningar"
      ],
      "correct": "Oändligt många lösningar",
      "steps": [
        "y = x/2 + 2",
        "2y = x + 4",
        "Dela den andra ekvationen med 2: y = x/2 + 2.",
        "Det är samma linje, så varje punkt på linjen är en lösning.",
        "Oändligt många lösningar"
      ],
      "hint": "Jämför k-värde och m-värde.",
      "level": "knepig"
    },
    {
      "id": "graf-08",
      "topic": "graf",
      "prompt": "Hur många lösningar har systemet?",
      "equation": "2x + y = 7\n4x + 2y = 10",
      "choices": [
        "Två lösningar",
        "En lösning",
        "Oändligt många lösningar",
        "Ingen lösning"
      ],
      "correct": "Ingen lösning",
      "steps": [
        "2x + y = 7 ger y = −2x + 7.",
        "4x + 2y = 10 ger, efter division med 2, y = −2x + 5.",
        "Samma lutning k = −2 men olika m. Linjerna är parallella.",
        "Ingen lösning"
      ],
      "hint": "Jämför k-värde och m-värde.",
      "level": "knepig"
    },
    {
      "id": "potens-01",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "x³ = 64",
      "choices": [
        "x = 4",
        "x = 8",
        "x = ±4",
        "x = −4"
      ],
      "correct": "x = 4",
      "steps": [
        "x³ = 64",
        "4³ = 64, och en kub har en reell rot.",
        "x = 4"
      ],
      "hint": "En udda rot har ett tecken, inte två.",
      "level": "lätt"
    },
    {
      "id": "potens-02",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "x³ = −27",
      "choices": [
        "x = ±3",
        "x = −9",
        "x = 3",
        "x = −3"
      ],
      "correct": "x = −3",
      "steps": [
        "x³ = −27",
        "(−3)³ = −27.",
        "x = −3"
      ],
      "hint": "Negativt tal under en udda rot ger en negativ rot.",
      "level": "lätt"
    },
    {
      "id": "potens-03",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "x⁴ = 81",
      "choices": [
        "x = ±9",
        "x = 9",
        "x = ±3",
        "x = 3"
      ],
      "correct": "x = ±3",
      "steps": [
        "x⁴ = 81",
        "3⁴ = 81 och (−3)⁴ = 81.",
        "x = ±3"
      ],
      "hint": "Jämn exponent ger två reella rötter när högerledet är positivt.",
      "level": "lätt"
    },
    {
      "id": "potens-04",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "2ˣ = 32",
      "choices": [
        "x = 5",
        "x = 6",
        "x = 16",
        "x = 4"
      ],
      "correct": "x = 5",
      "steps": [
        "2ˣ = 32",
        "32 = 2⁵.",
        "x = 5"
      ],
      "hint": "Skriv högerledet som en potens med samma bas.",
      "level": "lätt"
    },
    {
      "id": "potens-05",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "3ˣ = 81",
      "choices": [
        "x = 9",
        "x = 3",
        "x = 4",
        "x = 27"
      ],
      "correct": "x = 4",
      "steps": [
        "3ˣ = 81",
        "81 = 3⁴.",
        "x = 4"
      ],
      "hint": "Jämför exponenterna när baserna är lika.",
      "level": "mellan"
    },
    {
      "id": "potens-06",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "9ˣ = 27",
      "choices": [
        "x = 3/2",
        "x = 2",
        "x = 3",
        "x = 2/3"
      ],
      "correct": "x = 3/2",
      "steps": [
        "9ˣ = 27",
        "9 = 3² och 27 = 3³.",
        "(3²)ˣ = 3³",
        "2x = 3",
        "x = 3/2"
      ],
      "hint": "Gör om till samma bas innan du jämför exponenter.",
      "level": "mellan"
    },
    {
      "id": "potens-07",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "8ˣ = 4",
      "choices": [
        "x = 2",
        "x = 1/2",
        "x = 3/2",
        "x = 2/3"
      ],
      "correct": "x = 2/3",
      "steps": [
        "8ˣ = 4",
        "8 = 2³ och 4 = 2².",
        "3x = 2",
        "x = 2/3"
      ],
      "hint": "Både 8 och 4 är potenser av 2.",
      "level": "mellan"
    },
    {
      "id": "potens-08",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "4ˣ = 8",
      "choices": [
        "x = 4",
        "x = 2/3",
        "x = 3/2",
        "x = 2"
      ],
      "correct": "x = 3/2",
      "steps": [
        "4ˣ = 8",
        "4 = 2² och 8 = 2³.",
        "2x = 3",
        "x = 3/2"
      ],
      "hint": "Skriv båda leden med basen 2.",
      "level": "mellan"
    },
    {
      "id": "potens-09",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "27ˣ = 9",
      "choices": [
        "x = 3/2",
        "x = 3",
        "x = 9",
        "x = 2/3"
      ],
      "correct": "x = 2/3",
      "steps": [
        "27ˣ = 9",
        "27 = 3³ och 9 = 3².",
        "3x = 2",
        "x = 2/3"
      ],
      "hint": "Basen 3 räcker för båda sidor.",
      "level": "knepig"
    },
    {
      "id": "potens-10",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "5²ˣ = 125",
      "choices": [
        "x = 3",
        "x = 3/2",
        "x = 5",
        "x = 2/3"
      ],
      "correct": "x = 3/2",
      "steps": [
        "5²ˣ = 125",
        "125 = 5³.",
        "2x = 3",
        "x = 3/2"
      ],
      "hint": "Exponenten 2x ska bli lika med 3.",
      "level": "knepig"
    },
    {
      "id": "potens-11",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "2ˣ⁺¹ = 16",
      "choices": [
        "x = 3",
        "x = 5",
        "x = 8",
        "x = 4"
      ],
      "correct": "x = 3",
      "steps": [
        "2ˣ⁺¹ = 16",
        "16 = 2⁴.",
        "x + 1 = 4",
        "x = 3"
      ],
      "hint": "Hela exponenten x + 1 jämförs med 4.",
      "level": "knepig"
    },
    {
      "id": "potens-12",
      "topic": "potens",
      "prompt": "Lös ekvationen.",
      "equation": "4ˣ = 2ˣ⁺³",
      "choices": [
        "x = 1",
        "x = 6",
        "x = 3",
        "x = 2"
      ],
      "correct": "x = 3",
      "steps": [
        "4ˣ = 2ˣ⁺³",
        "4ˣ = (2²)ˣ = 2²ˣ.",
        "2x = x + 3",
        "x = 3"
      ],
      "hint": "Gör vänsterledet till en potens av 2.",
      "level": "knepig"
    },
    {
      "id": "expo-01",
      "topic": "expo",
      "prompt": "Lös ekvationen exakt.",
      "equation": "3ˣ = 10",
      "choices": [
        "x = lg 3 / 10",
        "x = lg 3",
        "x = 10 / 3",
        "x = 1 / lg 3"
      ],
      "correct": "x = 1 / lg 3",
      "steps": [
        "3ˣ = 10",
        "Ta lg av båda led: x·lg 3 = lg 10.",
        "lg 10 = 1.",
        "x = 1 / lg 3"
      ],
      "hint": "lg 10 är 1, därför blir nämnaren bara lg 3.",
      "level": "lätt"
    },
    {
      "id": "expo-02",
      "topic": "expo",
      "prompt": "Lös ekvationen exakt.",
      "equation": "2ˣ = 12",
      "choices": [
        "x = 6",
        "x = lg 2 / lg 12",
        "x = lg 12 / lg 2",
        "x = lg (12 − 2)"
      ],
      "correct": "x = lg 12 / lg 2",
      "steps": [
        "2ˣ = 12",
        "x·lg 2 = lg 12.",
        "x = lg 12 / lg 2"
      ],
      "hint": "Exponenten hamnar framför när du tar lg av en potens.",
      "level": "lätt"
    },
    {
      "id": "expo-03",
      "topic": "expo",
      "prompt": "Lös ekvationen exakt.",
      "equation": "7ˣ = 5",
      "choices": [
        "x = lg 7 / lg 5",
        "x = 5 / 7",
        "x = lg 35",
        "x = lg 5 / lg 7"
      ],
      "correct": "x = lg 5 / lg 7",
      "steps": [
        "7ˣ = 5",
        "x·lg 7 = lg 5.",
        "x = lg 5 / lg 7"
      ],
      "hint": "Basen hamnar i nämnaren.",
      "level": "mellan"
    },
    {
      "id": "expo-04",
      "topic": "expo",
      "prompt": "Hur många perioder krävs för att beloppet ska fördubblas? Svara exakt.",
      "equation": "1,08ˣ = 2",
      "choices": [
        "x = lg 1,08 / lg 2",
        "x = 1,08 / 2",
        "x = lg (2 · 1,08)",
        "x = lg 2 / lg 1,08"
      ],
      "correct": "x = lg 2 / lg 1,08",
      "steps": [
        "1,08ˣ = 2",
        "x·lg 1,08 = lg 2.",
        "x = lg 2 / lg 1,08"
      ],
      "hint": "Skriv fördubblingen som högerledet 2 innan du tar lg.",
      "level": "mellan"
    },
    {
      "id": "expo-05",
      "topic": "expo",
      "prompt": "Lös ekvationen exakt.",
      "equation": "200 · 1,05ˣ = 260",
      "choices": [
        "x = lg 1,3 / lg 1,05",
        "x = 1,3 / 1,05",
        "x = lg 1,6 / lg 1,05",
        "x = lg 1,05 / lg 1,3"
      ],
      "correct": "x = lg 1,3 / lg 1,05",
      "steps": [
        "200 · 1,05ˣ = 260",
        "Dela med 200: 1,05ˣ = 1,3.",
        "x = lg 1,3 / lg 1,05"
      ],
      "hint": "Dela bort startvärdet så att potensen står ensam.",
      "level": "knepig"
    },
    {
      "id": "expo-06",
      "topic": "expo",
      "prompt": "Lös ekvationen.",
      "equation": "4 · 5ˣ = 100",
      "choices": [
        "x = lg 100 / lg 5",
        "x = 2",
        "x = 20",
        "x = 25"
      ],
      "correct": "x = 2",
      "steps": [
        "4 · 5ˣ = 100",
        "5ˣ = 25",
        "25 = 5², så x = 2"
      ],
      "hint": "Dela med 4. Sedan räcker samma bas, utan lg.",
      "level": "knepig"
    },
    {
      "id": "till-01",
      "topic": "till",
      "prompt": "En rektangel är 4 cm längre än den är bred. Arean är 60 cm². Hur bred är den?",
      "equation": "x(x + 4) = 60",
      "choices": [
        "6 cm",
        "15 cm",
        "10 cm",
        "5 cm"
      ],
      "correct": "6 cm",
      "steps": [
        "Låt bredden vara x cm. Längden är x + 4.",
        "x(x + 4) = 60",
        "x² + 4x − 60 = 0",
        "(x + 10)(x − 6) = 0",
        "Bredden är positiv: x = 6.",
        "6 cm"
      ],
      "hint": "Arean är bredd gånger längd. Negativ rot duger inte som bredd.",
      "level": "lätt"
    },
    {
      "id": "till-02",
      "topic": "till",
      "prompt": "Summan av två tal är 13 och produkten är 40. Vilka är talen?",
      "equation": "t(13 − t) = 40",
      "choices": [
        "5 och 8",
        "4 och 9",
        "4 och 10",
        "−5 och −8"
      ],
      "correct": "5 och 8",
      "steps": [
        "Låt talen vara t och 13 − t.",
        "t(13 − t) = 40",
        "t² − 13t + 40 = 0",
        "(t − 5)(t − 8) = 0",
        "Talen är 5 och 8."
      ],
      "hint": "Om summan är 13 kan det andra talet skrivas 13 − t.",
      "level": "lätt"
    },
    {
      "id": "till-03",
      "topic": "till",
      "prompt": "En boll kastas uppåt. Höjden i meter är h(t) = −5t² + 20t, där t är sekunder efter kastet. När är bollen tillbaka på marken, förutom vid starten?",
      "equation": "−5t² + 20t = 0",
      "choices": [
        "Efter 4 sekunder",
        "Efter 5 sekunder",
        "Efter 20 sekunder",
        "Efter 2 sekunder"
      ],
      "correct": "Efter 4 sekunder",
      "steps": [
        "h(t) = 0",
        "−5t² + 20t = 0",
        "−5t(t − 4) = 0",
        "t = 0 eller t = 4.",
        "Starten är t = 0, så den är tillbaka efter 4 sekunder.",
        "Svar: Efter 4 sekunder"
      ],
      "hint": "Marken betyder höjden 0. Faktorisera.",
      "level": "lätt"
    },
    {
      "id": "till-04",
      "topic": "till",
      "prompt": "Två vuxenbiljetter och en barnbiljett kostar 180 kr. En vuxenbiljett och två barnbiljetter kostar 150 kr. Vad kostar en vuxenbiljett?",
      "equation": "2v + b = 180\nv + 2b = 150",
      "choices": [
        "90 kr",
        "70 kr",
        "60 kr",
        "40 kr"
      ],
      "correct": "70 kr",
      "steps": [
        "2v + b = 180",
        "v + 2b = 150",
        "Multiplicera den andra med 2: 2v + 4b = 300.",
        "Subtrahera den första: 3b = 120, så b = 40.",
        "2v + 40 = 180 ger v = 70.",
        "70 kr"
      ],
      "hint": "Två obekanta: ställ upp ett ekvationssystem.",
      "level": "mellan"
    },
    {
      "id": "till-05",
      "topic": "till",
      "prompt": "En kvadratisk rabatt har sidan x meter. Om sidan ökar med 2 meter ökar arean med 20 m². Hur lång är sidan nu?",
      "equation": "(x + 2)² = x² + 20",
      "choices": [
        "5 m",
        "2 m",
        "4 m",
        "10 m"
      ],
      "correct": "4 m",
      "steps": [
        "(x + 2)² = x² + 20",
        "x² + 4x + 4 = x² + 20",
        "4x + 4 = 20",
        "4x = 16",
        "x = 4",
        "4 m"
      ],
      "hint": "Utveckla (x + 2)² med kvadreringsregeln. x²-termerna tar ut varandra.",
      "level": "mellan"
    },
    {
      "id": "till-06",
      "topic": "till",
      "prompt": "Två positiva tal skiljer sig med 6, och deras produkt är 55. Vilket är det mindre talet?",
      "equation": "n(n + 6) = 55",
      "choices": [
        "−11",
        "5",
        "6",
        "11"
      ],
      "correct": "5",
      "steps": [
        "Låt det mindre talet vara n. Det större är n + 6.",
        "n(n + 6) = 55",
        "n² + 6n − 55 = 0",
        "(n + 11)(n − 5) = 0",
        "n = 5 eller n = −11.",
        "Det mindre positiva talet är 5."
      ],
      "hint": "Välj variabeln som det mindre talet, så blir det andra n + 6.",
      "level": "mellan"
    },
    {
      "id": "till-07",
      "topic": "till",
      "prompt": "Höjden i meter hos en boll är h(t) = −5t² + 20t. Efter hur lång tid är den som högst, och hur högt?",
      "equation": "h(t) = −5t² + 20t",
      "choices": [
        "Efter 5 s, på 20 m",
        "Efter 4 s, på 20 m",
        "Efter 2 s, på 40 m",
        "Efter 2 s, på 20 m"
      ],
      "correct": "Efter 2 s, på 20 m",
      "steps": [
        "h(t) = −5t² + 20t",
        "Symmetrilinjen är t = −20 / (2·(−5)) = 2.",
        "h(2) = −5·4 + 40 = 20.",
        "Efter 2 s, på 20 m"
      ],
      "hint": "Högsta punkten ligger på symmetrilinjen, eftersom a är negativt.",
      "level": "knepig"
    },
    {
      "id": "till-08",
      "topic": "till",
      "prompt": "En bakteriekultur fördubblas varje timme. Från början finns 250 bakterier. Efter hur många timmar finns 4 000?",
      "equation": "250 · 2ᵗ = 4000",
      "choices": [
        "4 timmar",
        "3 timmar",
        "8 timmar",
        "16 timmar"
      ],
      "correct": "4 timmar",
      "steps": [
        "250 · 2ᵗ = 4000",
        "2ᵗ = 16",
        "16 = 2⁴",
        "t = 4",
        "4 timmar"
      ],
      "hint": "Dela bort startantalet. Sen är det en potensekvation.",
      "level": "knepig"
    }
  ]
};
