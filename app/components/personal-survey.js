import Component from '@ember/component'
import Survey from 'survey-knockout'

export default Component.extend({
  /** Dialog descriptions according to SurveyJS library.
   ** Additional field: askEachSession, which tells the app to ask the question each time*/
  surveyDialogs: [ 
    {
      title: "¿Nos ayudás?",
      logo: "imagenes/surveyLogoCoty.png",
      pages: [{ name: "askingHelp", questions: [
        { type: "html", name: "askingHelp", html: "<p>¡Hola! ¿Nos ayudás a mejorar Pilas Bloques?</p><p>Te vamos a hacer preguntas cortitas.</p><p>¡Contestalas cuando quieras!</p>" }
      ]}]
    },
    {
      title: "Soft Login",
      pages: [{ name: "softLogin", questions: [
        { type: "imagepicker", 
          name: "avatar", 
          title: "¿Qué personaje de Pilas Bloques te gusta?", 
          showLabel: true, 
          colCount: 4,
          imageHeight: 75,
          imageWidth: 75,
          defaultValue: "Lita",  // TODO: change defaultValue taking it from localStorage 
          choices: [
            {value: "Coty", imageLink: "imagenes/surveyLogoCoty.png"}, // TODO: replace by more and better avatars
            {value: "Lita", imageLink: "imagenes/surveyLogoLita.png"}, 
            {value: "Heroína", imageLink: "imagenes/surveyLogoHeroin.png"}, 
            {value: "Alien", imageLink: "imagenes/surveyLogoAlien.png"}]
        },
        { type: "text", isRequired: true, name: "nickname", title: "¿Cómo es tu apodo?", defaultValue: "Ludmila"} // TODO: change defaultValue taking it from localStorage 
      ]}]
    },
    { title: "Edad y Género",
      logo: "imagenes/surveyLogoLita.png",
      pages: [{ name:"ageAndGender", questions: [ 
            { type: "dropdown", choices: [ 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, "18 o más" ], isRequired: true, name: "age", title: "¿Cuántos años tenés?" },
            { type: "radiogroup", choices: ["Mujer", "Varón", "Otro"], isRequired: true, name: "gender", title: "¿Cuál es tu género?", visibleIf: "{age} != undefined" }
          ]
        }]
    },
    { title:  "Escuela y Provincia", 
      logo: "imagenes/surveyLogoAlien.png",
      pages: [{ name:"schoolAndProvince", questions: [ 
            { type: "dropdown", choices: ['Ciudad Autónoma de Buenos Aires (CABA)', 'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego, Antártida e Islas del Atlántico Sur', 'Tucumán', 'No estoy en Argentina'], isRequired: true, name: "province", title: "¿En qué provincia vivís?" },
            { type: "radiogroup", choices: ["Pública", "Parroquial", "Privada"], isRequired: true, name: "gender", title: "¿A qué tipo de escuela vas?", visibleIf: "{province} != undefined" }
          ]
        }]
    },
    { title:  "Clase o Tarea",
      logo: "imagenes/surveyLogoHeroin.png",
      pages: [{ name:"classOrHomework", questions: [ 
            { type: "radiogroup", choices: ["Sí", "No"], isRequired: true, name: "isOnSchoolTime", title: "¿Estás en horario escolar?" },
            { type: "radiogroup", choices: ["Sí, estoy haciendo la tarea", "No"], isRequired: true, name: "isDoingHomework", title: "¿Estás haciendo la tarea?", visibleIf: "{isOnSchoolTime} = 'No'" }
          ]
        }],
      askEachSession: true
    },
    { title:  "Escuela y Compañía",
      logo: "imagenes/surveyLogoCoty.png",
      pages: [{ name:"schoolAndCompany", questions: [ 
            { type: "radiogroup", choices: ["Sí", "No"], isRequired: true, name: "isAtSchool", title: "¿Estás físicamente en la escuela?" },
            { type: "text", isRequired: true, name: "nickname", title: "¿Cómo es tu apodo?", visibleIf: "{isAtSchool} = 'Sí'" },
            { type: "radiogroup", choices: ["Estoy con una adulta o adulto", "Estoy con una compañera o compañero", "No me está ayudando nadie"], isRequired: true, name: "help", title: "¿Te está ayudando alguien?", visibleIf: "{isAtSchool} = 'No'"}
          ]
        }],
      askEachSession: true
    }
  ],

  didInsertElement() {
    this.showNextDialog()
  },

  showSurveyDialog(surveyDialog) {
    if (window.surveyWindow) return 0 // don't create other surveyWindow if it exists.
    Survey.StylesManager.applyTheme("winterstone")
    window.surveyWindow = new Survey.SurveyWindow(surveyDialog)
    window.surveyWindow.isExpanded = true
    window.surveyWindow.survey.locale = 'es'
    window.surveyWindow.survey.showQuestionNumbers = 'off'
    window.surveyWindow.survey.logoHeight = 75
    window.surveyWindow.survey.logoWidth = 75
    window.surveyWindow.survey.logoPosition = 'top'
    window.surveyWindow.show()
    window.surveyWindow.survey.onComplete.add(survey =>{ console.log(survey.data); this.markCurrentDialogAsAnswered() }) // TODO: replace by call to backend
  },

  showNextDialog() {
    if (this.nextDialog()) this.showSurveyDialog(this.nextDialog())
  },

  markCurrentDialogAsAnswered(){
    let storage = this.nextDialog().askEachSession ? sessionStorage : localStorage
    // adding "," only if its not the first title answered
    let titlesAnswered = storage.getItem('titlesAnswered') ? storage.getItem('titlesAnswered') + "," : ""
    storage.setItem('titlesAnswered', titlesAnswered + this.nextDialog().title)
    window.surveyWindow = undefined
  },

  nextDialog() { return this.dialogsNotAnswered()[0]},
  dialogsNotAnswered() { return this.surveyDialogs.filter(surveyDialog => !this.wasAnswered(localStorage, surveyDialog) && !this.wasAnswered(sessionStorage, surveyDialog))},
  wasAnswered(storage, surveyDialog) { return storage.getItem('titlesAnswered') && storage.getItem('titlesAnswered').split(',').includes(surveyDialog.title)}

});