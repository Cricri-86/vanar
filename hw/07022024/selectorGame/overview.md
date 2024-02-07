```

<textarea
...
value="h1 {...}" <--- user input
...\
... +---------------------+
...                       |
id="inputCode"            |
...     |                 |
        |                 |
        v                 v
    variable: inputCode.value  --- String   
                    .split('{')
                          |
                          v
                   ['h1', '...}'] --- Array
                          |   \  
                          |    +---+
                          v        v 
                         [0]      [1] 
                          |        |
                          |        | 
                          |        v
                          |       '...}'.replace('}'.'') 
                          |        v 
                          |       '...' 
                          |        
                          v
                         'h1'  / selector            
>
