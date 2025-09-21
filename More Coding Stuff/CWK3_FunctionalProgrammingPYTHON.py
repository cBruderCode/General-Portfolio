"""
Python functional programming classwork
3/17/2021
Ryan Mattfeld AND Elizabeth von Briesen

"""
import functools

#Create and test a solution to solve the following problems using
# functional programming:
strs = ["elon", "mascot", "phoenix", "clemson", "has", "tiger", "niner", "eagle"]
ints = [5, 17, 7, 2, 4, 15, 32, 90]

# Problem 1: Given a list of Strings, create and print a list of strings, but
# omit any that contain an 'a'. EX) given the inputs in "strs" above, the result
# should be a list with ["elon", "phoenix", "clemson", "tiger", "niner"] - Print your result to test

no_as = list(filter(lambda x: "a" not in x, strs))
print("Problem 1: " , no_as)


# Problem 2: Given a list of Strings, first append an 'i' to the end,
# then remove any strings that contain the substring 'ni'.

added_i = list(map(lambda x: x + "i", strs))
remove_ni = list(filter(lambda x: "ni" not in x, added_i))
print("Problem 2: ", remove_ni)


# Problem 3: Given a list of integers, create and print a list with all
# "teens" removed (teens are any numbers between 13 and 19)

between_list = list(filter(lambda x: x < 19 and x > 13, ints))
print("Problem 3: ", between_list)


# Problem 4: Given a list of integers, remove any with two or more digits.
# Then, sum the squares of all remaining numbers and add the product to 42.
# (In the 'ints' list provided, the correct answer should be 42+25+49+4+16 = 136

less_than_10 = list(filter(lambda x: x < 10, ints))
square_that = list(map(lambda x: x ** 2, less_than_10))
combined_nums = functools.reduce(lambda x,y: x + y, square_that)
print("Problem 4: ", combined_nums + 42)


# Problem 5: Given a list of Strings, create and print a list of strings by first
# removing any with lengths between 4 and 6 (inclusive), then add a "z" after the
# first letter of each remaining word.

filtered_length = list(filter(lambda x: len(x) < 4 or len(x) > 6, strs))
add_a_z = list(map(lambda x: x[0] + "z" + x[1:], filtered_length))
print("Problem 5: ", add_a_z)


# Problem 6: Given a list of integers, create and print a list of each of the
# numbers multiplied by 3, removing any of the resulting values that end in 1.

multi_3 = list(map(lambda x: x * 3, ints))
remove_1 = list(filter(lambda x: x % 10 != 1, multi_3))
print("Problem 6: ", remove_1)


# Problem 7: Given a collection of integers, remove any that end in 7, then
# add together each of the remaining numbers plus an additional 2 every time
# a pair of numbers is added.
#
# EX: If we had a list with the following remaining
# values (after numbers ending in 7 are removed): [5,2,4,15,90].
#The math requested for this problem would result in:
# (5 + 2 + 2) # given that the first two values are 5 and 2, add them plus 2
# (9 + 4 + 2) # Given 11 from the prior sum, add 4 plus 2 extra
# (15 + 15 + 2)// Given 17 from the prior sum, add 15 plus 2 extra
# (32 + 90 + 2)// Finally, add 90 plus 2 to the running sum to get the result of 124
# HINT: This is a relatively easy operation - the whole process can be accomplished with
# two function calls.

dont_7 = list(filter(lambda x: x % 10 != 7, ints))
combined_giga = functools.reduce(lambda x,y: x + y + 2, dont_7)
print("Problem 7: ", combined_giga + 2)
