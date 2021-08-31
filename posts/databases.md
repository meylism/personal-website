---
title: A walk in the park of databases 
date: "2021-08-31"
description: We discuss database history, classification, models, and many more.
---

A **database** is an organized collection of data. A **database management system**(DBMS) is a software system that acts as a middle-man between the database itself and end users(applications, admins). Commons features of DBMSs include:

- data definition/retrieval/update
- transactions
- authorization
- concurrency
- etc

People classify DBMSs according to **data models** they support.

> The data model of a DBMS specifies how data is stored, related and manipulated.

> With relation databases, schema means database, relation means table, domain/attribute means column, and tuple means row.

## History

The development of database technologies can be divided into three based on their data models:

1. Navigational: A type of database in which records are discovred/processed by following references from one record to another. The invention of direct-access storage devices made this possible as programmers now are not restricted by sequential access manner of earlier storage devices; they can choose any arbitrary route to access a record, given that another record has a reference pointing to it.
2. Relational/SQL: Developed by Edgar Frank Codd, the model deviated from the usage of linked-lists for storing records to using tables (reasons of which we discuss below).

   Codd used terms relations(tables), tuples(rows) and domains(columns) in his description of the model. The relational model assigns a seperate table for each entity. Each table has a fixed-number of columns containing the entity's attributes. One or more of these columns function as a primary key, which uniquely identifies each row in the table. When a record in a table needs to reference a record in another table, the primary key is used rather than record's physical address, unlike the navigational model. Having entity's data stored in normalized forms ensure that each "fact" is stored only once, consequently simplifying update operations. Virtual tables, called views, are saved queries(just query itself, not its resulting set) and exposed to users, essentially work as a proxy table over original tables in the database.

   Entity-relationship(ER) data model, designed by Peter Chen, is an abstract data model gained popularity in database design, especially in relational model. It described interrelated things(tables in our case) by means of different entities, relationships, etc. It had more familiar(easy-to-understand) description than that of earlier relational model. Therefore, ER model was retrofitted as a data modeling construct for the relational model.

   Near to the end of Relational era, we see the rise of object oriented progamming. OOP model is based on software engineering principles. And relaional model is based on mathematical principles, as discussed above. The fact that two models do not have same model leads to a set of difficulties known as **object-relational impedance mismatch**. Object databases and object-relational databases try to address these difficulties. Libraries, known as object-relational mappings(ORMs), try to solve the problem on the programming side.
3. Post-relational: 

### Navigational vs Relational

Say we want to store data about users having the following attributes: name, surname, DOB, addresses and phone numbers. In navigational model, we would place all these attributes in a single variable-length record. Whereas in relational model, we would store them in user, address, and phone number tables. A record would be created only if the user had the data.

Let's now compare how two models would query data. In the former model, we gather data by following references. In other words, a programmer writes a code in which he tells **how** should the program route (through the links) in order to get/collect the requested data. So, the efficiency is proportional to how well is the programmer.

Things quite differ in the latter model. Given the fact that the former model is relational that has its own mathematical system called **relational calculus**, we can derive a **declarative** query language that exploits the relational calculus in optimizing the query. This is doable as now our queries are expressed in a mathematical logic(rather than program steps as in the case with the former model) that is isomorphic with relational calculus and therefore techniques and theorems from set theory can be exploited. As a result we take the responsibility of finding an efficient path from programmer and put it on DBMSs.
