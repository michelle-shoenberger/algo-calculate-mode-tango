def calculate_mode(lst):
    count = {}
    highest = 0
    ans = []
    for num in lst:
        count[num] = count[num] + 1 if num in count else 1
        if count[num] > highest:
            highest = count[num]
            ans = [num]
        elif count[num] == highest:
            ans.append(num)
    return ans

