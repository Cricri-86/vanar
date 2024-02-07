function onCodeWrite(){
   let value = inputCode.value.split('{')
   let selector = value[0]
   let styles = value[1]
   let element = screenContainer.querySelector(selector)
   if(element === null){
      console.log("Your selector didn't work")
   } else {
      if(styles !== undefined){
            element.style = styles.replace('}','')
      } else
      console.log('your selector did work!')
   }
}
