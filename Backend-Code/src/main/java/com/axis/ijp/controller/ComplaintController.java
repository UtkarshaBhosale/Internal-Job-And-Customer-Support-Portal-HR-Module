package com.axis.ijp.controller;

import com.axis.ijp.dto.ComplaintDTO;

import com.axis.ijp.entity.Complaint;
import com.axis.ijp.entity.FAQ;
import com.axis.ijp.service.ComplaintService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin(origins = "http://localhost:3000")
public class ComplaintController {

	private final ComplaintService complaintService;

    @Autowired
    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    /**
     * Submit a new complaint.
     * Author: Pallavi Bolar
     */
    @PostMapping("/submit/{employeeId}")
    public ResponseEntity<Complaint> submitComplaint(@PathVariable int employeeId, @RequestBody ComplaintDTO complaint) {
        Complaint submittedComplaint = complaintService.submitComplaint(employeeId, complaint.getSubject(),
                complaint.getDescription());
        complaintService.saveSuggestedFaqToComplaint(submittedComplaint.getComplaintId());
        return ResponseEntity.ok(submittedComplaint);
    }

    /**
     * Get complaints by employee ID.
     * Author: Pallavi Bolar
     */
    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<Complaint>> getComplaintsByEmployee(@PathVariable int employeeId) {
        List<Complaint> complaints = complaintService.getComplaintsByEmployee(employeeId);
        return ResponseEntity.ok(complaints);
    }

    /**
     * Get complaints by employee name.
     * Author: Pallavi Bolar
     */
    @GetMapping("/employeeByName/{employeeName}")
    public ResponseEntity<List<Complaint>> getComplaintsByEmployeeName(@PathVariable String employeeName) {
        List<Complaint> complaints = complaintService.getComplaintsByEmployeeName(employeeName);
        return ResponseEntity.ok(complaints);
    }

    /**
     * Get suggested FAQs for a complaint.
     * Author: Krishnapriya S
     */
    @GetMapping("/suggestedFaqs/{complaintId}")
    public List<FAQ> getSuggestedFaqs(@PathVariable int complaintId) {
        return complaintService.getSuggestedFaqsForComplaint(complaintId);
    }
}
