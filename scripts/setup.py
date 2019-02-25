#!/usr/bin/python

# setup script for installing python scripts

from setuptools import setup

setup(
        name='greeter',
        version='0.0.1',
        entry_points={
            'console_scripts':[
                'greeter=greeter:main'
                ]
            }
        )

