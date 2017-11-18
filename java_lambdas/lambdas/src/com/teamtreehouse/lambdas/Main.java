package com.teamtreehouse.lambdas;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {



    public static void main(String[] args) {
        //usingLambdasInLongForm();
        usingLambdasInShortForm();
    }

    public static void usingAnonymousInLineClass() {
        List<Book> books = Books.all();

        Collections.sort(books, new Comparator<Book>() {
            @Override
            public int compare(Book b1, Book b2) {
                return b1.getTitle().compareTo(b2.getTitle());
            }
        });

        for(Book book : books) {
            System.out.println(book);
        }
    }

    public static void usingLambdasInLongForm() {
        List<Book> books = Books.all();

        Collections.sort(books, (Book b1, Book b2) -> {
            return b1.getTitle().compareTo(b2.getTitle());
        });

        for(Book book : books) {
            System.out.println(book);
        }
    }

    public static void usingLambdasInShortForm() {
        List<Book> books = Books.all();

        /* if you have a single line method, you actually don't need the curly braces.
        * When you only have a one-liner you actually don't even need the return.
         * So that one-liner is called an expression type body. */
        Collections.sort(books, (b1, b2) -> b1.getTitle().compareTo(b2.getTitle()));

        books.forEach(book -> System.out.println(book));
    }

    public static void usingMethodReferences() {
        List<Book> books = Books.all();

        /* So, instead of writing out the lambda there, you can actually use a method reference.
        So, what we're gonna say is the class book has a method called getTitle on it, and it should use that.
        Use the getTitle method on each instance to get the value that will be used for the comparing command */
        Collections.sort(books, Comparator.comparing(Book::getTitle));

        books.forEach(System.out::println);
    }


}
