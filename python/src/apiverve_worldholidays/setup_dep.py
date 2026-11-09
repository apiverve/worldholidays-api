from setuptools import setup, find_packages

setup(
    name='apiverve_worldholidays',
    version='1.2.5',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='World Holidays lists public holidays and observances for any two-letter country code, optionally for a state or region. It returns holiday dates, local and English names, day of week, event types and substitute-day flags, and can check whether a single date is a holiday.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/worldholidays?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
