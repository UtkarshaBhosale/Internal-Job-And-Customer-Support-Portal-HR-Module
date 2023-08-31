package com.axis.ijp.entity;

import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class JobDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "job_id")
	private int jobId;

	private String jobTitle;

	private String jobDescription;

	private String department;

	private String qualification;

	private String jobLocation;

	private Date applicationDeadline;
	//
	// @OneToMany(mappedBy = "job", cascade = CascadeType.ALL)
	// private List<JobApplication> jobApplication;

	public JobDetails() {
		super();
	}
	
	public JobDetails(int jobId, String jobTitle, String jobDescription, String department, String qualification,
			String jobLocation, Date applicationDeadline) {
		super();
		this.jobId = jobId;
		this.jobTitle = jobTitle;
		this.jobDescription = jobDescription;
		this.department = department;
		this.qualification = qualification;
		this.jobLocation = jobLocation;
		this.applicationDeadline = applicationDeadline;
	}

	public int getJobId() {
		return jobId;
	}

	public void setJobId(int jobId) {
		this.jobId = jobId;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getJobDescription() {
		return jobDescription;
	}

	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getJobLocation() {
		return jobLocation;
	}

	public void setJobLocation(String jobLocation) {
		this.jobLocation = jobLocation;
	}

	public Date getApplicationDeadline() {
		return applicationDeadline;
	}

	public void setApplicationDeadline(Date applicationDeadline) {
		this.applicationDeadline = applicationDeadline;
	}
	
}
