##  JS / functional programming

    > named block of code
    >reuse the code

      call
        |  
    +---v--checkFullName(fullName)----------------------------------------------------------------------------------------------+
    |                                                                                                                           |
    | inner flow                                                                                                                |
    |   |                                                                                                                       |
    |   + fullName.startsWith(" ") || fullName.endsWith(" ") ---  IF --->  console.error("Incorrect spelling!")                 |
    |                                                                                                                           |
    |   |<-------------------------------------------------------ELSE                                                           |
    |   |                                                                                                                       |
    |   |                                                                                                                       |
    |   +  let fragments = fullName.split(" ")                                                                                  |
    |   |                                                                                                                       |
    |   + fragments.length != 2   ---  IF --->  console.error("Incorrect spelling!")                                            |
    |                                                                                                                           |
    |   |<----------------------------ELSE                                                                                      |
    |   |                                                                                                                       |
    |   +  fragments[0][0].toLowerCase() == fragments[0][0] ||                                                                  |
    |      fragments[1][0].toLowerCase() == fragments[1][0]   ------  IF --->  console.error("Incorrect spelling!")             |
    |                                                                                                                           |
    |   |<-----------------------------------------------------------ELSE                                                       |
    |   |                                                                                                                       |
    |   + console.log("Valid name!")                                                                                            |
    |   |                                                                                                                       |
    |   v                                                                                                                       | 
    +---------------------------------------------------------------------------------------------------------------------------+      
