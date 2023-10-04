/* eslint-disable prettier/prettier */
import { RabbitMQModule } from "@nestjs-plus/rabbitmq";
import { Module } from "@nestjs/common";
import { MessagingController } from "./app.controller";
import { MessagingService } from "./serviceMessagin";


@Module ( { 
    imports : [ 
        RabbitMQModule . forRoot ( { 
          exchanges: [ 
           { 

             name : 'exchangeTopic' , 
             type : 'topic' ,
            
           } , { 
               name : 'exchangeDirect' , 
               type : 'direct' 
               
             }, { 
              name : 'fanOut1' , 
              type : 'fanout' 
              
            }
         ] , 
         uri : 'amqp://localhost:5672' 
       } ) , 
     ]  , 
     providers: [MessagingService],
     exports: [],
  controllers : [ MessagingController ] 
} )
export  class  RabbitExampleModule  { }