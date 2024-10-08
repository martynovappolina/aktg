FROM python:3.9
RUN mkdir /server
WORKDIR /server
COPY ./back/requirements.txt /server/requirements.txt
RUN apt-get update && apt-get install -y r-base r-base-dev  
RUN R -e "install.packages('caret', repos='http://cran.rstudio.com/')" 
RUN R -e "install.packages('gbm', repos='http://cran.r-project.org')"
ENV R_HOME /usr/lib/R 
RUN pip install --upgrade pip && \
    pip install -r requirements.txt
COPY ./back /server
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
