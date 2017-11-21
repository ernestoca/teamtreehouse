package me.teamtreehouse.functional.programming;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.function.Consumer;

public class Main {

    public static void main(String[] args) {
        List<String> ingredients = Arrays.asList(
            "flour", "salt", "baking powder", "butter", "eggs, milk"
        );


        /**
         * Imperative programming
         *
         * */
        boolean hasEggs = false;

        for(int i=0; i<ingredients.size(); i++) {
            String ingridient = ingredients.get(i);
            if(ingridient.equals("eggs")) {
                hasEggs = true;
                break;
            }
        }

        if(hasEggs) {
            System.out.println("Has eggs");
        }


        /**
         * Declarative programming
         * */

        if(ingredients.contains("eggs")) {
            System.out.println("Has eggs");
        }

        /**
         * Functional programming.
         * Don't care about what, cares about how
         */
        //Iterable since java 8 has a functional interface forEach.
        ingredients.forEach(new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println(s);
            }
        });

        //Replacing it by a lambda. a method that accepts a function as a parameter is also referred to as a higher-order
        //function. It's a short hand for the previous. Sometimes also referred as syntatic sugar.
        ingredients.forEach((String ingredient) -> {
            System.out.println(ingredient);
        });

        //Lambda can also infers the type of what we expect, so we can remove String, and since is just one line of code,
        //we can remove the {}
        ingredients.forEach(ingredient -> System.out.println(ingredient));

        //We can create a function a pass to the for each
        Consumer<String> printer = ingredient -> System.out.println(ingredient);
        ingredients.forEach(printer);

        //System.out.println can be replaced with a method reference.
        ingredients.forEach(System.out::println);

        Main.yell("But I want that cupcake");
        ingredients.forEach(Main::yell);

        Main.yell(null);
    }

    public static void yell(String words) {
        Objects.requireNonNull(words, () -> "Created issue"+ Main.createIssue());
        System.out.printf("%s!!!!! %n", words.toUpperCase());
    }

    private static String createIssue() {
        System.out.println("Some external API call");
        return "#ABCD123";
    }

    /**
     * - Consumer, a function that accepts something and returns nothing. These are useful when you need to be provided a value in context.
     * - Supplier, this accepts nothing but returns a value. This is great when you need something initially, like we did in our yell method.
     * - Function, this takes a single argument, and returns a value. This is great for transformation.
     * - Predicate accepts a parameter, and returns a boolean value, helpful when filtering value.
     *
     * The amount of parameters that a function accepts is referred to as parity.
     * */
}
