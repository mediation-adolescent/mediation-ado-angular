export const questions = [
  {
    question: "Dans quelle situation familiale vis tu ?",
    id: 0,
    responses: [
      {
        response: "Mes parents sont en cours de divorce",
        points: { mediation: 80, counsel: 0, therapy: 0 },
        checked: false
      },
      {
        response: "Mes parents se sont séparé ou ont divorcé",
        points: { mediation: 80, counsel: 0, therapy: 0 },
        checked: false
      },
      {
        response: "Mes parents habitent et sont encore ensemble",
        points: { mediation: 0, counsel: 10, therapy: 10 },
        checked: false
      }
    ]
  },
  {
    question: "Comment se présente la communication entre toi et tes parents ?",
    id: 1,
    responses: [
      {
        response: "Communication difficile",
        points: { mediation: 0, counsel: 10, therapy: 10 },
        checked: false
      },
      {
        response: "Communication inexistante",
        points: { mediation: 0, counsel: 10, therapy: 10 },
        checked: false
      },
      {
        response: "Communication violente et/ou violence physique",
        points: { mediation: 0, counsel: 0, therapy: 20 },
        checked: false
      }
    ]
  },
  {
    question: "A quel niveau si situe le conflit entre toi et tes parents ?",
    id: 2,
    responses: [
      {
        response: "Conflit intense et/ou violent",
        points: { mediation: 0, counsel: 0, therapy: 20 },
        checked: false
      },
      {
        response: "Conflit modéré",
        points: { mediation: 0, counsel: 20, therapy: 0 },
        checked: false
      }
    ]
  },
  {
    question:
      "Depuis que tu es en conflit qu'est ce qui a changé dans ton comportement ?",
    id: 3,
    responses: [
      {
        response: "Absentéisme scolaire, désobéissance régulière",
        points: { mediation: 0, counsel: 10, therapy: 10 },
        checked: false
      },
      {
        response:
          "Dépression, trouble de l'alimentation, formes de délinquance",
        points: { mediation: 0, counsel: 0, therapy: 20 },
        checked: false
      },
      {
        response: "Auto destruction, prostitution, alcoolisme grave",
        points: { mediation: 0, counsel: 0, therapy: 20 },
        checked: false
      },
      {
        response: "Rien de grave comme cité dans ces exemples",
        points: { mediation: 0, counsel: 20, therapy: 0 },
        checked: false
      }
    ]
  },
  {
    question: "Depuis quand dure ce conflit ?",
    id: 4,
    responses: [
      {
        response: "Des années",
        points: { mediation: 0, counsel: 0, therapy: 20 },
        checked: false
      },
      {
        response: "Plusieurs mois",
        points: { mediation: 0, counsel: 10, therapy: 10 },
        checked: false
      },
      {
        response: "Des semaines",
        points: { mediation: 0, counsel: 20, therapy: 10 },
        checked: false
      }
    ]
  }
];
