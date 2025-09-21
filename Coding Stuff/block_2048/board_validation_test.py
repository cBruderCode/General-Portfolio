#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Code used to test the board validation functions.

Students: No changes are necessary in this file.

author: D. Hutchings
last updated: Nov 09 2020
"""

import ai

def print_board(board):
    last = len(board) - 1
    print('[', board[0])
    for index in range(1, last):
        print(' ', board[index])
    print(' ', board[last], ']')

def test_rectangle():    
    rects = [
        [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
    
        [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    ]
    
    not_rects = [
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
    
        [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
    
        [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
    
        [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            []
        ]
    ]
    
    count = 0
    for board in rects:
        if ai.is_rectangle(board) != True:
            print('Failure: is_rectangle should return True for this board:')
            print_board(board)
            count += 1
    for board in not_rects:
        if ai.is_rectangle(board) != False:
            print('Failure: is_rectangle should return False for this board:')
            print_board(board)
            count += 1
    if count == 0:
        print('Success: is_rectangle passed all tests')


def test_2048_data():
    good_data = [
        [
            [2, 4, 8, 16, 32],
            [64, 128, 256, 512, 1024],
            [2048, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
    
        [
            [2, 2, 2, 2, 2, 2],
            [4, 4, 4, 4, 4, 4],
            [8, 8, 8, 8, 8, 8]
        ]
    ]
    
    bad_data = [    
        [
            [1, 2, 2, 2, 2],
            [4, 4, 4, 4, 4],
            [8, 8, 8, 8, 8]
        ],
        [
            [2, 2, 2, 2, 2],
            [4, 4, 4, 4, 4],
            [3, 8, 8, 8, 8]
        ],
        [
            [2, 2, 2, 2, 5],
            [4, 4, 4, 4, 4],
            [8, 8, 8, 8, 8]
        ],
        [
            [2, 2, 2, 2, 2],
            [4, 4, 4, 4, 4],
            [8, 8, 8, 8, 9]
        ],
        [
            [2, 2, 2, 2, 2],
            [4, 4, 4096, 4, 4],
            [8, 8, 8, 8, 8]
        ]
    ]

    count = 0
    for board in good_data:
        if ai.is_2048_data(board) != True:
            print('Failure: is_2048_data should return True for this board:')
            print_board(board)
            count += 1
    for board in bad_data:
        if ai.is_2048_data(board) != False:
            print('Failure: is_2048_data should return False for this board:')
            print_board(board)
            count += 1
    if count == 0:
        print('Success: is_2048_data passed all tests')


def test_no_holes():
    
    # remember, the boards are upside down
    
    good_boards = [
        [
            [4, 0, 0, 0, 0], # actually the bottom row
            [2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 8, 0, 0, 0], # actually the bottom row
            [0, 4, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 2, 0, 0], # actually the bottom row
            [0, 0, 8, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 4, 0], # actually the bottom row
            [0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 8], # actually the bottom row
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 8, 0], # actually the bottom row
            [0, 0, 0, 4, 0],
            [0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 2, 0, 0], # actually the bottom row
            [0, 0, 4, 0, 0],
            [0, 0, 8, 0, 0],
            [0, 0, 4, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 8, 0, 0, 0], # actually the bottom row
            [0, 4, 0, 0, 0],
            [0, 2, 0, 0, 0],
            [0, 4, 0, 0, 0],
            [0, 8, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [8, 0, 0, 0, 0], # actually the bottom row
            [2, 0, 0, 0, 0],
            [4, 0, 0, 0, 0],
            [8, 0, 0, 0, 0],
            [4, 0, 0, 0, 0],
            [2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 8], # actually the bottom row
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 2],
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 8],
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 2]  # actually the top row
        ]
    ]
    
    bad_boards = [
        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 4, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 0, 8, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 8, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2]  # actually the top row
        ]
    ]
    
    count = 0
    for board in good_boards:
        if ai.no_holes(board) != True:
            print('Failure: no_holes should return True for this board:')
            print_board(board)
            count += 1
    for board in bad_boards:
        if ai.no_holes(board) != False:
            print('Failure: no_holes should return False for this board:')
            print_board(board)
            count += 1
    if count == 0:
        print('Success: no_holes passed all tests')


def test_matches_resolved():
    good_boards = [
        [
            [4, 2, 4, 2, 4], # actually the bottom row
            [2, 4, 2, 4, 2],
            [4, 0, 4, 0, 4],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [4, 2, 4, 2, 4], # actually the bottom row
            [2, 4, 2, 4, 2],
            [0, 2, 0, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],


        [
            [0, 0, 0, 0, 0], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 2, 4, 8], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [2, 0, 0, 4, 8], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [2, 4, 0, 0, 8], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [2, 4, 8, 0, 0], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ]

    ]
    
    bad_boards = [
        [
            [2, 0, 0, 0, 0], # actually the bottom row
            [2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 4], # actually the bottom row
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [2, 0, 0, 0, 0], # actually the bottom row
            [4, 0, 0, 0, 0],
            [8, 0, 0, 0, 0],
            [4, 0, 0, 0, 0],
            [2, 0, 0, 0, 0],
            [4, 0, 0, 0, 0],
            [4, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 4], # actually the bottom row
            [0, 0, 0, 0, 8],
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 2],
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 8],
            [0, 0, 0, 0, 8]  # actually the top row
        ],

        [
            [0, 8, 0, 0, 0], # actually the bottom row
            [0, 4, 0, 0, 0],
            [0, 4, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 2, 0, 0], # actually the bottom row
            [0, 0, 4, 0, 0],
            [0, 0, 8, 0, 0],
            [0, 0, 8, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 4, 0], # actually the bottom row
            [0, 0, 0, 2, 0],
            [0, 0, 0, 8, 0],
            [0, 0, 0, 2, 0],
            [0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 0, 8], # actually the bottom row
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 2],
            [0, 0, 0, 0, 4],
            [0, 0, 0, 0, 8],
            [0, 0, 0, 0, 8],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 8, 0], # actually the bottom row
            [0, 0, 0, 4, 0],
            [0, 0, 0, 2, 0],
            [0, 0, 0, 4, 0],
            [0, 0, 0, 8, 0],
            [0, 0, 0, 4, 0],
            [0, 0, 0, 4, 0]  # actually the top row
        ],

        [
            [2, 2, 0, 0, 0], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 4, 4], # actually the bottom row
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [2, 4, 0, 0, 0], # actually the bottom row
            [4, 8, 0, 0, 0],
            [8, 2, 0, 0, 0],
            [4, 8, 0, 0, 0],
            [2, 4, 0, 0, 0],
            [4, 2, 0, 0, 0],
            [8, 8, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 2, 8], # actually the bottom row
            [0, 0, 0, 4, 2],
            [0, 0, 0, 8, 4],
            [0, 0, 0, 4, 8],
            [0, 0, 0, 2, 4],
            [0, 0, 0, 4, 2],
            [0, 0, 0, 8, 8]  # actually the top row
        ],

        [
            [0, 2, 8, 0, 0], # actually the bottom row
            [0, 4, 4, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 2, 4, 0], # actually the bottom row
            [0, 0, 4, 2, 0],
            [0, 0, 8, 8, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 0, 0, 2, 4], # actually the bottom row
            [0, 0, 0, 4, 8],
            [0, 0, 0, 8, 2],
            [0, 0, 0, 4, 4],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [2, 8, 0, 0, 0], # actually the bottom row
            [4, 2, 0, 0, 0],
            [8, 4, 0, 0, 0],
            [4, 8, 0, 0, 0],
            [2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ],

        [
            [0, 8, 2, 0, 0], # actually the bottom row
            [0, 4, 8, 0, 0],
            [0, 2, 4, 0, 0],
            [0, 4, 8, 0, 0],
            [0, 8, 2, 0, 0],
            [0, 4, 4, 0, 0],
            [0, 0, 0, 0, 0]  # actually the top row
        ]

    ]
    count = 0
    for board in good_boards:
        if ai.matches_resolved(board) != True:
            print('Failure: matches_resolved should return True for this board:')
            print_board(board)
            count += 1
    for board in bad_boards:
        if ai.matches_resolved(board) != False:
            print('Failure: matches_resolved should return False for this board:')
            print_board(board)
            count += 1
    if count == 0:
        print('Success: matches_resolved passed all tests')

if __name__ == '__main__':
    test_rectangle()
    test_2048_data()
    test_no_holes()
    test_matches_resolved()