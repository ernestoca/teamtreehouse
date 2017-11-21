package com.teamtreehouse.jobs;

import com.teamtreehouse.jobs.model.Job;
import com.teamtreehouse.jobs.service.JobService;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class App {

  public static void main(String[] args) {
    JobService service = new JobService();
    boolean shouldRefresh = false;
    try {
      if (shouldRefresh) {
        service.refresh();
      }
      List<Job> jobs = service.loadJobs();
      System.out.printf("Total jobs:  %d %n %n", jobs.size());
      explore(jobs);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  private static void explore(List<Job> jobs) {
    // Your amazing code below...
    getCaptionsStream(jobs);

    System.out.println(
            jobs.stream()
                    .map(Job::getCompany)
                          .max(Comparator.comparingInt(String::length))//comparingInt here, takes a function and
                      //returns a function to max. This functions are called higher order functions
    );

    String searchTerm = "trampoline";

    Optional<Job> foundJob = luckySearchJob(jobs, searchTerm);
    foundJob.ifPresent(job -> System.out.print(job.getTitle()));
    System.out.println(foundJob
                        .map(Job::getTitle)
                        .orElse("No jobs found"));

    List<String> companies = jobs.stream()
            .map(Job::getCompany)
            .distinct()//Stateful intermediate operation
            .sorted()
            .collect(Collectors.toList());

    Job firstOne = jobs.get(0);
    System.out.println("First job: "+firstOne);
    Predicate<Job> caJobChecker = job -> job.getState().equals("CA");

    Job caJob = jobs.stream()
            .filter(caJobChecker)
            .findFirst()
            .orElseThrow(NullPointerException::new);//This is a method reference to the constructor

    emailIfMatches(firstOne, caJobChecker);
    emailIfMatches(caJob, caJobChecker.and(App::isJuniorJob));//if this is true and this is true

    Function<String, LocalDateTime> indeedDateConverter =
            dateString -> LocalDateTime.parse(dateString, DateTimeFormatter.RFC_1123_DATE_TIME);

    // 3 / 15 / 17
    Function<LocalDateTime, String> siteDateStringCoverter =
            date -> date.format(DateTimeFormatter.ofPattern("M / d / YY"));

    jobs.stream()
            .map(Job::getDateTimeString)
            .map(indeedDateConverter)
            .map(siteDateStringCoverter)
            .limit(5)
            .forEach(System.out::println);

    jobs.stream()
            .map(Job::getDateTimeString)
            .map(indeedDateConverter.andThen(siteDateStringCoverter))
            .limit(5)
            .forEach(System.out::println);

    //Functional Composition
    Function<String, String> indeedToSiteDateStringConverter = indeedDateConverter.andThen(siteDateStringCoverter);
    jobs.stream()
            .map(Job::getDateTimeString)
            .map(indeedToSiteDateStringConverter)
            .limit(5)
            .forEach(System.out::println);

    Function<String, String> converter = createDateStringConverter(
          DateTimeFormatter.RFC_1123_DATE_TIME,
          DateTimeFormatter.ISO_DATE
    );


    jobs.stream()
            .map(Job::getDateTimeString)
            .map(converter)
            .limit(5)
            .forEach(System.out::println);

  }

  private static void displayCompaniesMenuImperatively(List<String> companies) {
    for (int i=0; i <20; i++) {
      System.out.printf("%d. %s %n", i +1, companies.get(i));
    }
  }

  private static void displayCompaniesMenuDeclaratively(List<String> companies) {
    IntStream.rangeClosed(1, 20)
            .mapToObj(i -> String.format("%d. %s", i, companies.get(i-1)))
            .forEach(System.out::println);
  }

  private static void usingInfiniteStream(List<String> companies) {
    int pageSize = 20;
    int numPages = companies.size() / pageSize;
    IntStream.iterate(1, i -> + pageSize) ///This iterates forever
            .mapToObj(i -> String.format("%d. %s", i, companies.get(i)))
            .limit(numPages)//We use limit to stop the iteration
            .forEach(System.out::println);
  }

  private static Optional<Job> luckySearchJob(List<Job> jobs, String searchTerm) {
    Optional<Job> foundJob = jobs.stream()
            .filter(job -> job.getTitle().contains(searchTerm))
            .findFirst();
    return foundJob;
  }

  private static List<Job> getThreeJuniorsJobsImperatively(List<Job> jobs) {
    List<Job> juniorJobs = new ArrayList<>();
    for (Job job:jobs) {
      if (isJuniorJob(job)) {
        juniorJobs.add(job);
        if (juniorJobs.size() >= 3) {
          break;
        }
      }
    }
    return juniorJobs;
  }

  private static List<Job> getThreeJuniorJobsStream(List<Job> jobs) {
    return jobs.stream()
            .filter(App::isJuniorJob)//filter: is a stateless intermediate function,
                      // It's always going to do the same thing no matter what is going on in the pipeline around it. It does not care about state.
            .limit(3)//But limit here has some knowledge of the stream so it's categorized as a stateful intermediate operation.
                      //Now the state that this method knows about is how many jobs have come through. It's also shorcicuited
                      //So limit is said to be a stateful short circuiting intermediate operation
            .collect(Collectors.toList());//Terminal operation.

  }

  private static boolean isJuniorJob(Job job) {
    String title = job.getTitle().toLowerCase();
    return title.contains("junior") || title.contains("jr");
  }

  /**
   * Intermediate operations are further divided into stateless and stateful operations. Stateless operations,
   * such as filter and map, retain no state from previously seen element when processing a new element -- each element
   * can be processed independently of operations on other elements. Stateful operations, such as distinct and sorted,
   * may incorporate state from previously seen elements when processing new elements.
   */

  private static void printPortlandJobsImperatively(List<Job> jobs) {
    for (Job job:jobs) {
      if(job.getState().equals("OR") && job.getCity().equals("Portland")) {
        System.out.print(job);
      }
    }
  }

  private static void printPortlandJobsStream(List<Job> jobs) {
    jobs.stream()
            .filter(job -> job.getState().equals("OR"))
            .filter(job -> job.getCity().equals("Portland"))
            .forEach(System.out::println);
  }

  private static List<String> getCaptionsImperatively(List<Job> jobs) {
    List<String> captions = new ArrayList<>();
    for (Job job:jobs) {
      if (isJuniorJob(job)) {
        captions.add(job.getCaption());
        if (captions.size() >= 3) {
          break;
        }
      }
    }
    return captions;
  }

  private static List<String> getCaptionsStream(List<Job> jobs) {
    return jobs.stream()
            .filter(App::isJuniorJob)
            .map(Job::getCaption)//Method Reference Inference
            .limit(3)
            .collect(Collectors.toList());//Terminal operation.
  }

  public static Map<String, Long> getSnippetWordCountsImperatively(List<Job> jobs) {

    Map<String, Long> wordCounts = new HashMap<>();

    for (Job job : jobs) {
      String[] words = job.getSnippet().split("\\W+");
      for (String word : words) {
        if (word.length() == 0) {
          continue;
        }
        String lWord = word.toLowerCase();
        Long count = wordCounts.get(lWord);
        if (count == null) {
          count = 0L;
        }
        wordCounts.put(lWord, ++count);
      }
    }
    return wordCounts;
  }

  public static Map<String, Long> getSnippetWordCountsStream(List<Job> jobs) {
    return jobs.stream()
            .map(Job::getSnippet)
            .map(snippet -> snippet.split("\\w+"))
            .flatMap(Stream::of)//Stream::of = words -> Stream.of(words)
              // flat map can take anything and it expects that what is returned is a "stream".
            //So, pass in our array to "stream.of", and that makes a new stream of "this is a job".
            .filter(word -> word.length() > 0)
            .map(String::toLowerCase)
            .collect(Collectors.groupingBy(
                    Function.identity(), //Function.identity() = word -> word,
                    Collectors.counting()
            ));
    /**
     * The overarching principle of processing a stream of items and
     * producing something new through a terminal operation is called reduction.
     * */
  }

  /**
   * Pure Functions: When given the same input, a pure function will always produce the same output.
   *  Produce no side effects. forEach and peek are consumer and designated to take side effects (they don't return
   *  a value). 'System.out.println' has a side effects.
   * Why would writing to a file inside of a function break it's purity?
   * The writing won't actually happen if the function is memoized, because the result will just be used.
   *
   * A function that accepts another function is one way to create what is known as Higher Order Functions.
   * It allows you to create extensible code. Let's get some experience writing one.
   *
   * A higher order function is a function or method that either accepts a function as a parameter or returns a
   * functions.
   */
  public static void emailIfMatches(Job job, Predicate<Job> checker) {
    if(checker.test(job)) {
      System.out.print("I'm sending an email about " + job);
    }
  }

  /**
   * A closure allows you to create a lexical scope for functions that will run later.
   * Java handles things by making those values be *effectively* final
   * */
  public static Function<String, String> createDateStringConverter(DateTimeFormatter inFormatter,
        DateTimeFormatter outFormater) {
    int meaningOfLife = 42;//Effectively final, so it can be use inside the function
      return dateString -> {
        return meaningOfLife + "----------" + LocalDateTime.parse(dateString, inFormatter)
                .format(outFormater);
      };
  }
}
