class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        original = x
        reversed_x = 0
        while x != 0:
            last_digit = x % 10
            reversed_x = reversed_x * 10 + last_digit
            x //= 10
        return original == reversed_x
