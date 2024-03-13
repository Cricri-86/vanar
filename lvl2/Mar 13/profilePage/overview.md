# Simple Profile Page
CONST PROFILE = { ... }


# Simple Profile Page
    > literal object
    > advanced DOM (tree)


 CODE SPLIT
   > UI (view/template) + component
   > MODEL (data/domain)
   > SERVICES (api/storage/...)   




        PROFILE COMPONENT

                              component root  
                                |        
                                v
 data --------------------> FRAGMENT UI       


const profile = { ... }
n = 1
---------


get
^  set
|   v
profile
 \
  +----- const
   \
 +--+---------------+
 |           { ... }|
 +------------------+  




WINDOW
--------------------------



document
 |
 .
 .
 +-- body
      |
      +-- nav                 rootElement  
      |                        | 
      |                        v 
      +-- div#profileRootElement
      |          |
      |          +-- h3
      |              |  
      |              +-- innerText <---- profile.userName 
      |               
      +-- footer

 MEMORY
 -----------------------
 h3 ----> 



 BUTTON

 document
 |
 .
 .
 +-- html
      |
      +-- head                
      |                document.getElementById('post')      
      |                  /     
      +-- body         rootElement
            |          /
            +-- div#post
                  |
                  |
                  |           
                  +-- btn
                        \ 
                        ref
                          \
                          button {}  - new Button()
                            |
                            +-- innerText: 'Like'
                            +-- onclick: likePost
                                            |
                                            v
                                           ()  => { alert() }  
                          
