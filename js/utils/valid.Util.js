export default {
  init: function(){

  }
}

export const formTypeObj=function(form_ref){
  var formObj = {}
  $(`${form_ref} :input`).each(function() {
      //console.log(this);
      if (!formObj[this.type]) {
          formObj[this.type] = [];
      }

      let maxlength=$(this).attr("maxlength");
      if(!maxlength){
        maxlength=$(this).data("maxlength");
      }

      formObj[this.type].push({
          name: this.name,
          value: this.value,
          id: this.id,
          maxlength: (maxlength)?maxlength:""
      })
  })

  return formObj;
}

export const checkAllTypes=function(formTypes){
  let validErrors=0;
  let textResults="";
  let emailResults="";
  let telResults="";
  let radioResults="";
  let selectOneResults="";

  //console.log(formTypes);

  if (typeof formTypes.text !=="undefined") {
    textResults=validateText(formTypes.text);
    validErrors=validErrors+textResults.errors;
  }

  if (typeof formTypes.email !=="undefined") {
    emailResults=validateEmail(formTypes.email);
    validErrors=validErrors+emailResults.errors;
  }

  if (typeof formTypes.tel !=="undefined") {
    telResults=validateTel(formTypes.tel);
    validErrors=validErrors+telResults.errors;
  }

  if(typeof formTypes.radio !=="undefined"){
    //console.log(typeof formTypes.radio);
    radioResults=validateRadio(formTypes.radio);
    validErrors=validErrors+radioResults.errors;
  }

  if(typeof formTypes['select-one'] !=="undefined"){
    //console.log(typeof formTypes['select-one']);
    selectOneResults=validateSelectOne(formTypes['select-one']);
    validErrors=validErrors+selectOneResults.errors;
  }

  //validateSelectOne

  return {
    text: textResults,
    email: emailResults,
    tel: telResults,
    radio: radioResults,
    errors: validErrors
  };
}

export var validateText=function(elements){
  let errors=0;
  for (var i = 0; i < elements.length; i++) {
    let input_string=elements[i].value;
    //Only validate on populated strings:
    if(input_string!=""){
      if (!input_string.match(/^[0-9a-zA-Záéíóú¿¡äëïöüñÿÄËÏÖÜŸ -.#',&()\/]+$/)){
        errors++;
        elements[i].error="Invalid characters. Please only enter alphanumeric characters.";
        $(`#${elements[i].id}-message`).html(elements[i].error);
      }
    }
    let maxlength=elements[i].maxlength;
    if (maxlength>0 && input_string.length>maxlength) {
      errors++;
      elements[i].error="Entry exceeds the accepted character limit.";
      $(`#${elements[i].id}-message`).html(elements[i].error);
    }
  }
  return { elements, errors };
}

export var validateTel=function(elements){
  let errors=0;
  for (var i = 0; i < elements.length; i++) {
    let input_string=elements[i].value;
    if (!input_string.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)){
      errors++;
      elements[i].error="Invalid Telephone Number. Please enter a valid telephone number.";
      $(`#${elements[i].id}-message`).html(elements[i].error);
    }
  }
  return { elements, errors };
}

export var validateEmail=function(elements){
  let errors=0;
  for (var i = 0; i < elements.length; i++) {
    let input_string=elements[i].value;
    //Source: https://emailregex.com/
    if (!input_string.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      errors++;
      elements[i].error="Invalid Email. Please enter a valid email address.";
      $(`#${elements[i].id}-message`).html(elements[i].error);
    }
  }
  return { elements, errors };
}

export var validateRadio=function(elements){
  let errors=0;
  for (var i = 0; i < elements.length; i++) {
    let input_string=elements[i].value;
    if (!input_string.match(/^[a-zA-Z ]+$/)){
      errors++;
      elements[i].error="Invalid radio value. ";
      $(`#${elements[i].id}-message`).html(elements[i].error);
    }
    let maxlength=elements[i].maxlength;
    if (maxlength>0 && input_string.length>maxlength) {
      errors++;
      elements[i].error="Invalid radio value length.";
      $(`#${elements[i].id}-message`).html(elements[i].error);
    }
  }
  return { elements, errors };
}

export var validateSelectOne=function(elements){
  let errors=0;
  for (var i = 0; i < elements.length; i++) {
    let input_string=elements[i].value;
    if (!input_string.match(/^[a-zA-Z ]+$/)){
      errors++;
      elements[i].error="Invalid select value. ";
      $(`#${elements[i].id}-message`).html(elements[i].error);
    }
    let maxlength=elements[i].maxlength;
    if (maxlength>0 && input_string.length>maxlength) {
      errors++;
      elements[i].error="Invalid select value length.";
      $(`#${elements[i].id}-message`).html(elements[i].error);
    }
  }
  return { elements, errors };
}
