    
    
    var myObject = {
        a: undefined,
        b: null,
        c: true,
        pi: 3.141516,
        name: "Bernardo",
        available: true,
        fn: function bar(){},
        obj: {val: 123}
    };


        var name1,name2;
        name1 = "Bernardo";
        name2 = nombre1;

        /* 
         * name1 = "Bernardo"
         * name2 = "Bernardo"
         */

        name2 = "Nick";
        /* 
         * name1 = "Bernardo"
         * name2 = "Nick"
         */
        
        
        var object1,object2;
        
        object1 = {
            name: "Bernardo"
        };
        
        object2 = object1;
        
        object2.name = "Nick";
        
        /* 
         * object1.name = "Nick"
         * object2.name = "Nick"
         */
        
        function myFunction(a,b){
            return a+b;
        }
        
        myFunction.newVar = "some text";
        
        /*
         * myfunction = {
         *                name: "myFunction",
         *                length: 2,
         *                newVar: "some text",
         *                prototype: ...  <- The Key
         *              }
         */
        
        
        var myObject = {
            id: 33,
            getId: function(){
                return this.id;
            }
        };
        
        /*
         * myObject ={
         *          id: 33,
         *          getId: {name:"getId"....,prototype: ...},
         *       }
         */
        
        var object1 = {
            id: 33,
            getId: function(){
                return this.id;
            }
        };
        var object2 = {
            id: 33,
            getId: function(){
                return this.id;
            }
        };
        
        
        var objectType = {
            id: 0,
            getId: function(){
                return this.id;
            }
        };
        
        
        var child = Object.create(objectType);
        child.id = 2;
        
        var grandChild = Object.create(child);
        /**
         * objectType.get() = 0,
         * child.get()      = 2,
         * grandChild.get() = 2
         */
                
        
        
        var moviePrototype = {
            constructor: function(code,name){
                this._imdbCode = code;
                this._name = name;
            },
            getImdbCode : function(){
                return this._imdbCode;
            },
            getName: function(){
                return this._name;
            }
        };
        
        var movie1 = Object.create(moviePrototype);
        movie1.constructor(1123,"Scary Movie");
        
        var movie2 = Object.create(moviePrototype);
        movie2.constructor(3324,"Forrest Gump");
        
        movie1.getImdbCode(); // 1123
        movie2.getName(); // "Forrest Gump"
        
        
        function MoviePrototype (code,name) {
                this._imdbCode = code;
                this._name = name;
        };
        MoviePrototype.prototype.getImdbCode = function(){
            return this._imdbCode;
        };
        MoviePrototype.prototype.getName = function(){
                return this._name;
        };
        
        var movie1 = new MoviePrototype(1123,"Scary Movie");
        var movie2 = new MoviePrototype(3324,"Forrest Gump");
        
        movie1.getImdbCode(); // 1123
        movie2.getName(); // "Forrest Gump"
        
        
        
        //FIREBASE
        //Algunos Eventos basicos disparados por el motor de Firebase
        dataSource.on('child_added',function(){});
        dataSource.on('child_removed',function(){});
        dataSource.on('child_changed',function(){});

        //Agregar contenido
        dataSource.push({});

        //Obtener un objeto almacenado
        dataSource.child(reference);



                
                