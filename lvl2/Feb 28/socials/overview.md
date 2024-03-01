



                 Object                    User
                 /                         /
+---------------+-------+        +----+   +                          
|                       |        |    |   |                          
|  1. prototype     <------------+    +---------------------------------+
|                       |        |    |                                 | 
|   2. utils            |        |    |  1.prototype:                   |   
|                       |        |    |   this.name = name              |
|                       |        |    |   this.age = age                |
|                       |        |    |   this.online = online          |      user_1  |
+-----------------------+        |    |                                 |    /         |  
                                 |    |                               <-----+- user_2  | <--------+
                                 |    |                                 |    \         |          |
                                 |    |                                 |      user_3  |          |
                                 |    |   2.render                      |                         |
                                 |    |    console.log(`                |                         |
                                 |    |     [${this.name}]              |                         | 
                                 |    |     ${this.online ? '◉' : '◎'} |                         |
                                 |    |      `)                         |                         |
                                 |    |                                 |                         |
                                 |    +---------------------------------+                         |
                                 |                                                                |
                                 |                                                                |
                                 |                                      Message                   |
                                 |                                       /                        |
                                 +-----------------------------------+  +                         |  
                                                                     |  |                         |                     
                                                                    +-----------------------------|-----+
                                                                    |                             |     | 
                                                                    |  1.prototype:               |     |   
                                                                    |   this.content = content    |     |
                                                                    |   this.status = status      |     |
                                                                    |                            /      |
                                                                    |                    +------+----+  |       
                                                                    |   this.from_user = | from_user |  |     
                                                                    |   this.to_user   = | to_user   |  |          
                                                                    |                    +-----------+  |       message_1
                                                                    |                                   |     /
                                                                    |                                <-------+- message_2   
                                                                    |  2.render                         |     \ 
                                                                    |    console.log(this.content)      |       message_3    
                                                                    |                                   |
                                                                    +-----------------------------------+
